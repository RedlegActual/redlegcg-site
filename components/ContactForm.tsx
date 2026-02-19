import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    improvement: '',
    status: 'idle' // 'idle' | 'submitting' | 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, status: 'submitting' }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          message: formData.improvement
        }),
      });

      if (response.ok) {
        setFormData(prev => ({
          ...prev,
          name: '',
          email: '',
          businessType: '',
          improvement: '',
          status: 'success'
        }));
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Silently handle error or show generic user feedback if needed
      // For now, reset status to allow retry or keep simple
      setFormData(prev => ({ ...prev, status: 'error' }));
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="booking-section" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-red-900/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Begin the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Conversation</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Share a brief overview of your business and what you're building. I’ll review it personally and respond with clear next steps.
          </p>

          {formData.status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center animate-[fadeInUp_0.5s_ease-out_forwards]">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
              <p className="text-gray-400">We will contact you shortly to schedule your review.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-400 mb-1">Business type</label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
                  required
                >
                  <option value="" className="bg-black text-gray-400">Select your business model...</option>
                  <option value="Agency" className="bg-black">Agency / Service Provider</option>
                  <option value="SaaS" className="bg-black">SaaS / Software</option>
                  <option value="E-commerce" className="bg-black">E-commerce</option>
                  <option value="Consulting" className="bg-black">Consulting / Coaching</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="improvement" className="block text-sm font-medium text-gray-400 mb-1">Current priorities or constraints</label>
                <textarea
                  id="improvement"
                  rows={4}
                  value={formData.improvement}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Briefly describe your current constraints or objectives."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formData.status === 'submitting'}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formData.status === 'submitting' ? 'Sending...' : 'Request Review'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
