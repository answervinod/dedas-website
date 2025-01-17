import React from 'react';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = React.useState('');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  // Handle scroll events for table of contents highlighting and back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const sections = document.querySelectorAll('.privacy-section');
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
    { id: 'information-collection', title: '1. Information We Collect' },
    { id: 'information-use', title: '2. How We Use Your Information' },
    { id: 'information-sharing', title: '3. How We Share Your Information' },
    { id: 'cookies', title: '4. Cookies and Tracking Technologies' },
    { id: 'security', title: '5. Data Security' },
    { id: 'rights', title: '6. Your Rights' },
    { id: 'third-party', title: '7. Third-Party Links' },
    { id: 'data-retention', title: '8. Data Retention' },
    { id: 'children', title: '9. Children\'s Privacy' },
    { id: 'international', title: '10. International Data Transfers' },
    { id: 'changes', title: '11. Changes to This Privacy Policy' },
    { id: 'contact', title: '12. Contact Information' },
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
                <p className="text-gray-400">Last Updated: January 18, 2025</p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-8">
                  DeDaS ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing or using our platform, you consent to the practices described in this policy.
                </p>

                <div id="information-collection" className="privacy-section scroll-mt-28">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p>We may collect and process the following types of information:</p>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">1.1 Information You Provide</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-primary">Account Information:</strong> Name, email address, username, password, and wallet address provided during registration.</li>
                      <li><strong className="text-primary">Payment Information:</strong> Cryptocurrency wallet details and transaction data for processing NFT purchases.</li>
                      <li><strong className="text-primary">Contact Information:</strong> When you contact us via email or support channels.</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">1.2 Automatically Collected Information</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-primary">Usage Data:</strong> Information about your interactions with the platform, such as IP address, device type, browser type, pages visited, and time spent on the site.</li>
                      <li><strong className="text-primary">Cookies and Tracking:</strong> Data collected via cookies, pixels, and other tracking technologies to improve user experience.</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">1.3 Blockchain Data</h3>
                    <p>All transactions, including NFT purchases, are publicly recorded on the blockchain. This information is immutable and beyond our control.</p>
                  </div>
                </div>

                <div id="information-use" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p>We use the collected information for the following purposes:</p>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2.1 Service Delivery</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>To provide access to the platform and its features.</li>
                      <li>To process transactions, including NFT purchases and transfers.</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2.2 Personalization</h3>
                    <p>To customize content and recommendations based on user preferences.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2.3 Communication</h3>
                    <p>To respond to inquiries, provide support, and send notifications about updates or promotional offers.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2.4 Analytics and Improvements</h3>
                    <p>To analyze usage trends, troubleshoot issues, and improve platform performance and features.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2.5 Compliance and Security</h3>
                    <p>To ensure compliance with legal obligations and protect against unauthorized access or fraudulent activities.</p>
                  </div>
                </div>

                <div id="information-sharing" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Share Your Information</h2>
                  <p>We do not sell your personal information. However, we may share it under the following circumstances:</p>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">3.1 With Service Providers</h3>
                    <p>We may share information with third-party vendors who perform services on our behalf, such as payment processors, analytics providers, and cloud hosting services.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">3.2 For Legal Purposes</h3>
                    <p>We may disclose information to comply with legal obligations, respond to lawful requests, or protect our rights and users.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">3.3 In Connection with Business Transfers</h3>
                    <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">3.4 Public Blockchain</h3>
                    <p>NFT-related transactions are publicly recorded on the blockchain. We cannot delete or alter this information.</p>
                  </div>
                </div>

                <div id="cookies" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">4.1 What Are Cookies?</h3>
                    <p>Cookies are small data files stored on your device that help us understand user behavior and improve the platform.</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">4.2 How We Use Cookies</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-primary">Essential Cookies:</strong> Necessary for basic platform functionality.</li>
                      <li><strong className="text-primary">Performance Cookies:</strong> Analyze how users interact with the platform.</li>
                      <li><strong className="text-primary">Marketing Cookies:</strong> Deliver personalized advertisements and promotions.</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">4.3 Managing Cookies</h3>
                    <p>You can manage or disable cookies through your browser settings. Note that disabling cookies may affect platform functionality.</p>
                  </div>
                </div>

                <div id="security" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                  <p>We implement industry-standard security measures to protect your information, including:</p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Data encryption during transmission.</li>
                    <li>Secure access protocols for sensitive information.</li>
                    <li>Regular security audits and updates.</li>
                  </ul>
                  <p className="mt-4">While we strive to protect your data, no system is entirely secure, and we cannot guarantee absolute security.</p>
                </div>

                <div id="rights" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                  <p>Depending on your location, you may have the following rights:</p>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">6.1 Under GDPR (for EU Users)</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Right to Access: Request a copy of your personal data.</li>
                      <li>Right to Rectification: Correct inaccurate or incomplete data.</li>
                      <li>Right to Erasure: Request deletion of your personal data.</li>
                      <li>Right to Restriction: Limit the processing of your data.</li>
                      <li>Right to Data Portability: Receive your data in a portable format.</li>
                      <li>Right to Object: Object to data processing for certain purposes.</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">6.2 Under CCPA (for California Users)</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Right to Know: Request information about data collection and use.</li>
                      <li>Right to Delete: Request deletion of personal information.</li>
                      <li>Right to Opt-Out: Decline the sale of personal information (if applicable).</li>
                    </ul>
                  </div>

                  <p className="mt-4">To exercise these rights, contact us at Support@dedas.org.</p>
                </div>

                <div id="third-party" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
                  <p>Our platform may include links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their policies before engaging with them.</p>
                </div>

                <div id="data-retention" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                  <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, or resolve disputes.</p>
                </div>

                <div id="children" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                  <p>Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware of such data collection, we will take steps to delete it promptly.</p>
                </div>

                <div id="international" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
                  <p>Your information may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place for such transfers, in compliance with applicable laws.</p>
                </div>

                <div id="changes" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time. Changes will be posted on this page, and the "Effective Date" will be revised accordingly. Continued use of the platform after changes indicates acceptance of the updated policy.</p>
                </div>

                <div id="contact" className="privacy-section scroll-mt-28 mt-12">
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
                  <p className="mt-4">
                    <strong className="text-primary">Email:</strong> Support@dedas.org
                  </p>
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

export default PrivacyPolicy;
