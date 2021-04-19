import style from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={style.container}>
      <h2>About me</h2>
      <p>
        Welcome to my piece of the internet! I'm an Argentinian who has been working on IT all his life, and although I'm a web developer
        now, my past is a little bit different than most devs out there: I started my career as a business analyst in 2010 for a worldwide
        company named Accenture. In 2011 I got my bachelor's degree as a System Analyst and shifted focus entirely to my work. Eventually, I
        became a Product Owner while leading a team, but still something felt off... Despite success, I wasn't enjoying it. I knew what made
        me happy: building apps, webs and coding in general. It took time and a lot of courage, but I finally decided to start over as a
        developer. All I can say after 3 years, is that it was one of the best decisions of my life.
      </p>
    </section>
  );
};

export default AboutMe;
