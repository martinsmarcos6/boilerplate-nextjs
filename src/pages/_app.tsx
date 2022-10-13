import React from 'react';

import moment from 'moment';
import { AppProps } from 'next/app';
import '../styles/main.css';
import NextHead from 'next/head';

import { AuthProvider } from '../contexts/AuthContext';

import 'moment/locale/pt-br';

moment.locale('pt-br');

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="overflow-x-hidden">
    <NextHead>
      <title>Yeee Boilerplate</title>
    </NextHead>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
);

export default MyApp;
