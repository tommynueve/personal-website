import Head from 'next/head';

import Layout from '@sections/layout';
import ArticlesSection from '@sections/articles';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Tomas Bangerter</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Blog'
          content='Blog'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.tomasbangerter.com/blog' />
        <meta property='og:title' content='Tomas Bangerter - Blog' />
      </Head>
      <Layout>
        <ArticlesSection />
      </Layout>
    </>
  );
}

