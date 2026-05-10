'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xeenpbgz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        setMessage(result.error || 'Check your email to verify this form, then try again!');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Check your connection or check your email for a Formspree verification link.');
    }

  };

  if (status === 'success') {
    return (
      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl text-center border border-green-100 max-w-xl mx-auto animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
          <FontAwesomeIcon icon={faCheckCircle} className="text-white text-3xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-600 mb-8">Thanks for reaching out, Jacob will get back to you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-[#CC6600] font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-left">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#CC6600] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#CC6600] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="space-y-2 text-left">
          <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#CC6600] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none"
            placeholder="How can I help you today?"
          ></textarea>
        </div>

        {/* Honeypot Spam Protection */}
        <input type="text" name="_gotcha" className="hidden" style={{ display: 'none' }} />

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm font-medium border border-red-100">
            <FontAwesomeIcon icon={faExclamationCircle} />
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-4 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-[#CC6600]/20
            ${status === 'loading' 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'bg-[#CC6600] hover:bg-[#A34F00] text-white hover:-translate-y-1'
            }`}
        >
          {status === 'loading' ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              <span>Send Message</span>
              <FontAwesomeIcon icon={faPaperPlane} className="text-sm opacity-80" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
