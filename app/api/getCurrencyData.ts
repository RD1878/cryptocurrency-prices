export const getPairPrice = async (exchange: string, pair: string) => {
  const res = await fetch(
    `https://api.cryptowat.ch/markets/${exchange}/${pair}/price?apikey=${process.env.CRYPTO_WATCH_API_KEY}`,
    {
      cache: 'no-store',
      // next: {
      //   revalidate: 60,
      // },
    }
  );

  return res.json();
};

export const getPairsPrices = async (exchange: string, pairs: string[]) => {
  const prices = await Promise.all(
    pairs.map(async (item) => {
      const data = await fetch(
        `https://api.cryptowat.ch/markets/${exchange}/${item}/price?apikey=${process.env.CRYPTO_WATCH_API_KEY}`,
        {
          cache: 'no-store',
        }
      );

      return data.json();
    })
  );

  return pairs.map((item, idx) => ({ [item]: prices[idx].result.price }));
};
