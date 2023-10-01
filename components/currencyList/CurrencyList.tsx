import CurrencyItem from '../currencyItem';
import Link from 'next/link';
import { getPairsPrices } from '~/app/api/getCurrencyData';
import styles from './CurrencyList.module.scss';

type CurrencyListProps = {};

export const CurrencyList = async () => {
  const pairs = ['btcusdt', 'ethusdt', 'maticusdt', 'bnbusdt'];

  const prices: { [key: string]: number }[] = await getPairsPrices('binance', pairs);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Popular cryptocurrencies</h2>
      {prices.map((item) => {
        const [key, value] = Object.entries(item)[0];

        return (
          <Link key={key} href={`/${key}`}>
            <CurrencyItem name={key} price={value} />
          </Link>
        );
      })}
    </div>
  );
};
