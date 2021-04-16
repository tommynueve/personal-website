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
    title: 'Frontend development',
    details: [
      'I build web applications using JavaScript frameworks such as React or Vue. I have strong knowledge of JavaScript ES6+, TypeScript, CSS, SASS, LESS, and semantic HTML.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'Backend development',
    details: ['I have experience building micro-services with Nodejs, using Express and Restify, and with Python using Flask.'],
    icon: <FrontendIcon />,
  },
  {
    title: 'UI / UX Design',
    details: [
      'I design websites applying UI and UX fundamentals and accessibility practices. I prototype with Adobe XD to facilitate web development.',
    ],
    icon: <FrontendIcon />,
  },
  {
    title: 'CI / CD',
    details: ['Git with GitHub and GitLab.', 'Docker, Openshift, IBM Cloud.', 'Artificial Intelligence.'],
    icon: <FrontendIcon />,
  },
];
