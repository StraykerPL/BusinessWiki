import "../pages/styles.scss";

import { AppProps } from 'next/app';
import { useState } from 'react';

import { UserContext } from "../shared/contexts/UserContext";
import { UserInterface } from "../shared/models/models";
import Layout from "../shared/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useState({} as UserInterface);

    return (
        <Layout>
            <UserContext.Provider value={
                { user, setUser }
            }>
                <Component {...pageProps} />
            </UserContext.Provider>
        </Layout>
    );
}