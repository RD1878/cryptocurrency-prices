'use client';

import CurrencyListItem from '../currencyListItem';
import Link from 'next/link';
import { fetchPairsPrices } from '~/app/helpers/fetchers';
import styles from './CurrencyList.module.scss';
import useSWR from 'swr';
import { currencies, FIAT_CURRENCY } from '~/app/constants/currencies';

type CurrencyListProps = {};

type Prices = {
  error: any[];
  result: {
    [key: string]: {
      [key: string]: string | string[] | number[];
    };
  };
};
const CurrencyList = () => {
  const fiatCurrency = FIAT_CURRENCY.USD;
  const fetchCurrencies = currencies[fiatCurrency];
  const fetchPairs = Object.keys(fetchCurrencies.pairs);
  const fetcher = () => fetchPairsPrices(fetchPairs);

  const { data, isLoading } = useSWR<Prices>('pairs', fetcher);

  const prices = Object.entries(data?.result ?? {});

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Popular cryptocurrencies</h2>
      {isLoading && <p>Loading...</p>}
      <div className={styles.currenciesList}>
        {prices.map(([key, value]) => {
          return (
            <Link key={key} href={`/${key}`}>
              <CurrencyListItem
                imageSrc={fetchCurrencies.pairs[key]?.src}
                name={fetchCurrencies.pairs[key]?.tokenName}
                price={value?.a[0] as string}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CurrencyList;
