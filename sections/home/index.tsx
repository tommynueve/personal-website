import CircleFrame from '@components/imageframe/CircleFrame';
import style from './Home.module.scss';

const HomeSection = () => {
  return (
    <div className={style.homeContainer}>
      <CircleFrame />
      <h1 className={style.title}>Tomas Bangerter</h1>
      <h2 className={style.subtitle}>Frontend Developer with 3+ years of experience in React</h2>
      <p>
        I started in the IT world as a business analyst, earned a position as a Product Owner, and although I was in a
        path of success, that didn't make me happy... I wanted to actually build apps myself! So one day, I took a big
        risk, I started over as a web developer and I have been one for 3+ years now. Was it worth it? I start every day
        with a smile on my face. Best decision I have ever made.
      </p>
    </div>
  );
};

export default HomeSection;
