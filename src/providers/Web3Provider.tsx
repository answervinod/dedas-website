import { ReactNode } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { metaMask, hooks } from '../connectors/metaMask';

interface Web3ProviderProps {
  children: ReactNode;
}

const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <Web3ReactProvider connectors={[[metaMask, hooks]]}>
      {children}
    </Web3ReactProvider>
  );
};

export default Web3Provider;
