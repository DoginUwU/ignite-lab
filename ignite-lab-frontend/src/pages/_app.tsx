import { UserProvider } from '@auth0/nextjs-auth0';

const MyApp = ({ Component, pageProps }) => (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
);

export default MyApp;
