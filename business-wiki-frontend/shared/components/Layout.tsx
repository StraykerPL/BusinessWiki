import Head from "next/head";
import { LayoutInputProps } from "../models/models";
import Footer from "./Footer";

const Layout = ({ children }: LayoutInputProps) => {
  return (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {children}

        <Footer />
    </>
  );
};

export default Layout;