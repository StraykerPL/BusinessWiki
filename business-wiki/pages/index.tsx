import moduleStyles from "../shared/styles/Default.module.scss";
import formStyles from "../shared/styles/Form.module.scss";
import buttonStyles from "../shared/styles/Button.module.scss";

import Head from "next/head";
import React, { FormEvent, useContext } from "react";
import Input from "../shared/components/TextInput";
import { useRouter } from "next/router";
import { UserContext } from "../shared/contexts/UserContext";
import { User } from "../shared/models/User";

export default function App() {
  const router = useRouter();
  const context = useContext(UserContext);
  const homeRoutePath = "/home";

  const loadDataToObjectAndContext = (e: FormEvent<HTMLFormElement>) => {
    const ok = e.target as typeof e.target & {
      username: { value: string },
      password: { value: string }
    };

    context.setUser(
      { username: ok.username.value, password: ok.password.value } as User
    );
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
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

      <footer className={moduleStyles.container__footer}>
        <p>Copyright Daniel Strayker Nowak</p>
        <p>All rights reserved, MIT license</p>
      </footer>
    </div>
  );
}
