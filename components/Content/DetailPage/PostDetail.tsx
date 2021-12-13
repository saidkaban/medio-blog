import React from "react";

import Image from "next/image";

import styles from "./PostDetail.module.scss";

const PostDetail: React.FC<{
  post: {
    title: string;
    author: string;
    date: string;
    image: string;
    text: string;
    id: string;
  };
}> = ({ post }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.title}>{post?.title}</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3 className={styles.author}>{post?.author}</h3>
        <h5 className={styles.date}>{post?.date}</h5>
      </div>
      <div className={styles.imageContainer}>
        <Image src={post?.image} alt='Post image' height={600} width={900} />
      </div>
      <div className={styles.textContainer}>
        <p>{post.text}</p>
      </div>
    </div>
  );
};

export default PostDetail;
