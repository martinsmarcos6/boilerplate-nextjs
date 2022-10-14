import React from 'react';

import moment from 'moment';
import { AppProps } from 'next/app';
import '../styles/main.css';
import NextHead from 'next/head';

import { AuthProvider } from '../contexts/AuthContext';
import 'moment/locale/pt-br';
import Container from '../layouts/Container';

moment.locale('pt-br');

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="overflow-x-hidden">
    <Container>
      <NextHead>
        <title>TRAAD</title>
      </NextHead>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Container>
  </div>
);

export default MyApp;
