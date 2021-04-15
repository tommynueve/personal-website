import MainCard from '@components/cards/MainCard';
import FrontendIcon from '@components/icons/FrontendIcon';
import styles from './TechSkills.module.scss';

const TechSkillsSection = () => {
  return (
    <section className={styles.container}>
      <h2>Technical Skills</h2>
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
    details: ['Functional and Object Oriented Programming using modern ES6+ JavaScript and TypeScript.'],
    icon: <FrontendIcon />,
  },
  {
    title: 'Backend',
    details: ['Functional and Object Oriented Programming using modern ES6+ JavaScript and TypeScript.'],
    icon: <FrontendIcon />,
  },
  {
    title: 'Other',
    details: ['Functional and Object Oriented Programming using modern ES6+ JavaScript and TypeScript.'],
    icon: <FrontendIcon />,
  },
];
