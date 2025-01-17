import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    url: 'https://t.me/DeDaSOfficial',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
      </svg>
    ),
  },
  {
    name: 'Medium',
    url: 'https://medium.com',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    url: 'https://discord.com',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026 13.83 13.83 0 001.226-1.963.074.074 0 00-.041-.104 13.175 13.175 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:support@dedas.com',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark relative z-10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="/assets/images/logo.png" 
                alt="DeDaS Logo" 
                style={{ height: '256px', width: 'auto', marginLeft: '10px', marginTop: '-100px' }}
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              DeDaS (Decentralized Data Storage) is a revolutionary approach to data storage that utilizes the untapped potential of individual devices.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/features" className="text-gray-400 hover:text-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/tokenomics" className="text-gray-400 hover:text-primary transition-colors">
                      Tokenomics
                    </Link>
                  </li>
                  <li>
                    <Link to="/roadmap" className="text-gray-400 hover:text-primary transition-colors">
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Download DeDaS App */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Download DeDaS App</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div>
                        <div className="text-xs">Download on the</div>
                        <div className="font-medium">App Store</div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div>
                        <div className="text-xs">Get it on</div>
                        <div className="font-medium">Google Play</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">Coming March 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DeDaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
