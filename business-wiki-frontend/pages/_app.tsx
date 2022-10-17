import "../pages/styles.scss";
import { AppProps } from 'next/app';
import { useState } from 'react';
import { UserContext } from '../shared/contexts/UserContext';
import { UserInterface } from '../shared/models/UserInterface';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useState({} as UserInterface);

    return (
        <UserContext.Provider value={
            { user, setUser: setUser }
        }>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}