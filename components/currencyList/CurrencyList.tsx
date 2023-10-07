'use client';

import CurrencyListItem from '../currencyListItem';
import Link from 'next/link';
import { fetchPairsPrices } from '~/app/api/fetchers';
import styles from './CurrencyList.module.scss';
import useSWR from 'swr';
import { currencies, FIAT_CURRENCY } from '~/app/constants/currencies';

type CurrencyListProps = {};

const CurrencyList = () => {
  const fiatCurrency = FIAT_CURRENCY.USD;
  const fetchCurrencies = currencies[fiatCurrency];
  const fetchPairs = Object.keys(fetchCurrencies.pairs);
  const fetcher = () => fetchPairsPrices(fetchPairs);

  const { data: prices, isLoading } = useSWR('pairs', fetcher);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Popular cryptocurrencies</h2>
      {isLoading && <p>Loading...</p>}
      {prices?.map(({ result }) => {
        const [key, value] = Object.entries(result)[0];

        return (
          <Link key={key} href={`/${key}`}>
            <CurrencyListItem name={fetchCurrencies.pairs[key]?.tokenName} price={value?.a[0]} />
          </Link>
        );
      })}
    </div>
  );
};

export default CurrencyList;
