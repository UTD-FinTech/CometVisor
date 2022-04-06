import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import {ProvideAuth} from '../lib/use-auth';

function MyApp({Component, pageProps}) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}

export default MyApp;
