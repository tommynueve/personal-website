import ArticleSummary from '@components/articles/ArticleSummary';
import React from 'react';

import style from './Articles.module.scss';

const ArticlesSection = () => {
  return (
    <section className={style['articles-container']}>
      <ArticleSummary
        title='Trying out Golang as a Frontend Developer'
        img='https://via.placeholder.com/300x200'
        timestamp='Jul 20 - 2021'
        description="I wanted to see what all the fuss was about. Despite not being a main backend developer, I do have some
        experience with Nodejs Express and Python's Flask, and it's always nice to cross roads from time to time!
        Why is Go gaining so much traction? Will I fall in love like everyone else?"
      />
    </section>
  );
};

export default ArticlesSection;
