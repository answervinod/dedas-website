import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tokenomicsData = [
  {
    category: 'Ecosystem Rewards',
    allocation: '40%',
    amount: '316,000,000',
    purpose: 'Incentives for users staking storage space and contributing to the network.'
  },
  {
    category: 'Team & Founders',
    allocation: '15%',
    amount: '118,500,000',
    purpose: 'Team rewards, vesting over 3 years to ensure long-term commitment.'
  },
  {
    category: 'Marketing',
    allocation: '10%',
    amount: '79,000,000',
    purpose: 'Campaigns, partnerships, airdrops, and community building efforts.'
  },
  {
    category: 'Liquidity Pool',
    allocation: '10%',
    amount: '79,000,000',
    purpose: 'Ensures seamless trading on decentralized and centralized exchanges.'
  },
  {
    category: 'Token Sale',
    allocation: '15%',
    amount: '118,500,000',
    purpose: 'Public and private token sales for funding and growth.'
  },
  {
    category: 'Reserve Fund',
    allocation: '5%',
    amount: '39,500,000',
    purpose: 'For unforeseen requirements, strategic partnerships, and ecosystem health.'
  },
  {
    category: 'Advisors',
    allocation: '5%',
    amount: '39,500,000',
    purpose: 'Incentives for advisors, vesting over 2 years to ensure alignment.'
  }
];

const Tokenomics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px]" />
      
      <div className="container-custom relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Token <span className="neon-text">Distribution</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Token Distribution Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card overflow-hidden rounded-2xl lg:col-span-2"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-lg">Category</th>
                    <th className="text-left p-6 text-lg">Allocation</th>
                    <th className="text-left p-6 text-lg">Amount (in Tokens)</th>
                    <th className="text-left p-6 text-lg">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenomicsData.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-b border-gray-700/50 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-6 font-medium">{item.category}</td>
                      <td className="p-6 text-primary">{item.allocation}</td>
                      <td className="p-6">{item.amount}</td>
                      <td className="p-6 text-gray-400">{item.purpose}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Token Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-8"
          >
            <h3 className="text-2xl font-bold neon-text">Token Details</h3>
            
            <div className="space-y-4 mb-8">
              <InfoRow label="Token Name" value="DeDaS" />
              <InfoRow label="Token Symbol" value="DeDaS" />
              <InfoRow label="Total Supply" value="790,000,000" />
              <InfoRow label="Decimal" value="18" />
              <InfoRow label="Initial Price" value="$0.001" />
              <InfoRow label="Network" value="BNB Chain (BEP-20)" />
              <InfoRow label="Listing" value="Coming Soon" />
            </div>

            <a 
              href="https://bscscan.com/token/0xa539d0ce2ee44996b02174af3c2a42e1ae2d9f11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full text-center inline-block"
            >
              View Token Contract
              <span className="absolute inset-0 bg-white/20 animate-pulse rounded-lg"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5">
    <span className="text-gray-400">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default Tokenomics;
