import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const milestones = [
  {
    name: 'Token Minting',
    date: 'Q4 2024',
    status: 'complete'
  },
  {
    name: 'iOS App Launch',
    date: 'March 2025',
    status: 'progress'
  },
  {
    name: 'Android App Launch',
    date: 'August 2025',
    status: 'upcoming'
  },
  {
    name: 'Desktop App Launch',
    date: 'October 2025',
    status: 'upcoming'
  },
  {
    name: 'DAO Governance Activation',
    date: 'Q3 2026',
    status: 'upcoming'
  },
  {
    name: 'Enterprise Solutions',
    date: 'Q4 2026',
    status: 'upcoming'
  }
];

const phases = [
  {
    title: 'Phase 1: Foundation',
    period: 'Q4 2024 - Q1 2025',
    objective: 'Build the core infrastructure and create the foundation for user acquisition.',
    milestones: [
      {
        title: 'Token Launch',
        items: [
          'Minting of 790M DeDaS tokens on BNB Chain.',
          'Development Kickstarts for DeDaS iOS development',
          'Initiate token allocation for internal team and advisors.'
        ]
      },
      {
        title: 'Website Launch',
        items: [
          'Fully functional website with details on tokenomics, roadmap, and DeDaS NFTs.',
          'Blog section for updates and educational articles about DeDaS and decentralized storage.'
        ]
      },
      {
        title: 'iOS App Development',
        items: [
          'Complete the testing phase of the iOS app for DeDaS.',
          'Integrate staking, data storage allocation, and governance features.',
          'Initiate TestFlight beta testing for early adopters.'
        ]
      },
      {
        title: 'Community Building',
        items: [
          'Launch official DeDaS social media channels (Twitter, Telegram, Discord).',
          'Organize airdrop campaigns to onboard early supporters.',
          'Collaborate with influencers and thought leaders in the Web3 and storage spaces.'
        ]
      },
      {
        title: 'Strategic Partnerships',
        items: [
          'Partner with decentralized storage providers to ensure scalability.',
          'Collaborate with Web3 wallets like MetaMask and Trust Wallet for seamless token integration.'
        ]
      }
    ]
  },
  {
    title: 'Phase 2: iOS Launch and Market Expansion',
    period: 'Q2 2025',
    objective: 'Deploy the first app, onboard initial users, and expand DeDaS\'s reach.',
    milestones: [
      {
        title: 'DeDaS iOS App Launch',
        items: [
          'Launch the first version on the Apple App Store (March 2025).',
          'Features: User account creation, data storage, staking, and token rewards.'
        ]
      },
      {
        title: 'Marketing Campaigns',
        items: [
          'Global campaign focused on the benefits of decentralized storage.',
          'Incentivized referral programs for early adopters.',
          'Community events and AMAs with the DeDaS team.'
        ]
      },
      {
        title: 'Token Listings',
        items: [
          'List DeDaS Token on major centralized exchanges (Binance, KuCoin).',
          'Increase trading volume through partnerships with market makers.'
        ]
      },
      {
        title: 'Ecosystem Expansion',
        items: [
          'Begin developer grants for third-party tools and dApps built on DeDaS.',
          'Introduce governance proposals to improve the platform.'
        ]
      }
    ]
  },
  {
    title: 'Phase 3: Multi-Platform Rollout',
    period: 'Q3-Q4 2025',
    objective: 'Expand user access by launching Android and desktop apps.',
    milestones: [
      {
        title: 'Android App Launch',
        items: [
          'Release DeDaS app on the Google Play Store (August 2025).',
          'Feature parity with the iOS app.'
        ]
      },
      {
        title: 'Desktop App Launch',
        items: [
          'Release desktop apps for Windows and MacOS (October 2025).',
          'Enhanced features: Bulk file uploads, system health monitoring, and advanced analytics.'
        ]
      },
      {
        title: 'Global Outreach',
        items: [
          'Expand to regions with high demand for decentralized storage (Asia, Africa, South America).',
          'Regional partnerships to localize the app and increase adoption.'
        ]
      },
      {
        title: 'User Engagement',
        items: [
          'Launch gamification features for higher user retention.',
          'Introduce achievements, badges, and rewards for active participants.'
        ]
      }
    ]
  },
  {
    title: 'Phase 4: Ecosystem Maturity',
    period: '2026',
    objective: 'Cement DeDaS as the go-to decentralized storage solution.',
    milestones: [
      {
        title: 'Advanced Features',
        items: [
          'End-to-end encrypted storage for premium users.',
          'Real-time analytics dashboard for storage providers and clients.'
        ]
      },
      {
        title: 'Community Governance',
        items: [
          'Enable full decentralization of the platform through DAO governance.',
          'Token holders can propose and vote on new features and policies.'
        ]
      },
      {
        title: 'Enterprise Solutions',
        items: [
          'Partner with enterprises to offer decentralized storage solutions tailored to their needs.',
          'Showcase success stories to attract more clients.'
        ]
      },
      {
        title: 'Sustainability Initiatives',
        items: [
          'Reduce carbon footprint through partnerships with green data centers.',
          'Educate users about the environmental benefits of decentralized storage.'
        ]
      }
    ]
  },
  {
    title: 'Phase 5: Continuous Growth',
    period: '2027 and Beyond',
    objective: 'Achieve global recognition and adapt to emerging trends.',
    milestones: [
      {
        title: 'Interoperability',
        items: [
          'Enable cross-chain compatibility to attract users from Ethereum, Solana, and other ecosystems.',
          'Support for NFTs and digital assets storage.'
        ]
      },
      {
        title: 'AI Integration',
        items: [
          'Introduce AI-powered features for efficient file organization and retrieval.',
          'Predictive analytics for storage usage trends.'
        ]
      },
      {
        title: 'Education and Advocacy',
        items: [
          'Publish research and case studies showcasing the benefits of decentralized storage.',
          'Partner with universities and research institutions for Web3 advocacy.'
        ]
      },
      {
        title: 'Platform Scaling',
        items: [
          'Expand storage capacity by onboarding more storage providers.',
          'Maintain competitive fees and rewards to retain users.'
        ]
      }
    ]
  }
];

