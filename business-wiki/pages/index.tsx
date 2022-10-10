import Head from "next/head";
import React, { FormEvent, useContext } from "react";
import Input from "../shared/components/TextInput";
import { useRouter } from "next/router";
import { UserContext } from "../shared/contexts/UserContext";

export default function App() {
  const router = useRouter();
  const context = useContext(UserContext);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ok = e.target as typeof e.target & {
      username: { value: string },
      password: { value: string }
    };

    context.setUsername(ok.username.value);

    router.push("/home");
  };

  return (
    <div className="container">
      <Head>
        <title>Business Wiki - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
        <h3>Business Wiki</h3>
        </header>
        <section>
          <form onSubmit={submitForm}>
            <Input id="username" text="User Name" placeholder="Name..." />
            <Input id="password" text="Password" placeholder="Password..." />
            <button type="submit">LOGIN</button>
          </form>
        </section>
      </main>

      <footer>
      </footer>
    </div>
  );
}
