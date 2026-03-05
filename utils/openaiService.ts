// The SYSTEM_PROMPT and OpenAI client logic have been moved to the secure backend
// located at /api/chat.ts to prevent API key exposure in the browser.

export const getAIResponse = async (
    chatHistory: { role: 'user' | 'assistant' | 'system', content: string }[],
    fileData?: { name: string, type: string, base64: string } | null
) => {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatHistory,
                fileData
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch from backend');
        }

        const data = await response.json();
        return data.reply;
    } catch (error: any) {
        console.error("Secure Backend Fetch Error:", error);
        return `Connection error: ${error?.message || 'Unable to establish uplink'}. Please contact contact@redlegcg.com directly.`;
    }
};
