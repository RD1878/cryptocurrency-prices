import styles from './CurrencyListItem.module.scss';
import Image from 'next/image';

interface CurrencyListItemProps {
  imageSrc: string;
  name: string;
  price: string;
}

const CurrencyListItem = ({ imageSrc, name, price }: CurrencyListItemProps) => {
  return (
    <div className={styles.container}>
      <Image src={imageSrc} alt={name} width={50} height={50} />
      <div className={styles.exchangeData}>
        <h3>{name}</h3>
        <p>{`${+price} USD`}</p>
      </div>
    </div>
  );
};

export default CurrencyListItem;
