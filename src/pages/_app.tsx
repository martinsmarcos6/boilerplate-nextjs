import React from 'react';

import moment from 'moment';
import { AppProps } from 'next/app';
import '../styles/main.css';
import NextHead from 'next/head';
import Router from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import 'moment/locale/pt-br';
import { AuthProvider } from '../contexts/AuthContext';

moment.locale('pt-br');
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  React.useEffect(() => {
    const start = () => {};
    const end = () => {};
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>
          <NextHead>
            <title>NextJS</title>
          </NextHead>
          <Component {...pageProps} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
