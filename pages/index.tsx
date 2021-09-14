import HomeSection from '@sections/home';
import AboutMe from '@sections/aboutme';
import Layout from '@sections/layout';
import Head from 'next/head';
import TechSkillsSection from '@sections/techskills';
import Career from '@sections/career';
import ContactSection from '@sections/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomas Bangerter Frontend Developer - Home</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Im a web developer with 3+ years of experience in front-end development focusing on React and Nodejs.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.tomasbangerter.com' />
        <meta property='og:title' content='Tomas Bangerter Frontend Developer - Home' />
        <meta property='og:image' content='https://www.tomasbangerter.com/author.jpeg' />
      </Head>
      <Layout>
        <HomeSection />
        <AboutMe />
        <TechSkillsSection />
        <Career />
        <ContactSection />
      </Layout>
    </>
  );
}
