interface CurrencyItemProps {
  name: string;
  price: number;
  fiat?: string;
}

export const CurrencyItem = ({ name, price }: CurrencyItemProps) => {
  return (
    <div>
      <h2>{`${name}: ${price}`}</h2>
    </div>
  );
};
