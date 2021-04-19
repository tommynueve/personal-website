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
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nemo est odio illo dolor tenetur minima, asperiores maiores inventore perspiciatis atque aliquam minus, quam vitae deserunt harum. Similique, nemo laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nemo est odio illo dolor tenetur minima, asperiores maiores inventore perspiciatis atque aliquam minus, quam vitae deserunt harum. Similique, nemo laboriosam!',
    date: '2020 - Today',
  },
  {
    title: 'Fullstack Developer at Accenture',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nemo est odio illo dolor tenetur minima, asperiores maiores inventore perspiciatis atque aliquam minus, quam vitae deserunt harum. Similique, nemo laboriosam!',
    date: '2018 - 2020',
  },
  {
    title: 'System Analyst',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nemo est odio illo dolor tenetur minima, asperiores maiores inventore perspiciatis atque aliquam minus, quam vitae deserunt harum. Similique, nemo laboriosam!',
    date: '2011',
  },
  {
    title: 'Product Owner at Accenture',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nemo est odio illo dolor tenetur minima, asperiores maiores inventore perspiciatis atque aliquam minus, quam vitae deserunt harum. Similique, nemo laboriosam!',
    date: '2010 - 2018',
  },
];
