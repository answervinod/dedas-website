import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'DeDaS NFT', href: '#nft-collection' }
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        navigate('/', { state: { scrollTo: href.substring(1) } });
      } else {
        // If on home page, scroll to section
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img 
                src="/assets/images/logo.png" 
                alt="DeDaS Logo" 
                style={{ height: '64px', width: 'auto', transform: 'scale(4)', marginLeft: '30px' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`text-lg font-medium text-gray-300 hover:text-primary transition-colors duration-300`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Link 
              to="/token-sale" 
              className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#D4AF37] hover:from-[#D4AF37] hover:via-[#FDB931] hover:to-[#FFD700] text-dark font-bold px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              DeDaS Token Sale
            </Link>
            <Link
              to="/nft-marketplace"
              className="bg-primary hover:bg-primary/90 text-dark font-bold px-6 py-2 rounded-full transition-all duration-300"
            >
              Get DeDaS NFT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 space-y-4 border-t border-white/5">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-primary transition-colors duration-300`}
                >
                  {item.name}
                </motion.button>
              ))}
              <Link
                to="/token-sale"
                className="block w-full text-center bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#D4AF37] hover:from-[#D4AF37] hover:via-[#FDB931] hover:to-[#FFD700] text-dark font-bold px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                DeDaS Token Sale
              </Link>
              <Link
                to="/nft-marketplace"
                className="block w-full text-center bg-primary hover:bg-primary/90 text-dark font-bold px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get DeDaS NFT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
