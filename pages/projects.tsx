import Head from 'next/head';

import Layout from '@sections/layout';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Contact Me - Tomas Bangerter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        {/* All Inline styles are to be removed once the sections for this page are created! */}
        <section style={{ minHeight: '900px', maxWidth: '900px' }}>
          <h1>Hey there! this page is still under construction.</h1>
          <h3>While I work in a cool way to display my projects, you can check some of what I can do below</h3>
          <ul>
            <li>
              Check out the landing page I built for my company:&nbsp;
              <strong>
                <a href='https://ailabs.etermax.com/en' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline' }}>
                  https://ailabs.etermax.com/en
                </a>
              </strong>
            </li>
            <li>
              Or look at some of my repos on Github, like&nbsp;
              <a
                href='https://github.com/tommynueve/personal-website/tree/development'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: 'underline' }}>
                this blog
              </a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
