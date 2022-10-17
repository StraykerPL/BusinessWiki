import moduleStyles from "../shared/styles/Default.module.scss";
import formStyles from "../shared/styles/Form.module.scss";
import buttonStyles from "../shared/styles/Button.module.scss";

import React, { FormEvent, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Input, Footer } from "../shared";
import { UserContext } from "../shared/contexts/UserContext";
import { UserInterface } from "../shared/models/models";

export default function App() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const homeRoutePath = "/home";

  const loadDataToObjectAndContext = (e: FormEvent<HTMLFormElement>): void => {
    const temporaryFormDataObj = e.target as typeof e.target & {
      username: { value: string },
      password: { value: string }
    };

    setUser(
      {
        username: temporaryFormDataObj.username.value,
        password: temporaryFormDataObj.password.value
      } as UserInterface
    );
  };

  const submitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    loadDataToObjectAndContext(e);

    router.push(homeRoutePath);
  };

  return (
    <div className={moduleStyles.container}>
      <Head>
        <title>Business Wiki - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={moduleStyles.container__main}>
        <header className={moduleStyles.container__mainheader}>
          <h3>Business Wiki</h3>
        </header>
        <section className={moduleStyles.container__maincontent}>
          <form onSubmit={submitForm} className={formStyles.default}>
            <Input id="username" type="text" text="User Name" placeholder="Name..." />
            <Input id="password" type="password" text="Password" placeholder="Password..." />
            <button type="submit" className={buttonStyles.button}>LOGIN</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
