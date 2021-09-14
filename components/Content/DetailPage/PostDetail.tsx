import React from 'react';

import Image from 'next/image';

import styles from './PostDetail.module.scss';

const PostDetail: React.FC<{
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
      <div style={{ textAlign: 'center' }}>
        <h1 className={styles.title}>{post?.title}</h1>
      </div>
      <Image src={post.image} alt='Post image' height={600} width={900} />
    </div>
  );
};

export default PostDetail;
