import { useContext, useEffect } from "react";

/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { DocumentData } from "@firebase/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../lib/firebaseInstance";

import ModalContext from "../store/modal-context";
import Modal from "../components/UI/Modal";
import HomeLayout from "../components/Layout/HomeLayout/HomeLayout";
import Trending from "../components/Content/HomePage/Trending";
import Posts from "../components/Content/HomePage/Posts";

import styles from "../styles/Home.module.scss";

const Home: NextPage<{ posts: [] }> = ({ posts }) => {
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    if (modalCtx?.modalType) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [modalCtx?.modalType]);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <link
          href='https://fonts.googleapis.com/css2?family=IM+Fell+English&family=IM+Fell+French+Canon&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <HomeLayout>
        <Modal
          type={modalCtx?.modalType || null}
          onClose={() => modalCtx?.closeModal()}
        ></Modal>
        <div className={styles.blogContent}>
          <Trending trendingPosts={posts} />
          <div className={styles.posts}>
            <Posts posts={posts} />
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const db = getFirestore(app);

  const postsSnap = await getDocs(collection(db, "posts"));
  const posts: DocumentData[] = [];

  postsSnap.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });

  // Couldn't get realtime updates to work

  // const q = query(collection(db, 'posts'));
  // const posts: DocumentData[] = [];
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     posts.push(doc.data());
  //   });
  //   console.log('posts here: ', posts);
  // });

  // POSTS ARE SORTED ACCORDING TO THEIR RECENCY
  posts.sort((firstItem, secondItem) =>
    firstItem.date < secondItem.date
      ? 1
      : firstItem.date > secondItem.date
      ? -1
      : 0
  );

  return {
    props: {
      posts: posts,
    },
    // revalidate: 10,
  };
};

export default Home;
