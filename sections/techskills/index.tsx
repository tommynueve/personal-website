import MainCard from '@components/cards/MainCard';
import FrontendIcon from '@components/icons/FrontendIcon';
import BackendIcon from '@components/icons/BackendIcon';
import UIUXIcon from '@components/icons/UIUXIcon';
import CICDIcon from '@components/icons/CICDIcon';
import styles from './TechSkills.module.scss';

const TechSkillsSection = () => {
  return (
    <section className={styles.container}>
      <h2>Technical skills</h2>
      <div className={styles.grid}>
        {content.map((item) => (
          <MainCard title={item.title} description={item.details} icon={item.icon} key={item.title} />
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
    title: 'Frontend development',
    details: [
      'I build web applications using JavaScript frameworks such as React or Vue. I have strong knowledge of JavaScript ES6+, TypeScript, CSS, SASS, LESS, and semantic HTML.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'Backend development',
    details: [
      'I have experience building REST micro-services using Nodejs and Python, communicating with SQL and NoSQL DBs like Postgre or Mongo.',
    ],
    icon: <BackendIcon />,
  },
  {
    title: 'UI / UX Design',
    details: [
      'I design websites applying UI and UX fundamentals and accessibility practices. I prototype with Adobe XD to facilitate web development.',
    ],
    icon: <UIUXIcon />,
  },
  {
    title: 'CI / CD',
    details: ['I use docker containers along with cloud platforms like IBM Cloud and Openshift', 'Git is my go-to version control system.'],
    icon: <CICDIcon />,
  },
];
