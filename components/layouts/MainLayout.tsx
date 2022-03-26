import React, { FC } from "react";
import Head from "next/head";

import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Jonathan</title>
        <meta name="description" content="Contact Jonathan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
