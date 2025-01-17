import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CubeTransparentIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  ShoppingBagIcon,
  GiftIcon,
  CodeBracketIcon,
  UsersIcon,
  FireIcon
} from '@heroicons/react/24/outline';

interface UtilityItem {
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string | string[];
}

interface UtilitySection {
  title: string;
  subtitle?: string;
  items: UtilityItem[];
}

const utilityData: UtilitySection[] = [
  {
    title: 'Token Utility',
    items: [
      {
        icon: CubeTransparentIcon,
        title: 'Rewards for Storage Contribution',
        description: 'Users earn DeDaS Tokens by allocating storage space for a minimum of 15 days.'
      },
      {
        icon: UserGroupIcon,
        title: 'Governance',
        description: 'Token holders can vote on key platform decisions and future developments.'
      },
      {
        icon: CurrencyDollarIcon,
        title: 'Transaction Fees',
        description: 'Tokens can be used to pay for network services like file retrieval and premium storage.'
      },
      {
        icon: LockClosedIcon,
        title: 'Staking',
        description: 'Stake DeDaS Tokens for additional rewards or discounts on platform services.'
      },
      {
        icon: ShoppingBagIcon,
        title: 'Marketplace Utility',
        description: 'Tokens can be used to purchase exclusive services and features within the ecosystem.'
      }
    ]
  },
  {
    title: 'Incentive Structure',
    items: [
      {
        icon: GiftIcon,
        title: 'User Incentives',
        description: [
          'Staking Rewards: Encourages long-term storage allocation.',
          'Referral Bonuses: Rewards users for bringing new participants.'
        ]
      },
      {
        icon: CodeBracketIcon,
        title: 'Developer Grants',
        description: ['Fund decentralized app development on the platform.']
      },
      {
        icon: UsersIcon,
        title: 'Community Engagement',
        description: ['Airdrops for active users and event participants.']
      }
    ]
  },
  {
    title: 'Burn Mechanism',
    subtitle: 'To ensure long-term value, a burn mechanism will reduce circulating supply:',
    items: [
      {
        icon: FireIcon,
        description: [
          '10% of Network Fees: Collected in tokens and burned quarterly.',
          'Milestone Burns: Burn tokens on achieving specific adoption milestones.'
        ]
      }
    ]
  }
];

const TokenUtility = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]" />
      
      <div className="container-custom relative" ref={ref}>
        {utilityData.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
            className="mb-20 last:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {section.title === 'Token Utility' ? (
                <>
                  Token <span className="neon-text">Utility</span>
                </>
              ) : (
                <span className="neon-text">{section.title}</span>
              )}
            </h2>
            
            {section.subtitle && (
              <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
                {section.subtitle}
              </p>
            )}

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${section.title === 'Token Utility' ? '3' : '3'} gap-8 mt-12`}>
              {section.items.map((item, index) => (
                section.title !== 'Burn Mechanism' && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.2) + (index * 0.1) }}
                    className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <item.icon className="h-10 w-10 text-primary relative" />
                    </div>
                    
                    {item.title && (
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    )}
                    
                    {Array.isArray(item.description) ? (
                      <ul className="space-y-3">
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-400 flex items-start gap-2">
                            <FireIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400">{item.description}</p>
                    )}
                  </motion.div>
                )
              ))}
            </div>

            {section.title === 'Burn Mechanism' && (
              <div className="mt-12 max-w-4xl mx-auto">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.2) + (index * 0.1) }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                        <FireIcon className="h-12 w-12 text-primary relative" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                    </div>
                    
                    <ul className="space-y-6">
                      {item.description.map((desc, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="relative mt-1">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                            <FireIcon className="h-6 w-6 text-primary relative" />
                          </div>
                          <p className="text-xl text-gray-300 flex-1 group-hover:text-primary transition-colors duration-300">
                            {desc}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TokenUtility;
