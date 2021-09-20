import type { AppProps } from "next/app";
import Head from "next/head";

import ModalProvider from "../store/ModalProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Head>
        <link type="ico" href="%PUBLIC_URL%/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
export default MyApp;
