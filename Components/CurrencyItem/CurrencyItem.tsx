interface CurrencyItemProps {
  name: string;
}

const CurrencyItem = ({ name }: CurrencyItemProps) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default CurrencyItem;
