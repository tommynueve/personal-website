import Link from 'next/link';

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
        <a
          href='https://drive.google.com/file/d/1st2lbBrvPJHFjZRsL7E9WV8ezvxvzdUI/view?usp=sharing'
          target='_blank'
          rel='noreferrer'>
          <MainButton text={'Check my resume'} />
        </a>
        <Link href='/contact' passHref>
          <a>
            <MainButton text={'Contact me'} variant='secondary' />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
