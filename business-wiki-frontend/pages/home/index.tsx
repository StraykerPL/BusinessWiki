import moduleStyles from "../../shared/styles/Default.module.scss";
import buttonStyles from "../../shared/styles/Button.module.scss";

import Head from "next/head";
import Link from "next/link";
import Footer from "../../shared/components/Footer";
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

      <Footer />
    </div>
  );
};