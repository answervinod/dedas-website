import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import NftMarketplace from './components/NftMarketplace';
import NftCollection from './components/NftCollection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AirdropPage from './components/AirdropPage';
import TokenSale from './pages/TokenSale';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import ReleaseSchedule from './components/ReleaseSchedule';
import TokenUtility from './components/TokenUtility';
import AppShowcase from './components/AppShowcase';

// Home page component that combines all sections
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <WhyChoose />
    <Tokenomics />
    <ReleaseSchedule />
    <TokenUtility />
    <AppShowcase />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark relative">
        <div className="grid-bg" />
        <div className="content-wrapper flex-1">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/tokenomics" element={<Tokenomics />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/nft-marketplace" element={<NftMarketplace />} />
              <Route path="/nft-collection" element={<NftCollection />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/airdrop" element={<AirdropPage />} />
              <Route path="/token-sale" element={<TokenSale />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
