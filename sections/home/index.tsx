import MainButton from '@components/buttons/MainButton';
import CircleFrame from '@components/imageframe/CircleFrame';
import style from './Home.module.scss';

const HomeSection = () => {
  return (
    <section className={style.homeContainer}>
      <CircleFrame />
      <h1 className={style.title}>
        Tomas Bangerter<br></br>
        <span>Frontend Developer</span>
      </h1>
      <p>I'm a web developer with 3+ years of experience in front-end development focusing on React and Nodejs.</p>
      <div className={style.ctaContainer}>
        <MainButton text={'Download my resume'} />
        <MainButton text={'Contact me'} variant='secondary' />
      </div>
    </section>
  );
};

export default HomeSection;
