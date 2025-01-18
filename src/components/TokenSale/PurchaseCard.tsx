import React from 'react';

interface PurchaseCardProps {
  active: boolean;
  balance: string;
  purchaseAmount: string;
  setPurchaseAmount: (amount: string) => void;
  handlePurchase: () => void;
  connectWallet: () => void;
  loading: boolean;
  tokenPrice: string;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({
  active,
  balance,
  purchaseAmount,
  setPurchaseAmount,
  handlePurchase,
  connectWallet,
  loading,
  tokenPrice,
}) => {
  const calculateTokens = () => {
    if (!purchaseAmount) return "0";
    return (parseFloat(purchaseAmount) / parseFloat(tokenPrice)).toFixed(2);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Purchase DeDaS Tokens</h3>
      
      {!active ? (
        <div className="text-center">
          <p className="text-gray-400 mb-4">Connect your wallet to purchase tokens</p>
          <button
            onClick={connectWallet}
            className="w-full py-3 px-4 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Amount in BNB</span>
              <span>Balance: {parseFloat(balance).toFixed(4)} BNB</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(e.target.value)}
                placeholder="0.0"
                className="w-full bg-transparent text-2xl outline-none"
              />
              <button
                onClick={() => setPurchaseAmount(balance)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-primary hover:text-primary-light"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>You will receive</span>
              <span>DeDaS Tokens</span>
            </div>
            <div className="text-2xl">{calculateTokens()}</div>
          </div>

          <button
            onClick={handlePurchase}
            disabled={loading || !purchaseAmount || parseFloat(purchaseAmount) <= 0}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              loading || !purchaseAmount || parseFloat(purchaseAmount) <= 0
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-dark'
            }`}
          >
            {loading ? 'Processing...' : 'Purchase Tokens'}
          </button>

          <div className="text-center text-sm text-gray-400">
            Make sure you have enough BNB for gas fees
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseCard;
