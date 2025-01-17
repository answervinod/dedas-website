import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NftCollection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nfts = Array.from({ length: 8 }, (_, i) => `/nfts/nft-${i + 1}.png`);

  return (
    <section id="nft-collection" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px]" />
      
      <div className="container-custom relative" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            DeDaS Exclusive NFT Collection
          </h2>
          <p className="text-xl text-primary/90 italic mb-8">
            "Unveiling the Future of Decentralized Storage"
          </p>
        </motion.div>

        {/* Description Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-primary">Welcome to the Revolution</h3>
            <p className="text-gray-400 leading-relaxed">
              The DeDaS NFT Collection represents more than just digital art—it's a celebration of innovation, 
              technology, and a decentralized future. Each NFT is a unique piece of the DeDaS ecosystem, 
              crafted to symbolize the limitless possibilities of decentralized data storage.
            </p>
          </div>
          <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why These NFTs Matter</h3>
            <p className="text-gray-400 leading-relaxed">
              Our NFTs are more than collectibles—they're a key to unlocking the power of the DeDaS platform. 
              Each design is meticulously crafted to reflect core elements of our mission: security, transparency, 
              and community-driven innovation. Holding a DeDaS NFT grants you exclusive benefits within the ecosystem, 
              from governance participation to future rewards.
            </p>
          </div>
        </motion.div>

        {/* NFT Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center px-4"
        >
          {nfts.map((nft, index) => (
            <motion.div
              key={nft}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl border border-primary/10 w-[520px] h-[672px] max-w-full"
            >
              <img
                src={nft}
                alt={`DeDaS NFT ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">DeDaS NFT #{index + 1}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NftCollection;
