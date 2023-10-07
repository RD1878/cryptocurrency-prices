import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">Currencies</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
