import React from 'react';

import Image from 'next/image';

import styles from './PostDetail.module.scss';

const Post: React.FC<{
  post: {
    title: string;
    author: string;
    date: string;
    image: string;
    id: string;
  };
}> = ({ post }) => {
  return (
    <div>
      <h1 className={styles.title}>{post?.title}</h1>
      <Image src={post.image} alt='Post image' height={400} width={600} />
    </div>
  );
};

export default Post;
