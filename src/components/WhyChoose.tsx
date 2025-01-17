import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CloudArrowUpIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const reasons = [
  {
    icon: CloudArrowUpIcon,
    title: 'Decentralization at its Core',
    description: 'Say goodbye to centralized data control. Your data, your choice.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Earn While You Share',
    description: 'Get rewarded with DeDaS Tokens for your participation.',
  },
  {
    icon: GlobeAmericasIcon,
    title: 'Eco-Friendly & Scalable',
    description: 'By utilizing existing resources, DeDaS creates a sustainable and eco-conscious data storage solution.',
  },
  {
    icon: LockClosedIcon,
    title: 'Top-Notch Security',
    description: 'Built on blockchain technology, DeDaS ensures data integrity and privacy.',
  },
];

const WhyChoose = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]" />
      
      <div className="container-custom relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="neon-text">DeDaS</span>?
          </motion.h2>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex items-start gap-6 group hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <reason.icon className="h-10 w-10 text-primary relative" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Token Information Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-[120px] opacity-50" />
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative space-y-6"
          >
            <div className="text-3xl font-bold">
              Powered by <span className="neon-text">DeDaS Token</span>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              At the heart of DeDaS lies our native cryptocurrency, the DeDaS Token, built on the BNB Chain. 
              This token fuels our ecosystem, allowing users to earn, trade, and participate in governance. 
              It's not just a token; it's your gateway to the decentralized future.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
