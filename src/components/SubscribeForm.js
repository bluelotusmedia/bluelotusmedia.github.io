'use client';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#CC6600]/10 border border-[#CC6600]/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-[#CC6600] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#CC6600]/20">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">You're on the list!</h3>
        <p className="text-gray-600">Thanks for subscribing. Stay tuned for the next AI insight.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-[#CC6600] hover:underline font-bold"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <div className="relative flex-grow">
        <input 
          type="email" 
          required
          placeholder="your@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#CC6600] transition-colors disabled:opacity-50 text-gray-900"
        />
      </div>
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-4 bg-[#CC6600] hover:bg-[#A34F00] text-white font-bold rounded-2xl transition-all shadow-lg shadow-[#CC6600]/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 min-w-[140px]"
      >
        {status === 'loading' ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Subscribe
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
