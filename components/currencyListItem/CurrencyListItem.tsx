interface CurrencyListItemProps {
  name: string;
  price: string;
}

const CurrencyListItem = ({ name, price }: CurrencyListItemProps) => {
  return (
    <div>
      <h2>{`${name}: ${+price}`}</h2>
    </div>
  );
};

export default CurrencyListItem;
