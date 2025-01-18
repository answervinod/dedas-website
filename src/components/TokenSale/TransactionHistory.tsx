import React from 'react';

interface TransactionHistoryProps {
  account: string | null | undefined;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ account }) => {
  // Mock data - in production, this would come from your backend or blockchain
  const transactions = [
    {
      hash: '0x1234...5678',
      type: 'Purchase',
      amount: '1000',
      price: '0.5',
      time: '2 minutes ago',
      status: 'completed'
    },
    {
      hash: '0x8765...4321',
      type: 'Purchase',
      amount: '500',
      price: '0.5',
      time: '5 minutes ago',
      status: 'completed'
    }
  ];

  if (!account) return null;

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold mb-6">Transaction History</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="pb-4">Transaction</th>
              <th className="pb-4">Type</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((tx, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-4">
                  <a 
                    href={`https://bscscan.com/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light"
                  >
                    {tx.hash}
                  </a>
                </td>
                <td className="py-4">{tx.type}</td>
                <td className="py-4">{tx.amount} DeDaS</td>
                <td className="py-4">{tx.price} BNB</td>
                <td className="py-4">{tx.time}</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-900 text-green-400 rounded-full text-xs">
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
