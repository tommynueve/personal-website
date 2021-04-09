import Head from 'next/head';

import Layout from '@sections/layout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Tomas Bangerter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div>Contact Page</div>
      </Layout>
    </>
  );
}
