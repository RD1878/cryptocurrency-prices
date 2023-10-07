import { FC } from 'react';
import CurrencyItem from '~/components/currencyItem/CurrencyItem';

type CurrencyProps = {
  params: {
    currencyName: string;
  };
};

const CurrencyData: FC<CurrencyProps> = ({ params: { currencyName } }) => {
  return <CurrencyItem currencyName={currencyName} />;
};

export default CurrencyData;
