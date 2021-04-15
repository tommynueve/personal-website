import styles from './MainCard.module.scss';

interface Props {
  title: string;
  description: string[];
}

const MainCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {description && description.map((value) => <p>{value}</p>)}
    </div>
  );
};

export default MainCard;
