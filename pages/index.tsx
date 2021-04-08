import Head from 'next/head';

import Header from '@sections/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </>
  );
}
