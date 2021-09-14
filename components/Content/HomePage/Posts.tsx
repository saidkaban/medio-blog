import React from 'react';
import PostItem from './PostItem';

import styles from './Posts.module.scss';

const Posts: React.FC<{
  posts: {
    id: string;
    title: string;
    author: string;
    date: string;
    image: string;
  }[];
}> = ({ posts }) => {

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <PostItem
            key={item.id}
            author={item.author}
            title={item.title}
            date={item.date}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
