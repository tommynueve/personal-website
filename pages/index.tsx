import HomeSection from '@sections/home';
import AboutMe from '@sections/aboutme';
import Layout from '@sections/layout';
import Head from 'next/head';
import TechSkillsSection from '@sections/techskills';
import Career from '@sections/career';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomas Bangerter Frontend Developer - Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HomeSection />
        <AboutMe />
        <TechSkillsSection />
        <Career />
      </Layout>
    </>
  );
}
