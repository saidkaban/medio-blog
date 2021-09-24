import type { AppProps } from "next/app";
import Head from "next/head";
import AuthProvider from "../store/AuthProvider";

import ModalProvider from "../store/ModalProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalProvider>
        <Head>
          <link type='ico' href='%PUBLIC_URL%/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </ModalProvider>
    </AuthProvider>
  );
}
export default MyApp;
