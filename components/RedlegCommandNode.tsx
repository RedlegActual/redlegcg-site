import React, { useState, useEffect, useRef } from 'react';
import { getAIResponse } from '../utils/openaiService';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const RedlegCommandNode: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [chatHistory, setChatHistory] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Welcome! What can I help you with today?"
        }
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isTyping]);

    useEffect(() => {
        // Show tooltip shortly after first load
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
        setShowTooltip(false);
    };

    const handleQuickAction = (action: string) => {
        handleSendMessage(action);
    };

    const handleSendMessage = async (text: string = inputMessage) => {
        if (!text.trim()) return;

        // 1. Add user message to UI (and note attachment if present)
        let displayContent = text;
        if (selectedFile) {
            displayContent = `[Attached Logo: ${selectedFile.name}]\n${text}`;
        }

        const newHistory: Message[] = [...chatHistory, { role: 'user', content: displayContent }];
        setChatHistory(newHistory);
        setInputMessage('');

        // Prepare file data if exists
        let fileData = null;
        if (selectedFile) {
            try {
                const base64 = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = error => reject(error);
                });

                fileData = {
                    name: selectedFile.name,
                    type: selectedFile.type,
                    base64: base64
                };
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
        }

        setSelectedFile(null); // Clear file after sending
        setIsTyping(true);

        // 2. Fetch AI Response
        const aiResponseText = await getAIResponse(newHistory, fileData);

        // 3. Add AI response to UI
        if (aiResponseText) {
            setChatHistory(prev => [...prev, { role: 'assistant', content: aiResponseText }]);
        }
        setIsTyping(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <div className="fixed bottom-7 right-7 z-[9999] font-sans">
            {/* Tooltip */}
            {showTooltip && (
                <div
                    className="absolute bottom-[70px] right-0 w-64 bg-black/90 backdrop-blur-md border border-red-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.15)] animate-fade-in-up cursor-pointer transform transition-transform hover:scale-105"
                    onClick={handleOpen}
                >
                    <p className="text-white text-sm font-medium leading-tight">
                        Need help identifying friction?
                        <span className="block text-red-400 mt-1 font-bold text-xs uppercase tracking-wider">Ask REDLEG AI</span>
                    </p>
                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-black border-r border-b border-red-500/30 transform rotate-45"></div>
                </div>
            )}

            {/* Main Chat Window */}
            {isOpen && (
                <div className="absolute bottom-[80px] right-0 w-[92vw] sm:w-[380px] h-[70vh] sm:h-[520px] bg-[#080808]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up-fade origin-bottom-right">

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 bg-[#0c0c0c] border-b border-red-500/20 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <span className="text-red-500 font-bold text-lg leading-none tracking-widest">REDLEG</span>
                                <span className="text-gray-400 text-[9px] font-medium tracking-[0.2em] uppercase mt-1">Consulting Group</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors p-2 -mr-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Messages Area */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-[#ff2e2e] text-white rounded-tr-sm shadow-[0_4px_14px_rgba(255,46,46,0.3)]'
                                    : 'bg-[#111111] border border-red-500/15 text-gray-300 rounded-tl-sm'
                                    }`}>
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                </div>
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest px-1">
                                    {msg.role === 'user' ? 'YOU' : 'REDLEG AI'}
                                </span>
                            </div>
                        ))}

                        {/* Initial Quick Actions (Only show if history is just the 1 opening message) */}
                        {chatHistory.length === 1 && (
                            <div className="flex flex-col gap-2 mt-4 ml-2 animate-fade-in-up">
                                {["Website Design", "Automation & Systems", "Strategy Consultation"].map((action, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleQuickAction(action)}
                                        className="w-full sm:w-10/12 text-left px-4 py-3 bg-[#141414] border border-red-500/30 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-red-500/10 hover:border-red-500/50 hover:shadow-[0_0_10px_rgba(255,0,0,0.1)] transition-all"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex flex-col gap-1 items-start animate-fade-in-up">
                                <div className="px-4 py-3 rounded-2xl bg-[#111111] border border-red-500/15 text-gray-300 rounded-tl-sm w-24">
                                    <div className="flex items-center gap-1.5 h-5">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                                <span className="text-[10px] text-red-500/70 uppercase tracking-widest px-1 flex items-center gap-1">
                                    Analyzing <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
                                </span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-[#0c0c0c] border-t border-white/5 flex flex-col gap-2">
                        {/* Selected File Chip */}
                        {selectedFile && (
                            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-red-500/30 px-3 py-1.5 rounded-lg w-fit">
                                <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                <span className="text-xs text-gray-300 truncate max-w-[200px]">{selectedFile.name}</span>
                                <button
                                    onClick={() => {
                                        setSelectedFile(null);
                                        if (fileInputRef.current) fileInputRef.current.value = '';
                                    }}
                                    className="ml-1 text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        <div className="relative flex items-center">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                accept="image/*,.pdf"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute left-2 p-2 text-gray-500 hover:text-white transition-colors cursor-pointer"
                                title="Upload Logo"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your message..."
                                className="w-full bg-[#141414] border border-red-500/20 text-white text-sm rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-600"
                            />
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={isTyping || !inputMessage.trim()}
                                className="absolute right-2 p-2 text-red-500 hover:text-red-400 disabled:text-gray-600 transition-colors"
                            >
                                <svg className="w-5 h-5 rotate-90 transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#ff2e2e] to-[#8b0000] shadow-[0_0_12px_rgba(255,50,50,0.6),0_0_40px_rgba(255,0,0,0.2)] hover:scale-105 transition-transform duration-300 animate-glow-pulse border border-red-400/30 group"
            >
                {/* Radar Ping Effect behind button */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full border border-red-500/50 animate-radar-ping pointer-events-none"></div>
                )}

                {isOpen ? (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <div className="relative flex items-center justify-center w-6 h-6">
                        {/* Target Reticle / AI Node Icon */}
                        <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute w-5 h-5 border-2 border-white rounded-full"></div>
                        <div className="absolute w-full h-[2px] bg-white opacity-40 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute h-full w-[2px] bg-white opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                )}
            </button>

        </div>
    );
};

export default RedlegCommandNode;
