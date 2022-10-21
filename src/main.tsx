import React from 'react';
// import {
//   WagmiConfig,
//   createClient,
//   configureChains,
//   chain,
//   Chain,
// } from 'wagmi';
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { HausThemeProvider } from '@daohaus/ui';
import ReactDOM from 'react-dom/client';
import App from './App';

// const gcCgain: Chain = {
//   id: 100,
//   name: 'Gnosis Chain',
//   network: 'xdai',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'xDai',
//     symbol: 'XDAI',
//   },
//   rpcUrls: {
//     default: 'https://rpc.gnosischain.com/',
//   },
//   blockExplorers: {
//     default: { name: 'GnosisScan', url: 'https://gnosisscan.io' },
//   },
//   testnet: false,
// };

// const { provider } = configureChains(
//   [chain.goerli, gcCgain],
//   [
//     jsonRpcProvider({
//       rpc: (chain) => {
//         return { http: chain.rpcUrls.default };
//       },
//     }),
//   ]
// );

// const client = createClient({
//   autoConnect: true,
//   provider,
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HausThemeProvider>
      {/* <WagmiConfig client={client}> */}
      <App />
      {/* </WagmiConfig> */}
    </HausThemeProvider>
  </React.StrictMode>
);
