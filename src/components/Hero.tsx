import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzqiPwrSnVRhVMT3Yzd8w4WUtufwKK9HZYoL_guUHHzDxsyPFwMIL-UzJ4BMXshGhb_/exec';

    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      setStatus('success');
      setMessage('Thanks for joining our waitlist!');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute top-60 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      
      <div className="container-custom">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16">
            {/* Left Content */}
            <motion.div 
              className="max-w-3xl mx-auto lg:mx-0 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 text-primary"
              >
                The Future of Decentralised Storage
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Unlock the Future of
                <span className="block neon-text">Decentralized Storage</span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-10 max-w-2xl">
                <span className="block mb-4">Empower your device. Share your storage.</span>
                Welcome to DeDaS – the next evolution in data storage solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/airdrop"
                  className="bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Earn DeDaS
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Stat value="800TB+" label="Total Storage" />
                <Stat value="7.2K+" label="Active Nodes" />
                <Stat value="99.9%" label="Uptime" />
                <Stat value="3x" label="Cost Savings" />
              </div>
            </motion.div>

            {/* Right Content - Spline Animation */}
            <motion.div 
              className="relative h-full flex items-center justify-center lg:justify-end -mt-40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-[90%] max-w-md aspect-[9/16] relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
                <div className="w-full h-full">
                  <Spline 
                    scene="https://prod.spline.design/jhkPAuiGYfG06bzB/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Waitlist Form Section - Positioned at bottom */}
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">Join the Future of Storage</h2>
                <p className="text-gray-400 text-sm">
                  Be among the first to experience the revolution in decentralized storage.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 bg-dark-200 border border-gray-700 rounded-full focus:outline-none focus:border-primary text-white"
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
                  className="bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap disabled:opacity-50"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    className="glass-card p-4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-2xl font-bold neon-text">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

export default Hero;
