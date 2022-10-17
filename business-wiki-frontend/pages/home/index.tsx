import defaultStyles from "../../shared/styles/Default.module.scss";
import buttonStyles from "../../shared/styles/Button.module.scss";
import moduleStyles from "../../shared/styles/Home.module.scss";

import Head from "next/head";
import Link from "next/link";
import Footer from "../../shared/components/Footer";
import React, { useContext } from "react";
import { UserContext } from "../../shared/contexts/UserContext";
import { SidepanelListElementInterface } from "../../shared/models/SidepanelListElementInterface";
import { PageInterface } from "../../shared/models/PageInterface";
import SidepanelListElement from "../../shared/components/SidepanelListElement";
import SidepanelListAddElement from "../../shared/components/SidepanelListAddElement";
import PageForm from "../../shared/components/PageForm";
import { UserInterface } from "../../shared/models/UserInterface";
import PageDetails from "../../shared/components/PageDetails";

const { container, container__main, container__mainheader } = defaultStyles;
const { button } = buttonStyles;
const { content, header__welcometext, content__sidepanel, content__board } = moduleStyles;

export default function Home() {
  const { user } = useContext(UserContext);

  let pagesList: Array<PageInterface> = [
    {
      id: 0,
      title: "Welcome Page",
      content: "This is the greeting page created by BusinessWiki for you.",
      createdBy: {
        id: 1,
        username: "Business Wiki",
        password: "1234"
      } as UserInterface,
    } as PageInterface
  ];

  let sidepanelPagesList: Array<SidepanelListElementInterface> = [
    {
      id: 0,
      title: "Welcome Page",
      clickEvent: (e) => showPageContent(e)
    } as SidepanelListElementInterface
  ];

  const showPageContent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    return (
      <></>
    );
  };

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
    <div className={container}>
      <Head>
        <title>Business Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${container__main} ${content}`}>
        <header className={`${container__mainheader}`}>
            <div className={header__welcometext}>
              <h3>Business Wiki</h3>
              <p>{user.username}</p>
            </div>
            <Link href="/">
              <button className={button}>LOGOUT</button>
            </Link>
        </header>
        <section className={content__sidepanel}>
          {showSidepanelList()}
          <SidepanelListAddElement addPageEvent={addPageEvent} />
        </section>
        <section className={content__board}>
          {sidepanelPagesList.length > 0 ? <PageDetails value={pagesList[0]} /> : <div>Welcome to Business Wiki</div>}
        </section>
      </main>

      <Footer />
    </div>
  );
};