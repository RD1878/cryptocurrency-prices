import Image from 'next/image';
import styles from './page.module.scss';
import CurrencyList from '~/components/currencyList';

export default function Home() {
  return (
    <>
      <CurrencyList />
    </>
  );
}
