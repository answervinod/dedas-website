import React from 'react';
import Navbar from './Navbar';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = React.useState<string>('');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  // Handle scroll events for table of contents highlighting and back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const sections = document.querySelectorAll('.terms-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tableOfContents = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'eligibility', title: '2. Eligibility' },
    { id: 'definitions', title: '3. Definitions' },
    { id: 'use-of-services', title: '4. Use of Services' },
    { id: 'nfts', title: '5. NFTs' },
    { id: 'payments', title: '6. Payments and Transactions' },
    { id: 'conduct', title: '7. User Conduct' },
    { id: 'ip', title: '8. Intellectual Property' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'privacy', title: '10. Privacy Policy' },
    { id: 'modifications', title: '11. Modifications to the Terms' },
    { id: 'termination', title: '12. Termination' },
    { id: 'law', title: '13. Governing Law' },
    { id: 'disclaimers', title: '14. Disclaimers' },
    { id: 'contact', title: '15. Contact Information' },
    { id: 'agreement', title: '16. Entire Agreement' },
  ];

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-12 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="hidden lg:block col-span-3 sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="bg-dark/50 backdrop-blur-sm rounded-lg border border-primary/10 p-4">
              <h2 className="text-lg font-semibold mb-4 text-white">Table of Contents</h2>
              <nav className="space-y-2">
                {tableOfContents.map(({ id, title }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                      activeSection === id
                        ? 'bg-primary/20 text-white'
                        : 'text-gray-400 hover:bg-primary/10 hover:text-white'
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-12 lg:col-span-9">
            <div className="w-full">
              <div className="mb-8">
                <p className="text-gray-400">Effective Date: January 18, 2025</p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-8">
                  Welcome to DeDaS, a platform dedicated to revolutionizing decentralized data storage and offering exclusive NFTs to our community. By accessing or using our website, services, or purchasing our NFTs, you agree to these Terms of Service ("Terms"). Please read them carefully.
                </p>

                <div id="acceptance" className="terms-section scroll-mt-28">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>By using the DeDaS website or services, you signify that you have read, understood, and agree to be bound by these Terms and any applicable laws and regulations. If you do not agree with these Terms, you must discontinue use of the platform immediately.</p>
                </div>

                <div id="eligibility" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
                  <p>You must be at least 18 years old or the age of majority in your jurisdiction to use the platform or purchase DeDaS Tokens or DeDaS NFTs. By accessing the platform, you confirm that you meet this requirement.</p>
                </div>

                <div id="definitions" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">3. Definitions</h2>
                  <ul className="list-none space-y-4">
                    <li><strong className="text-primary">DeDaS:</strong> Refers to the decentralized data storage platform and NFT project operated by DeDaS.org.</li>
                    <li><strong className="text-primary">NFT:</strong> Non-fungible tokens, unique digital assets available for purchase or transfer on the platform.</li>
                    <li><strong className="text-primary">User:</strong> Any individual or entity accessing or interacting with the platform.</li>
                    <li><strong className="text-primary">Content:</strong> All information, graphics, text, or digital assets provided through the platform.</li>
                  </ul>
                </div>

                <div id="use-of-services" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Use of Services</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">4.1 Permitted Use</h3>
                      <p>You are granted a limited, non-exclusive, and non-transferable right to use the DeDaS platform solely for personal or authorized commercial purposes, subject to compliance with these Terms.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">4.2 Prohibited Activities</h3>
                      <p>You agree not to:</p>
                      <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Use the platform for illegal or unauthorized purposes.</li>
                        <li>Attempt to interfere with the platform's functionality, including through hacking or introducing malware.</li>
                        <li>Sell, distribute, or reproduce platform content without explicit authorization.</li>
                        <li>Use automated tools to interact with the platform.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="nfts" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">5. NFTs</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">5.1 Ownership</h3>
                      <p>Purchasing a DeDaS NFT grants you ownership of the unique token. Ownership does not include intellectual property rights to the underlying artwork, trademarks, or other associated content.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">5.2 Usage Rights</h3>
                      <p>You may display your NFT for personal, non-commercial use or resell it on approved secondary marketplaces, subject to applicable platform terms and royalties.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">5.3 No Guarantee of Value</h3>
                      <p>DeDaS NFTs are speculative digital assets. Their value may fluctuate, and we make no guarantees regarding their future value or usability. You assume all risks associated with purchasing, holding, or reselling NFTs.</p>
                    </div>
                  </div>
                </div>

                <div id="payments" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Payments and Transactions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">6.1 Payment Methods</h3>
                      <p>All payments for NFTs or services must be made using accepted cryptocurrencies or payment gateways as specified on the platform.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">6.2 Transaction Fees</h3>
                      <p>You are responsible for all transaction fees, including gas fees, associated with blockchain-based transactions.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">6.3 Refund Policy</h3>
                      <p>All sales are final. DeDaS does not offer refunds for Tokens or NFTs or other services once a transaction is confirmed.</p>
                    </div>
                  </div>
                </div>

                <div id="conduct" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">7. User Conduct</h2>
                  <p>By using the platform, you agree to:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Provide accurate and up-to-date information during account registration.</li>
                    <li>Respect intellectual property rights of others.</li>
                    <li>Refrain from fraudulent or abusive behavior.</li>
                  </ul>
                </div>

                <div id="ip" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                  <p>All content on the platform, including text, graphics, trademarks, and designs, is owned by or licensed to DeDaS. Unauthorized reproduction or distribution of platform content is strictly prohibited.</p>
                </div>

                <div id="liability" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                  <p>DeDaS and its operators are not liable for:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Financial losses or damages resulting from the use of the platform or NFTs.</li>
                    <li>Interruptions or errors caused by blockchain networks or third-party services.</li>
                    <li>Unauthorized access to your account due to negligence on your part.</li>
                  </ul>
                </div>

                <div id="privacy" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">10. Privacy Policy</h2>
                  <p>Your use of the platform is subject to our Privacy Policy which can be found at www.dedas.org. Please review it to understand how we collect, use, and protect your data.</p>
                </div>

                <div id="modifications" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">11. Modifications to the Terms</h2>
                  <p>DeDaS reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the platform constitutes acceptance of revised Terms.</p>
                </div>

                <div id="termination" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
                  <p>We reserve the right to suspend or terminate your access to the platform if you violate these Terms or engage in activities that harm the platform or its users.</p>
                </div>

                <div id="law" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
                  <p>These Terms are governed by and construed in accordance with the laws of Singapore. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in Singapore.</p>
                </div>

                <div id="disclaimers" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">14. Disclaimers</h2>
                  <p>The platform and NFTs are provided "as is" without warranties of any kind. DeDaS does not guarantee uninterrupted or error-free operation of the platform. We are not responsible for third-party services or content linked to the platform.</p>
                </div>

                <div id="contact" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
                  <p>For any questions or concerns about these Terms, please contact us at:</p>
                  <p className="mt-4">
                    <strong className="text-primary">Email:</strong> Support@dedas.org
                  </p>
                </div>

                <div id="agreement" className="terms-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
                  <p>These Terms constitute the entire agreement between you and DeDaS, superseding any prior agreements or understandings.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
};

export default TermsOfService;
