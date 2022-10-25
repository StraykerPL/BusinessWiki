import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
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