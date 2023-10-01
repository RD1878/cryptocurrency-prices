import { FC } from 'react';
import { getPairPrice } from '~/app/api/getCurrencyData';

type CurrencyProps = {
  params: {
    currencyName: string;
  };
};

const Currency: FC<CurrencyProps> = async ({ params: { currencyName } }) => {
  const res = await getPairPrice('binance', currencyName);

  // const tradeWs = new WebSocket('wss://ws.coincap.io/trades/binance');
  //
  // tradeWs.onmessage = function (msg) {
  //   console.log(msg.data);
  // };

  return (
    <div>
      <h2>{currencyName}</h2>
      <p>{res?.result?.price}</p>
    </div>
  );
};

export default Currency;
