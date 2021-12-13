import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./PostItem.module.scss";

const PostItem: React.FC<{
  title: string;
  author: string;
  date: string;
  image: string;
  id: string;
}> = ({ title, author, date, image, id }) => {
  return (
    <Link href={`/${id}`} passHref>
      <div className={styles.postContent}>
        <div className={styles.postText}>
          <h3>{author}</h3>
          <h1>{title}</h1>
          <h4>{date}</h4>
        </div>
        <Image
          src={image}
          alt='Post thumbnail'
          height={100}
          width={150}
          
        />
      </div>
    </Link>
  );
};

export default PostItem;
