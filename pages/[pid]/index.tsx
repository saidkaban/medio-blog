import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { DocumentData } from '@firebase/firestore';
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

  const postsSnap = await getDocs(collection(db, 'posts'));
  const posts: DocumentData[] = [];

  postsSnap.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  const post = posts.find((post) => post.id === context?.params?.pid);

  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
