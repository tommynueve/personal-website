import React from 'react';

import styles from './Article.module.scss';

interface Props {
  title: string;
  img: string;
  description: string;
  timestamp: string;
}

const ArticleSummary = ({ title, img, description, timestamp }) => {
  return (
    <article className={styles.container}>
      <img src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
      <time>{timestamp}</time>
    </article>
  );
};

export default ArticleSummary;
