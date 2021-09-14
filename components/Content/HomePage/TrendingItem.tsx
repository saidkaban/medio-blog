import React from 'react';

import Link from 'next/link';

import styles from './TrendingItem.module.css';

const TrendingItem: React.FC<{
  title: string;
  author: string;
  date: string;
  order: number;
  id: string;
}> = ({ title, author, date, order, id }) => {
  return (
    <Link href={`/${id}`} passHref>
      <div className={styles.itemContainer}>
        <h1 className={styles.order}>{order < 10 ? `0${order}` : order}</h1>
        <div className={styles.item}>
          <h3 className={styles.author}>{author}</h3>
          <h2>{title}</h2>
          <h3 className={styles.date}>{date}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TrendingItem;
