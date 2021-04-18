import styles from './MainCard.module.scss';

interface Props {
  title: string;
  description: string[];
  icon?: React.ReactElement;
}

const MainCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className={styles.container}>
      {icon}
      <h3>{title}</h3>
      {description && description.map((value, index) => <p key={index}>{value}</p>)}
    </div>
  );
};

export default MainCard;
