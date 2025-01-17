import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

interface NFT {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

// Add ethereum to window type
declare global {
  interface Window {
    ethereum?: any;
  }
}

const NftMarketplace: React.FC = () => {
  const [account, setAccount] = useState<string>('');

  const nfts: NFT[] = [
    {
      id: 1,
      name: "DeDaS Genesis #1",
      description: "The first ever DeDaS NFT representing decentralized storage innovation.",
      price: "0.5",
      image: "/nfts/nft-1.png"
    },
    {
      id: 2,
      name: "DeDaS Genesis #2",
      description: "Unique digital art piece symbolizing data security and privacy.",
      price: "0.5",
      image: "/nfts/nft-2.png"
    },
    {
      id: 3,
      name: "DeDaS Genesis #3",
      description: "A representation of the future of decentralized storage.",
      price: "0.5",
      image: "/nfts/nft-3.png"
    },
    {
      id: 4,
      name: "DeDaS Genesis #4",
      description: "Limited edition NFT showcasing scope for future data innovation.",
      price: "0.5",
      image: "/nfts/nft-4.png"
    },
    {
      id: 5,
      name: "DeDaS Genesis #5",
      description: "Exclusive digital collectible for early adopters.",
      price: "0.5",
      image: "/nfts/nft-5.png"
    },
    {
      id: 6,
      name: "DeDaS Genesis #6",
      description: "Rare NFT representing the DeDaS ecosystem.",
      price: "0.5",
      image: "/nfts/nft-6.png"
    },
    {
      id: 7,
      name: "DeDaS Genesis #7",
      description: "Premium NFT with unique utilities in the DeDaS network.",
      price: "0.5",
      image: "/nfts/nft-7.png"
    },
    {
      id: 8,
      name: "DeDaS Genesis #8",
      description: "The final piece of the Genesis collection.",
      price: "0.5",
      image: "/nfts/nft-8.png"
    }
  ];

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask to buy NFTs!');
    }
  };

  const buyNFT = async (nftId: number, price: string) => {
    if (!account) {
      await connectWallet();
      return;
    }

    // Here you would implement the actual NFT purchase logic
    alert(`NFT purchase functionality will be implemented soon! NFT ID: ${nftId}, Price: ${price} BNB`);
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            DeDaS NFT Collection
          </h1>
          <p className="text-lg leading-8 text-gray-400">
            Own a piece of the future with DeDaS Genesis NFTs. Each NFT grants exclusive access to premium features and storage benefits.
          </p>
          
          {/* Connect Wallet Button */}
          <div className="mt-8">
            {!account ? (
              <button
                onClick={connectWallet}
                className="bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-3 rounded-full transition-all duration-300"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <span className="text-white font-semibold">Wallet Connected</span>
                <span className="text-sm text-gray-400">
                  {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NFT Grid */}
      <div className="w-full max-w-[1920px] mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: nft.id * 0.1 }}
              className="bg-dark-light rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-square relative">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 flex flex-col h-[180px]">
                <h3 className="text-xl font-semibold text-white mb-2">{nft.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{nft.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-semibold">{nft.price} BNB</span>
                  <button
                    onClick={!account ? connectWallet : () => buyNFT(nft.id, nft.price)}
                    className="bg-primary hover:bg-primary/90 text-dark font-bold px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NftMarketplace;
