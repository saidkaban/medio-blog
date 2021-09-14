/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import {
  doc,
  getDoc,
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { app } from '../lib/firebaseInstance';

import HomeLayout from '../components/Layout/HomeLayout';
import Trending from '../components/Content/HomePage/Trending';
import Posts from '../components/Content/HomePage/Posts';

import styles from '../styles/Home.module.scss';

const Home: NextPage<{ posts: {} }> = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' type='image/svg+xml' href='../assets/favicon.svg' />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
        <link
          href='https://fonts.googleapis.com/css2?family=IM+Fell+English&family=IM+Fell+French+Canon&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <HomeLayout>
        <div className={styles.blogContent}>
          <Trending />
          <div className={styles.posts}>
            <Posts />
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const db = getFirestore(app);

  // const docRef = doc(db, 'posts', 'vlXk20N6AfTEeKVVTFAD');
  const postsRef = collection(db, 'posts');

  const postsSnap = getDocs(postsRef);

  const posts = JSON.stringify(postsSnap);

  // const docSnap = await getDoc(docRef);

  // const unsub = onSnapshot(doc(db, 'posts'), (doc) => {
  //   console.log('Current data: ', doc.data());
  // });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
