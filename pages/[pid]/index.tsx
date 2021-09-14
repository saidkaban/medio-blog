import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import DetailLayout from '../../components/Layout/DetailLayout';

import { POST_ITEMS } from '../../components/Content/HomePage/Posts';
import PostDetail from '../../components/Content/DetailPage/PostDetail';

const PostDetailPage: NextPage<{
  post: {
    title: string;
    author: string;
    date: string;
    image: string;
    id: string;
  };
}> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' type='image/x-icon' href='styles/favicon.ico' />
      </Head>
      <DetailLayout>
        <PostDetail post={post} />
      </DetailLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = POST_ITEMS.map((item) => {
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
  const post = POST_ITEMS.find((post) => post.id === context?.params?.pid);

  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
