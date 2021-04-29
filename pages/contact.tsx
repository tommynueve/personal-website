import Head from 'next/head';

import Layout from '@sections/layout';
import ContactSection from '@sections/contact';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Tomas Bangerter</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Contact me! - Im a web developer with 3+ years of experience in front-end development focusing on React and Nodejs.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.tomasbangerter.com/contact' />
        <meta property='og:title' content='Tomas Bangerter - Contact Me' />
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
}
