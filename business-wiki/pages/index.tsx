import Head from "next/head";
import React, { FormEvent } from "react";
import Input from "../shared/components/TextInput";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
