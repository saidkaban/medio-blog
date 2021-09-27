import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import AuthProvider from "../store/AuthStore/AuthProvider";

import ModalProvider from "../store/ModalStore/ModalProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <ModalProvider>
        <Head>
          <link rel='icon' type='image/svg+xml' href='/favicon.png' />
        </Head>
        <Component {...pageProps} />
      </ModalProvider>
    </AuthProvider>
  );
}
export default MyApp;
