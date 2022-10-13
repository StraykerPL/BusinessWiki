import defaultStyles from "../../shared/styles/Default.module.scss";
import buttonStyles from "../../shared/styles/Button.module.scss";
import moduleStyles from "../../shared/styles/Home.module.scss";

import Head from "next/head";
import Link from "next/link";
import Footer from "../../shared/components/Footer";
import React from "react";
import { UserContext } from "../../shared/contexts/UserContext";
import { SidepanelListElementInterface } from "../../shared/models/SidepanelListElementInterface";
import { Page } from "../../shared/models/Page";
import SidepanelListElement from "../../shared/components/SidepanelListElement";
import SidepanelListAddElement from "../../shared/components/SidepanelListAddElement";
import PageForm from "../../shared/components/PageForm";

export default function Home() {
  const context = React.useContext(UserContext);

  let pagesList: Array<Page> = [];
  let sidepanelPagesList: Array<SidepanelListElementInterface> = [
    {
      id: 0,
      title: "Welcome Page",
      clickEvent: (e) => console.log(e)
    } as SidepanelListElementInterface
  ];

  const addPageEvent = () => {
    return (
      <PageForm />
    );
  };

  const showSidepanelList = (): JSX.Element => {
    return (
      <>
        {sidepanelPagesList.length > 0 ? sidepanelPagesList.map((element) => <SidepanelListElement key={element.id} value={element} />) : ""}
      </>
    );
  };

  return (
    <div className={defaultStyles.container}>
      <Head>
        <title>Business Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${defaultStyles.container__main} ${moduleStyles.content}`}>
        <header className={`${defaultStyles.container__mainheader}`}>
            <div className={moduleStyles.header__welcometext}>
              <h3>Business Wiki</h3>
              <p>{context.user.username}</p>
            </div>
            <Link href="/">
              <button className={buttonStyles.button}>LOGOUT</button>
            </Link>
        </header>
        <section className={moduleStyles.content__sidepanel}>
          {showSidepanelList()}
          <SidepanelListAddElement addPageEvent={addPageEvent} />
        </section>
        <section className={moduleStyles.content__board}>
          <p>Welcome to Business Wiki!</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};