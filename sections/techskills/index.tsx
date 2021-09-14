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
      'This is my main focus. I build responsive, accessible and performant web apps using modern JS frameworks such as React or Vue. I have strong knowledge of ES6+, TypeScript, Redux, CSS, SASS, among others.',
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
      'I actively participate in the UI / UX Design process with more experienced designers providing my knowledge on the topic. If needed, I can come up with my own designs as well.',
    ],
    icon: <UIUXIcon />,
  },
  {
    title: 'CI / CD',
    details: [
      'Although I am no expert, I use docker containers along with cloud platforms like Openshift or GCP for deploys. Git my go-to version control system.',
    ],
    icon: <CICDIcon />,
  },
];
