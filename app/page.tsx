import Image from 'next/image';
import styles from './page.module.css';
import CurrencyList from '~/Components/CurrencyList';

export default function Home() {
  return (
    <>
      <CurrencyList />
    </>
  );
}
