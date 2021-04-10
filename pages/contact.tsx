import Head from 'next/head';

import Layout from '@sections/layout';
import ContactSection from '@sections/contact';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Tomas Bangerter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
}
