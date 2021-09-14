/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from 'next';
import { DocumentData } from '@firebase/firestore';
import Head from 'next/head';

import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';
import { app } from '../lib/firebaseInstance';

import HomeLayout from '../components/Layout/HomeLayout';
import Trending from '../components/Content/HomePage/Trending';
import Posts from '../components/Content/HomePage/Posts';

import styles from '../styles/Home.module.scss';

const Home: NextPage<{ posts: [] }> = ({ posts }) => {

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' type='image/svg+xml' href='../assets/favicon.svg' />
        <link
          href='https://fonts.googleapis.com/css2?family=IM+Fell+English&family=IM+Fell+French+Canon&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <HomeLayout>
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

  const postsSnap = await getDocs(collection(db, 'posts'));
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

  return {
    props: {
      posts: posts,
    },
    // revalidate: 10,
  };
};

export default Home;
