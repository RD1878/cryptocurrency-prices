export enum FIAT_CURRENCY {
  USD = 'usd',
}

export const currencies = {
  [FIAT_CURRENCY.USD]: {
    pairs: {
      'XXBTZUSD': { blockchain: 'Bitcoin', tokenName: 'BTC' },
      'XETHZUSD': { blockchain: 'Ethereum', tokenName: 'ETH' },
      'MATICUSD': { blockchain: 'Polygon', tokenName: 'MATIC' },
      'SOLUSD': { blockchain: 'Solana', tokenName: 'SOL' },
      'DOTUSD': { blockchain: 'Polkadot', tokenName: 'DOT' },
      'AVAXUSD': { blockchain: 'Avalanche', tokenName: 'AVAX' },
      'ARBUSD': { blockchain: 'Arbitrum', tokenName: 'ARB' },
      'UNIUSD': { blockchain: 'Uniswap', tokenName: 'UNI' },
      '1INCHUSD': { blockchain: '1Inch', tokenName: '1INCH' },
      'ATOMUSD': { blockchain: 'Cosmos', tokenName: 'ATOM' },
      'APTUSD': { blockchain: 'Aptos', tokenName: 'APT' },
      'NEARUSD': { blockchain: 'NEAR Protocol', tokenName: 'NEAR' },
      'AAVEUSD': { blockchain: 'Aave', tokenName: 'AAVE' },
    },
  },
};
