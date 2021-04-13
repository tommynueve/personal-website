import HomeSection from '@sections/home';
import AboutMe from '@sections/aboutme';
import Layout from '@sections/layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HomeSection />
        <AboutMe />
      </Layout>
    </>
  );
}
