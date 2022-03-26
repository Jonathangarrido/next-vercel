import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPRopsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPRopsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
