import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Sign Up and Join the Network',
    description: 'Start your journey by signing up on our intuitive DeDaS application, available for iOS and Android.',
  },
  {
    icon: CircleStackIcon,
    title: 'Allocate Unused Storage',
    description: 'Share the unused storage space on your device securely with DeDaS.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Stake and Earn',
    description: 'Your storage space contributes to a global network of decentralized storage centers. By staking your allocated space for a minimum of 15 days, you become eligible to earn DeDaS Tokens as rewards.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Participate in the Revolution',
    description: 'Join a global movement towards decentralized, secure, and efficient data storage solutions.',
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px]" />
      
      <div className="container-custom relative">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-wider"
          >
            Revolutionary Features
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            The Future of <span className="neon-text">Storage</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 mx-auto"
          >
            At DeDaS, we envision a world where data storage is no longer controlled by centralized entities. 
            We aim to empower individuals by allowing them to monetize their unused storage space, while 
            contributing to a robust and sustainable decentralized storage ecosystem.
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[2000px] mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <feature.icon className="h-12 w-12 text-primary relative" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
