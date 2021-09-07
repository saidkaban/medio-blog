import React from 'react';

import Image from 'next/image';

import styles from './PostItem.module.scss';

const PostItem: React.FC<{
  title: string;
  author: string;
  date: string;
  image: string;
}> = ({ title, author, date, image }) => {
  return (
    <div className={styles.postContent}>
      <div className={styles.postText}>
        <h3>{author}</h3>
        <h1>{title}</h1>
        <h4>{date}</h4>
      </div>
      <Image src={image} alt='Post thumbnail' width={100} height={100} />
    </div>
  );
};

export default PostItem;
