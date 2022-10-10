import { AppProps } from 'next/app';
import { useState } from 'react';
import { UserContext } from '../shared/contexts/UserContext';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <UserContext.Provider value={{ username: username, password: password, setUsername: setUsername }}>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}