import "../pages/styles.scss";
import { AppProps } from 'next/app';
import { useState } from 'react';
import { UserContext } from '../shared/contexts/UserContext';
import { User } from '../shared/models/User';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useState({} as User);

    return (
        <UserContext.Provider value={
            { user: user, setUser: setUser }
        }>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}