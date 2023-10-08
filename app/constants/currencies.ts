export enum FIAT_CURRENCY {
  USD = 'usd',
}

export const currencies: {
  [key: string]: {
    pairs: {
      [key: string]: { blockchain: string; tokenName: string; src: string };
    };
  };
} = {
  [FIAT_CURRENCY.USD]: {
    pairs: {
      'XXBTZUSD': { blockchain: 'Bitcoin', tokenName: 'BTC', src: '/btc.png' },
      'XETHZUSD': { blockchain: 'Ethereum', tokenName: 'ETH', src: '/eth.png' },
      'MATICUSD': { blockchain: 'Polygon', tokenName: 'MATIC', src: '/matic.png' },
      'SOLUSD': { blockchain: 'Solana', tokenName: 'SOL', src: '/sol.png' },
      'DOTUSD': { blockchain: 'Polkadot', tokenName: 'DOT', src: '/dot.png' },
      'AVAXUSD': { blockchain: 'Avalanche', tokenName: 'AVAX', src: '/avax.png' },
      'ARBUSD': { blockchain: 'Arbitrum', tokenName: 'ARB', src: '/arb.png' },
      'UNIUSD': { blockchain: 'Uniswap', tokenName: 'UNI', src: '/uni.png' },
      '1INCHUSD': { blockchain: '1Inch', tokenName: '1INCH', src: '/1inch.png' },
      'ATOMUSD': { blockchain: 'Cosmos', tokenName: 'ATOM', src: '/atom.png' },
      'APTUSD': { blockchain: 'Aptos', tokenName: 'APT', src: '/apt.png' },
      'NEARUSD': { blockchain: 'NEAR Protocol', tokenName: 'NEAR', src: '/near.png' },
      'AAVEUSD': { blockchain: 'Aave', tokenName: 'AAVE', src: '/aave.png' },
    },
  },
};
