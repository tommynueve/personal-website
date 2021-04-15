import MainCard from '@components/cards/MainCard';
import styles from './TechSkills.module.scss';

const TechSkillsSection = () => {
  return (
    <section className={styles.container}>
      <h2>Technical Skills</h2>
      <div className={styles.grid}>
        <MainCard title={content.frontend[0].category} description={content.frontend[0].details} />
        <MainCard title={content.frontend[1].category} description={content.frontend[1].details} />
        <MainCard title='Other' description={['Test']} />
      </div>
    </section>
  );
};

export default TechSkillsSection;

const content = {
  frontend: [
    {
      category: 'JavaScript & TypeScript',
      details: ['Functional and Object Oriented Programming using modern ES6+ JavaScript and TypeScript.'],
    },
    {
      category: 'React',
      details: [
        'Nextjs and Gatsby for Static Site Generation and Server Side Rendering.',
        'Redux and Context API for state management.',
        'Material-UI, Bootstrap and styled-components for UI theming.',
      ],
    },
  ],
  backend: 'backend skills',
  other: 'other skills',
};
