import { FC } from 'react';

type CurrencyProps = {
  params: {
    currencyName: string;
  };
};

const Currency: FC<CurrencyProps> = ({ params: { currencyName } }) => {
  return (
    <div>
      <h2>{currencyName}</h2>
      <p>Price: 5000$</p>
    </div>
  );
};

export default Currency;
