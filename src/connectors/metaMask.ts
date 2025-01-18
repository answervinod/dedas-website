import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { InjectedConnector } from '@web3-react/injected-connector';

export const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // Mainnet
    56, // BSC
    97, // BSC Testnet
  ],
});
