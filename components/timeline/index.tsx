import style from './Timeline.module.scss';
import TimeNode, { Props as TimeNodeProps } from './TimeNode';

interface Props {
  data: TimeNodeProps[];
}

const Timeline: React.FC<Props> = ({ data }) => {
  return (
    <div className={style['main-container']}>
      {data &&
        data.map(({ title, description, date }, index) => (
          <TimeNode key={index} title={title} description={description} date={date} />
        ))}
    </div>
  );
};

export default Timeline;
