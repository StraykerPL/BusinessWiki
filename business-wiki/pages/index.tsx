import Head from "next/head";
import { FormEventHandler } from "react";
import Input from "../shared/components/TextInput";

export default function Home() {
  const submitData: FormEventHandler<HTMLFormElement> = (e): FormEventHandler<HTMLFormElement> => {
    e.preventDefault();
    console.log(e.timeStamp);

    return this as FormEventHandler<HTMLFormElement>;
  };

  return (
    <div className="container">
      <Head>
        <title>Business Wiki - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <form onSubmit={submitData(this)}>
            <h3>Business Wiki</h3>
            <Input id="username" text="User Name" placeholder="Name..." />
            <Input id="password" text="Password" placeholder="Password..." />
            <button type="submit">LOGIN</button>
          </form>
        </header>
      </main>

      <footer>
      </footer>
    </div>
  );
}
