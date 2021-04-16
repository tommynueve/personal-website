import MainCard from '@components/cards/MainCard';
import FrontendIcon from '@components/icons/FrontendIcon';
import styles from './TechSkills.module.scss';

const TechSkillsSection = () => {
  return (
    <section className={styles.container}>
      <h2>Technical skills</h2>
      <div className={styles.grid}>
        {content.map((item) => (
          <MainCard title={item.title} description={item.details} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default TechSkillsSection;

interface Skill {
  title: string;
  details: string[];
  icon?: React.ReactElement;
}

const content: Skill[] = [
  {
    title: 'Frontend',
    details: [
      'JavaScript, TypeScript, HTML, CSS.',
      'React, Redux, Nextjs, Gatsby.',
      'SASS, LESS, CSS-in-js.',
      'Jest, RTL, Cypress, Puppeteer.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'Backend',
    details: [
      'Nodejs with Express and Restify.',
      'Python with Flask.',
      'MongoDB, PostgreSQL, MSSQL.',
      'Firebase, Strapi, Contentful.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'Other',
    details: ['Git with GitHub and GitLab.', 'Docker, Openshift, IBM Cloud.', 'Artificial Intelligence.'],
    icon: <FrontendIcon />,
  },
];

const content2: Skill[] = [
  {
    title: 'Frontend',
    details: [
      'JavaScript, TypeScript, HTML, CSS.',
      'React, Redux, Nextjs, Gatsby.',
      'SASS, LESS, CSS-in-js.',
      'Jest, RTL, Cypress, Puppeteer.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'Backend',
    details: [
      'Nodejs with Express and Restify.',
      'Python with Flask.',
      'MongoDB, PostgreSQL, MSSQL.',
      'Firebase, Strapi, Contentful.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'Other',
    details: ['Git with GitHub and GitLab.', 'Docker, Openshift, IBM Cloud.', 'Artificial Intelligence.'],
    icon: <FrontendIcon />,
  },
];
