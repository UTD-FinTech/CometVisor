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
        <div
            style={{
                background:
                    'radial-gradient(39.2% 55.77% at 88.02% 3.08%, rgba(86, 159, 225, 0.2) 0%, rgba(241, 241, 243, 0.2) 100%), radial-gradient(52.81% 71.83% at 40.69% 111.87%, #BAD1D1 0%, #F1F2F3 100%)',
            }}
        >
            <ProvideAuth>
                <Component {...pageProps} />
            </ProvideAuth>
        </div>
    );
}

export default MyApp;