const getBorderColor = (phaseIndex: number) => {
  switch(phaseIndex) {
    case 0: // Phase 1
      return {
        border: '#00ff00',
        shadow: 'rgba(0,255,0,0.3)',
        innerGlow: 'rgba(0,255,0,0.1)'
      };
    case 1: // Phase 2
      return {
        border: '#00c2ff',
        shadow: 'rgba(0,194,255,0.3)',
        innerGlow: 'rgba(0,194,255,0.1)'
      };
    case 2: // Phase 3
      return {
        border: '#ffff00',
        shadow: 'rgba(255,255,0,0.3)',
        innerGlow: 'rgba(255,255,0,0.1)'
      };
    case 3: // Phase 4
      return {
        border: '#e0e0e0',
        shadow: 'rgba(224,224,224,0.3)',
        innerGlow: 'rgba(224,224,224,0.1)'
      };
    case 4: // Phase 5
      return {
        border: '#b000ff',
        shadow: 'rgba(176,0,255,0.3)',
        innerGlow: 'rgba(176,0,255,0.1)'
      };
    default:
      return {
        border: '#00ff00',
        shadow: 'rgba(0,255,0,0.3)',
        innerGlow: 'rgba(0,255,0,0.1)'
      };
  }
};

const Roadmap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]" />
      
      <div className="container-custom relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center"
        >
          DeDaS <span className="neon-text">Roadmap</span>
        </motion.h2>

        {/* Key Milestones Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 mb-20"
        >
          <h3 className="text-2xl font-bold mb-8">Key Milestones (Timeline)</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6">Milestone</th>
                  <th className="text-left py-4 px-6">Target Date</th>
                  <th className="text-left py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {milestones.map((milestone, index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">{milestone.name}</td>
                    <td className="py-4 px-6">{milestone.date}</td>
                    <td className="py-4 px-6">
                      {milestone.status === 'complete' ? (
                        <span className="flex items-center gap-2 text-green-400">
                          <CheckCircleIcon className="h-5 w-5" />
                          Complete
                        </span>
                      ) : milestone.status === 'progress' ? (
                        <span className="flex items-center gap-2 text-blue-400">
                          <ArrowPathIcon className="h-5 w-5 animate-spin" />
                          In Progress
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-yellow-400">
                          <ClockIcon className="h-5 w-5" />
                          Upcoming
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Detailed Phases */}
        <div className="space-y-20">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phaseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (phaseIndex * 0.1) }}
              className="relative"
            >
              {/* Phase Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="neon-text">{phase.title}</span>
                </h3>
                <p className="text-xl text-gray-400 mb-2">{phase.period}</p>
                <p className="text-gray-300">Objective: {phase.objective}</p>
              </div>

              {/* Phase Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {phase.milestones.map((milestone, index) => {
                  const colors = getBorderColor(phaseIndex);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Neon Border Effect */}
                      <div 
                        className="absolute inset-0 rounded-xl border pointer-events-none"
                        style={{
                          borderColor: colors.border,
                          boxShadow: `0 0 15px 0 ${colors.shadow}, inset 0 0 15px 0 ${colors.innerGlow}`
                        }}
                      />
                      <div 
                        className="absolute -inset-[1px] rounded-xl border-2 pointer-events-none"
                        style={{
                          borderColor: `${colors.border}10`
                        }}
                      />
                      
                      <h4 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                        {milestone.title}
                      </h4>
                      <ul className="space-y-3">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-400 flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>

              {/* Connector Line */}
              {phaseIndex < phases.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-20 w-px bg-gradient-to-b from-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
