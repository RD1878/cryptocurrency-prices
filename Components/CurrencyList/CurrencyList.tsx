import CurrencyItem from '../CurrencyItem';
import Link from 'next/link';

type CurrencyListProps = {};

export const CurrencyList = () => {
  const currencyItems = [
    {
      id: 'btc',
      name: 'bitcoin',
    },
    {
      id: 'eth',
      name: 'etherium',
    },
  ];

  return (
    <div>
      {currencyItems.map(({ id, name }) => (
        <Link key={id} href={`/${name}`}>
          <CurrencyItem name={name} />
        </Link>
      ))}
    </div>
  );
};
