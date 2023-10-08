'use client';

import useSWR from 'swr';
import { fetchPairPrice } from '~/app/helpers/fetchers';
import { FC, useEffect, useState } from 'react';
import { currencies, FIAT_CURRENCY } from '~/app/constants/currencies';

type CurrencyItemProps = {
  currencyName: string;
};

const CurrencyItem: FC<CurrencyItemProps> = ({ currencyName }) => {
  const fiatCurrency = FIAT_CURRENCY.USD;
  const fetchCurrencies = currencies[fiatCurrency];

  const [error, setError] = useState('');

  const { data, isLoading, error: httpError } = useSWR(currencyName, fetchPairPrice);

  const currentPrice = data?.result?.[currencyName]?.a[0] ?? null;

  useEffect(() => {
    if (data?.error) {
      setError(data?.error[0]);
    }
  }, [data]);

  return (
    <div>
      <h2>{fetchCurrencies.pairs[currencyName]?.tokenName}</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!!currentPrice && <p>{+currentPrice}</p>}
    </div>
  );
};

export default CurrencyItem;
