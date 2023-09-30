import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">Currencies</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
