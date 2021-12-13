import React from "react";

import styles from "./NewPost.module.scss";

const NewPost: React.FC<{
  setPostTitle: (title: string) => void;
  setPostImageLink: (title: string) => void;
  setPostText: (text: string) => void;
}> = ({ setPostTitle, setPostText, setPostImageLink }) => {
  return (
    <form className={styles.newPostForm}>
      <textarea
        className={styles.titleArea}
        rows={3}
        placeholder='Title'
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <textarea
        className={styles.linkArea}
        rows={3}
        placeholder='Link your image...'
        onChange={(event) => setPostImageLink(event.target.value)}
      />
      <textarea
        className={styles.postArea}
        rows={60}
        placeholder='Tell your story...'
        onChange={(event) => setPostText(event.target.value)}
      />
    </form>
  );
};

export default NewPost;
