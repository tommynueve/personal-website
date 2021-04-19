import style from './Timeline.module.scss';

export interface Props {
  title: string;
  description: React.ReactElement | string;
  date?: string;
}

const TimeNode: React.FC<Props> = ({ title, description, date }) => {
  return (
    <div className={style['node-container']}>
      <p className={style.date}>{date}</p>
      <div className={style.circle}></div>
      <div className={style.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeNode;
