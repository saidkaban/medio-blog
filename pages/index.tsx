import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from "../components/Layout/HomeLayout";
import Trending from "../components/Content/Trending";
import Posts from "../components/Content/Posts";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medium</title>
        <link rel="icon" type="image/x-icon" href="styles/favicon.ico" />
      </Head>
      <HomeLayout>
        <div className={styles.posts}>
          <Trending />
          <Posts />
        </div>
      </HomeLayout>
    </>
  );
};

export default Home;
