import type { AppProps } from 'next/app';
import Head from 'next/head';

import AuthProvider from '../store/AuthProvider';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <link type='ico' href='%PUBLIC_URL%/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
