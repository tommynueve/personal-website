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
      <p>I'm a front-end web developer with 3+ years of experience in React and Vue.</p>
      <div className={style.ctaContainer}>
        <a href='#about'>
          <MainButton text={'More about me'} />
        </a>
        <a href='#contact'>
          <MainButton text={'Get in touch'} variant='secondary' />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
