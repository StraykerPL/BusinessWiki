import Head from "next/head";
import Link from "next/link";
import React from "react";
import { UserContext } from "../../shared/contexts/UserContext";

export default function Home() {
  const context = React.useContext(UserContext);

  return (
    <div className="home">
      <Head>
        <title>Business Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="home__header">
          <h3>Business Wiki</h3>
          <p>{context.user.username}</p>
          <Link href="/">
            <button>LOGOUT</button>
          </Link>
      </header>

      <main>
          <section className="home__list"></section>
          <section className="home__page-content"></section>
      </main>
    </div>
  );
};