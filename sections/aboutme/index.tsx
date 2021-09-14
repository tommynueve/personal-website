import style from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={style.container} id='about'>
      <h2>About me</h2>
      <p>
        Welcome to my piece of the internet! I'm an Argentinian currently based in Germany who has been working on IT
        for over 10 years, and although I'm a web developer now, my past is a little bit different than most devs out
        there: I started my career as a business analyst and then became a Product Owner. Despite success, I felt too
        out of touch with technology, I wasn't enjoying it. It took time and a lot of courage to leave such a career
        behind, but I finally decided to start over as a developer. After more than 3 years, I can safely say: It was
        one of the best decisions of my life.
      </p>
    </section>
  );
};

export default AboutMe;
