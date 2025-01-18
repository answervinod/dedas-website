import React from 'react';

interface TokenMetricsProps {
  metrics: {
    totalSupply: string;
    circulatingSupply: string;
    burned: string;
    price: string;
  };
}

const TokenMetrics: React.FC<TokenMetricsProps> = ({ metrics }) => {
  const formatNumber = (num: string) => {
    return parseInt(num).toLocaleString();
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold mb-6">Token Metrics</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Total Supply</span>
            <span className="font-medium">{formatNumber(metrics.totalSupply)}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-primary h-full rounded-full w-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Circulating Supply</span>
            <span className="font-medium">{formatNumber(metrics.circulatingSupply)}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary h-full rounded-full" 
              style={{
                width: `${(parseInt(metrics.circulatingSupply) / parseInt(metrics.totalSupply)) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Burned Tokens</span>
            <span className="font-medium">{formatNumber(metrics.burned)}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-red-500 h-full rounded-full" 
              style={{
                width: `${(parseInt(metrics.burned) / parseInt(metrics.totalSupply)) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Market Cap</p>
              <p className="font-semibold">$2.5M</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">24h Volume</p>
              <p className="font-semibold">$150K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenMetrics;
