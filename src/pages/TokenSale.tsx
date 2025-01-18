import React, { useState, useEffect } from 'react';

interface TokenSaleStats {
  totalSupply: string;
  tokensSold: string;
  currentPrice: string;
  nextPrice: string;
  timeUntilNextPhase: string;
  contractAddress: string;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

const TokenSale: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [account, setAccount] = useState<string>('');
  const [bnbBalance, setBnbBalance] = useState<string>('0');
  const [stats] = useState<TokenSaleStats>({
    totalSupply: '790,000,000',
    tokensSold: '0',
    currentPrice: '0.00015',
    nextPrice: '0.00018',
    timeUntilNextPhase: '2d 14h 22m',
    contractAddress: '0xa539d0ce2ee44996b02174af3c2a42e1ae2d9f11'
  });

  const fetchBnbBalance = async (address: string) => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [address, 'latest']
        });
        // Convert balance from wei to BNB (18 decimals)
        const bnbValue = (parseInt(balance, 16) / 1e18).toFixed(4);
        setBnbBalance(bnbValue);
      } catch (error) {
        console.error('Error fetching BNB balance:', error);
        setBnbBalance('0');
      }
    }
  };

  useEffect(() => {
    if (account) {
      fetchBnbBalance(account);
    }
  }, [account]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        fetchBnbBalance(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask to buy tokens!');
    }
  };

  const handleBuy = async () => {
    if (!account) {
      await connectWallet();
      return;
    }

    if (Number(amount) > Number(bnbBalance)) {
      alert('Insufficient BNB balance');
      return;
    }

    // Will be implemented with Web3 integration
    console.log('Buy tokens:', amount);
  };

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary">
            DeDaS Token Sale
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the future of decentralized storage. Purchase DeDaS tokens and become part of our revolutionary ecosystem.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Total Supply</h3>
            <p className="text-2xl font-bold gradient-text-primary">{stats.totalSupply}</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Tokens Sold</h3>
            <p className="text-2xl font-bold gradient-text-primary">{stats.tokensSold}</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Current Price</h3>
            <p className="text-2xl font-bold gradient-text-primary">${stats.currentPrice}</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Next Phase In</h3>
            <p className="text-2xl font-bold gradient-text-primary">{stats.timeUntilNextPhase}</p>
          </div>
        </div>

        {/* Purchase Card */}
        <div className="max-w-lg mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text-primary">Purchase Tokens</h2>
            
            <div className="space-y-6">
              {account ? (
                <>
                  <div className="flex justify-between items-center px-4 py-3 bg-dark-300 rounded-lg">
                    <span className="text-gray-400">Available Balance:</span>
                    <span className="text-xl font-bold gradient-text-primary">{bnbBalance} BNB</span>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Amount (BNB)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                        placeholder="0.0"
                        max={bnbBalance}
                      />
                      <button 
                        onClick={() => setAmount(bnbBalance)}
                        className="absolute right-16 top-1/2 transform -translate-y-1/2 text-primary text-sm hover:text-primary-dark"
                      >
                        MAX
                      </button>
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        BNB
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <p className="text-gray-500">
                        You will receive: {amount ? (Number(amount) / Number(stats.currentPrice)).toFixed(2) : '0'} DeDaS
                      </p>
                      {Number(amount) > Number(bnbBalance) && (
                        <p className="text-red-500">Insufficient balance</p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleBuy}
                    disabled={!amount || Number(amount) > Number(bnbBalance)}
                    className={`w-full btn-primary ${(!amount || Number(amount) > Number(bnbBalance)) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Buy Tokens
                  </button>

                  <p className="text-sm text-gray-400 text-center">
                    Connected: {account.slice(0, 6)}...{account.slice(-4)}
                  </p>
                </>
              ) : (
                <button
                  onClick={connectWallet}
                  className="w-full btn-primary"
                >
                  Connect Wallet
                </button>
              )}
            </div>

            <div className="mt-6 p-4 bg-dark-300 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 gradient-text-primary">Next Price Increase</h3>
              <p className="text-gray-400">Price will increase to ${stats.nextPrice} in {stats.timeUntilNextPhase}</p>
            </div>

            {/* Contract Information */}
            <div className="mt-6 p-4 bg-dark-300 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 gradient-text-primary">Contract Information</h3>
              <p className="text-gray-400 break-all">
                <span className="text-gray-500">Contract Address:</span><br/>
                {stats.contractAddress}
              </p>
              <div className="mt-2 flex space-x-2">
                <a 
                  href={`https://bscscan.com/token/${stats.contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark text-sm"
                >
                  View on BscScan →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="glass-card p-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-neon-green to-neon-blue mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text-primary">Secure Transactions</h3>
            <p className="text-gray-400">All transactions are secured by the BNB Chain blockchain technology.</p>
          </div>
          
          <div className="glass-card p-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text-primary">Instant Delivery</h3>
            <p className="text-gray-400">Tokens are transferred instantly to your wallet after purchase.</p>
          </div>

          <div className="glass-card p-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple mb-4 flex items-center justify-center">
              <svg className="h-6 w-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text-primary">24/7 Support</h3>
            <p className="text-gray-400">Our support team is always available to help with any questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSale;
