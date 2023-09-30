export const getPairPrice = async (exchange: string, pair: string) => {
  const res = await fetch(
    `https://api.cryptowat.ch/markets/${exchange}/${pair}/price?apikey=${process.env.CRYPTO_WATCH_API_KEY}`,
    {
      cache: 'no-store',
    }
  );

  return res.json();
};
