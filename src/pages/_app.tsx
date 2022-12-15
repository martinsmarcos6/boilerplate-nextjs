import React from 'react';

import moment from 'moment';
import { AppProps } from 'next/app';
import '../styles/main.css';
import NextHead from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthProvider } from '../contexts/AuthContext';
import 'moment/locale/pt-br';
import Container from '../layouts/Container';

moment.locale('pt-br');
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div className="overflow-x-hidden">
        <Container>
          <NextHead>
            <title>TRAAD - iTracker</title>
          </NextHead>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </Container>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
