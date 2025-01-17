import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ClockIcon,
  UserGroupIcon,
  MegaphoneIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const scheduleData = [
  {
    title: 'Ecosystem Rewards',
    icon: CircleStackIcon,
    details: [
      'Initial Allocation: 20% unlocked at launch.',
      'Linear Distribution: Remaining 80% released over 5 years to reward user activities.'
    ]
  },
  {
    title: 'Team & Founders',
    icon: UserGroupIcon,
    details: [
      'Vesting Period: 3 years.',
      'Cliff: 6 months.',
      'Monthly Vesting: After the cliff, tokens are released monthly over the remaining period.'
    ]
  },
  {
    title: 'Marketing',
    icon: MegaphoneIcon,
    details: [
      'Initial Allocation: 25% at launch for immediate campaigns.',
      'Remaining: Distributed over 2 years.'
    ]
  },
  {
    title: 'Liquidity Pool',
    icon: CircleStackIcon,
    details: [
      'Immediate Use: Fully unlocked at launch to ensure market stability.'
    ]
  },
  {
    title: 'Token Sale',
    icon: CurrencyDollarIcon,
    details: [
      'Private Sale: 50% of the allocation with a 3-month cliff and 1-year vesting.',
      'Public Sale: Fully unlocked at launch.'
    ]
  },
  {
    title: 'Reserve Fund',
    icon: ShieldCheckIcon,
    details: [
      'Lock Period: Locked for 1 year.',
      'Post-Lock: Gradual release over 2 years.'
    ]
  },
  {
    title: 'Advisors',
    icon: UserIcon,
    details: [
      'Vesting Period: 2 years.',
      'Cliff: 6 months.',
      'Monthly Vesting: Post-cliff.'
    ]
  }
];

const ReleaseSchedule = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]" />
      
      <div className="container-custom relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Release <span className="neon-text">Schedule</span>
          </motion.h2>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {scheduleData.map((item, index) => (
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
                <item.icon className="h-10 w-10 text-primary relative" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              
              <ul className="space-y-3">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-400 flex items-start gap-2">
                    <ClockIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleaseSchedule;
