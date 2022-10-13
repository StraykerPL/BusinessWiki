import moduleStyles from "../../shared/styles/Default.module.scss";
import buttonStyles from "../../shared/styles/Button.module.scss";

import Head from "next/head";
import Link from "next/link";
import React from "react";
import { UserContext } from "../../shared/contexts/UserContext";

export default function Home() {
  const context = React.useContext(UserContext);

  return (
    <div className={moduleStyles.container}>
      <Head>
        <title>Business Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={moduleStyles.container__main}>
        <header className={moduleStyles.container__mainheader}>
            <h3>Business Wiki</h3>
            <p>{context.user.username}</p>
            <Link href="/">
              <button className={buttonStyles.button}>LOGOUT</button>
            </Link>
        </header>
        <section className=""></section>
        <section className=""></section>
      </main>

      <footer className={moduleStyles.container__footer}>
        <p>Copyright Daniel Strayker Nowak</p>
        <p>All rights reserved, MIT license</p>
      </footer>
    </div>
  );
};