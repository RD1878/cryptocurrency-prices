export const fetchPairPrice = (pair: string) =>
  fetch(`https://api.kraken.com/0/public/Ticker?pair=${pair}`, {
    cache: 'no-store',
    next: {
      revalidate: 5,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => err);

export const fetchPairsPrices = (pairs: string[]) => {
  return Promise.all(
    pairs.map(async (item) => {
      return await fetch(`https://api.kraken.com/0/public/Ticker?pair=${item}`, {
        cache: 'no-store',
      }).then((res) => res.json());
    })
  ).catch((err) => err);
};
