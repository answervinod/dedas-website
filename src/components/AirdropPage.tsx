import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const AirdropPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzqiPwrSnVRhVMT3Yzd8w4WUtufwKK9HZYoL_guUHHzDxsyPFwMIL-UzJ4BMXshGhb_/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&source=airdrop`,
      });

      if (response.ok) {
        setStatus('success');
        setMessage('You\'re on the list! We\'ll notify you when the airdrop starts.');
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              DeDaS Token
              <span className="block text-primary">Airdrop Coming Soon</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-400 max-w-3xl mx-auto">
              Be the first to know when our airdrop launches. Join our waitlist to receive exclusive access and maximum rewards.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-dark-light rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Early Access</h3>
              <p className="text-gray-400">Get priority access to the airdrop before the general public.</p>
            </div>
            <div className="bg-dark-light rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Maximum Rewards</h3>
              <p className="text-gray-400">Early participants will receive the highest token allocation.</p>
            </div>
            <div className="bg-dark-light rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Exclusive Benefits</h3>
              <p className="text-gray-400">Special perks and benefits for waitlist members.</p>
            </div>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div 
            className="mt-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Join the Airdrop Waitlist</h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-dark-200 border border-gray-700 rounded-full focus:outline-none focus:border-primary text-white"
                    required
                  />
                  {message && (
                    <div className={`mt-2 text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                      {message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap disabled:opacity-50"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="mt-20 text-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg">
              Stay tuned for more details about token distribution, eligibility criteria, and rewards.
            </p>
            <p className="mt-4 text-sm">
              Follow our social media channels for the latest updates and announcements.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AirdropPage;
