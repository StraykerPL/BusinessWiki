import defaultStyles from "../../shared/styles/Default.module.scss";
import buttonStyles from "../../shared/styles/Button.module.scss";
import moduleStyles from "../../shared/styles/Home.module.scss";

import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "../../shared/contexts/UserContext";
import { PageDetails, Footer } from "../../shared";
import { PageInterface, UserInterface, SidepanelListElementInterface } from "../../shared/models/models";
import SidepanelList from "../../shared/components/SidepanelList";

const { container, container__main, container__mainheader } = defaultStyles;
const { button } = buttonStyles;
const { content, content__board, header__welcometext } = moduleStyles;

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [pageDetails, setPageDetails] = useState({} as PageInterface);
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
    setShowDetails(!showDetails);

    const selectedElementObject = e.target as typeof e.target & {
      id: { value: number }
    };

    setPageDetails(pagesList.at(selectedElementObject.id.value));
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
        <SidepanelList elements={sidepanelPagesList} />
        <section className={content__board}>
          {!showDetails ? <h3>Welcome to Business Wiki!</h3> : ""}
          {showDetails && <PageDetails {...pageDetails} />}
        </section>
      </main>

      <Footer />
    </div>
  );
};