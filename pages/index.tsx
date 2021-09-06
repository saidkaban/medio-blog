import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Trending from '../components/Trending';
import Posts from '../components/Posts';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medium</title>
        <link rel='icon' type='image/x-icon' href='styles/favicon.ico' />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.content}>
        <div className={styles.posts}>
          <Trending />
          <Posts />
        </div>
      </main>
    </div>
  );
};

export default Home;
