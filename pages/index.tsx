import { useContext, useEffect } from "react";

/* eslint-disable @next/next/no-page-custom-font */
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { DocumentData } from "@firebase/firestore";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../lib/firebaseInstance";

import ModalContext from "../store/ModalStore/modal-context";
import AuthContext from "../store/AuthStore/auth-context";
import Modal from "../components/UI/Modal";
import HomeLayout from "../components/Layout/HomeLayout/HomeLayout";
import Trending from "../components/Content/HomePage/Trending";
import Posts from "../components/Content/HomePage/Posts";

import styles from "../styles/Home.module.scss";

const Home: NextPage<{ posts: []; data: any }> = ({ posts, data }) => {
  const modalCtx = useContext(ModalContext);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5001/mediumclone-55669/us-central1/helloWorld", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log("client", data));
  }, []);

  // This is for disabling scrolling when modal is open
  useEffect(() => {
    if (modalCtx?.modalType) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [modalCtx?.modalType]);

  useEffect(() => {
    let currentUserId = localStorage.getItem("loggedInUserId");
    let currentUserName = localStorage.getItem("loggedInUserName");
    if (currentUserId && currentUserName) {
      authCtx?.logUserIn(currentUserId, currentUserName);
    }
    console.log("server", data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Trending trendingPosts={posts.slice(0, 6)} />
          <div className={styles.posts}>
            <Posts posts={posts} />
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const db = getFirestore(app);

  const dataToJson = await fetch(
    "http://localhost:5001/mediumclone-55669/us-central1/helloWorld",
    {
      credentials: "include",
    }
  );
  const data = await dataToJson.json();

  const postsSnap = await getDocs(collection(db, "posts"));
  const posts: DocumentData[] = [];

  postsSnap.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });

  // Posts are sorted by their dates
  posts.sort((firstItem, secondItem) =>
    firstItem.date < secondItem.date ? 1 : -1
  );

  return {
    props: {
      posts: posts,
      data,
    },
    // revalidate: 10,
  };
};

export default Home;
