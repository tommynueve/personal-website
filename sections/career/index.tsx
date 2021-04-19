import Timeline from '@components/timeline';
import styles from './Career.module.scss';

const Career = () => {
  return (
    <section className={styles.container}>
      <h2>Career</h2>
      <Timeline data={content} />
    </section>
  );
};

export default Career;

const content = [
  {
    title: 'Frontend Developer at etermax',
    description: (
      <>
        After 10 years working for the same company, I decided it was time for a change, and with more work experience as a web developer on
        my back I joined etermax to work mostly developing and maintaining the Frontend part of the company’s website and client-facing AI
        based solutions. <br></br>Check our landing page to see an example of my work:{' '}
        <a href='https://ailabs.etermax.com/en' target='_blank' rel='noreferrer'>
          https://ailabs.etermax.com/en
        </a>
        <br></br> I also do most of the UI/UX designing and some backend work with Nodejs and Python when it’s needed.
      </>
    ),
    date: '2020 - Today',
  },
  {
    title: 'Fullstack Developer at Accenture',
    description: (
      <>
        I decided to make a big change in my career and left an important position as a PO to start over as a web developer.<br></br>
        Accenture let me rotate internally considering I was already a programmer despite never working as one, so I started on a new
        project developing the frontend and backend for AI based applications like virtual assistants, AI-based search engines and document
        processing.
      </>
    ),
    date: '2018 - 2020',
  },
  {
    title: 'System Analyst',
    description: 'After a little more than 3 years of effort, I finished by bachelor’s degree at Instituto de Tecnologia ORT.',
    date: '2011',
  },
  {
    title: 'Product Owner at Accenture',
    description:
      'I started my professional career as a business analyst and eventually made my way into becoming the Product Owner in charge of the product backlog for a .NET web and mobile application.',
    date: '2010 - 2018',
  },
];
