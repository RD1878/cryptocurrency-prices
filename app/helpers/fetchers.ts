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

export const fetchPairsPrices = (pairs: string[]) =>
  fetch(`https://api.kraken.com/0/public/Ticker?pair=${pairs.join(',')}`, {
    cache: 'no-store',
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => err);
