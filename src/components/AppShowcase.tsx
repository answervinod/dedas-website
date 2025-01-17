import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CloudArrowUpIcon,
    title: 'Decentralized Storage',
    description: 'Securely store your files across a distributed network of nodes.'
  },
  {
    icon: LockClosedIcon,
    title: 'End-to-End Encryption',
    description: 'Your data is encrypted before leaving your device, ensuring complete privacy.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Token Rewards',
    description: 'Earn DeDaS tokens for contributing storage space to the network.'
  },
  {
    icon: ChartBarIcon,
    title: 'Real-time Analytics',
    description: 'Monitor your storage usage, earnings, and network status.'
  }
];

const AppShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            DeDaS <span className="neon-text">iOS App</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of decentralized storage in your pocket. Our iOS app combines
            powerful features with an intuitive interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* App Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {[3, 2, 1].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className={num === 1 ? 'scale-120' : ''}
                >
                  <img
                    src={`/assets/images/${num}.png`}
                    alt={`App mockup ${num}`}
                    className={`w-full rounded-xl shadow-lg ${num === 1 ? 'scale-120 transform origin-center' : ''}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <feature.icon className="w-8 h-8 text-primary relative" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* App Store Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="glass-card p-4 hover:border-primary/30 transition-all duration-300 cursor-pointer">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </div>
                <p className="text-gray-400">Coming March 2025</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
