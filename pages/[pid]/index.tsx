import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  DocumentData,
} from 'firebase/firestore';
import { app } from '../../lib/firebaseInstance';

import DetailLayout from '../../components/Layout/DetailLayout';
import PostDetail from '../../components/Content/DetailPage/PostDetail';

const PostDetailPage: NextPage<{
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
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <DetailLayout>
        <PostDetail post={post} />
      </DetailLayout>
    </>
  );
};

// Can we use api to solve repetition problem here?

export const getStaticPaths: GetStaticPaths = async () => {
  const db = getFirestore(app);

  const postsSnap = await getDocs(collection(db, 'posts'));
  const posts: DocumentData[] = [];

  postsSnap.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });

  const paths = posts.map((item) => {
    return {
      params: { pid: item.id },
    };
  });

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const db = getFirestore(app);

  const colRef = collection(db, 'posts');

  // DO NOT IMPORT ALL POSTS, IMPORT ONLY THE RELEVANT ONE

  const docRef = doc(db, `posts/${context?.params?.pid}`);
  const postSnap = await getDoc(docRef);

  // const postsSnap = await getDocs(collection(db, 'posts'));
  // const posts: DocumentData[] = [];

  // postsSnap.forEach((doc) => {
  //   posts.push({ ...doc.data(), id: doc.id });
  // });

  let post;

  if (postSnap.exists()) {
    post = postSnap.data();
  }

  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
