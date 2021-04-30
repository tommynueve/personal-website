import MainButton from '@components/buttons/MainButton';
import style from './CTAReminder.module.scss';
import Links from '@config/Links';

const CTAReminderSection = () => {
  return (
    <section className={style.container}>
      <h2>Take a look at my CV to know more!</h2>
      <a href={Links.resumeLink} target='_blank' rel='noreferrer'>
        <MainButton text={'Check my resume'} />
      </a>
    </section>
  );
};

export default CTAReminderSection;
