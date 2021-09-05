import React from 'react';

import styles from './TrendingItem.module.css';

const TrendingItem: React.FC<{
  title: string;
  author: string;
  date: number;
}> = ({ title, author, date }) => {
  return (
    <div className={styles.trendingItemContainer}>
      <h3 className={styles.author}>{author}</h3>
      <h2>{title}</h2>
      <h3 className={styles.date}>{date}</h3>
    </div>
  );
};

export default TrendingItem;
