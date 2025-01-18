import React from 'react';

interface TokenPriceCardProps {
  price: string;
}

const TokenPriceCard: React.FC<TokenPriceCardProps> = ({ price }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-primary transition-colors">
      <h3 className="text-xl font-semibold mb-4">Token Price Information</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-400">Current Price</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold">{price}</span>
            <span className="text-primary">BNB</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Min Purchase</span>
            <span>0.1 BNB</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Max Purchase</span>
            <span>50 BNB</span>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <h4 className="text-sm font-semibold mb-2">Payment Methods</h4>
          <div className="flex items-center gap-2">
            <img src="/assets/images/bnb-logo.png" alt="BNB Chain" className="w-6 h-6" />
            <span>BNB Chain (BSC)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPriceCard;
