import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* favicon not changing */}

        <link rel='icon' type='image/svg+xml' href='../assets/favicon.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
