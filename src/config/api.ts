import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';

import { variables } from './variables';

export const setupApiClient = (
  ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const cookies = parseCookies(ctx);

  const headers = {
    Authorization: `Bearer ${cookies['traad.token']}`,
  };

  const apiSettings = {
    baseURL: variables.apiUrl,
  };

  if (cookies['traad.token']) {
    Object.assign(apiSettings, { headers });
  }

  const api = axios.create(apiSettings);

  return api;
};

export const traadApi = setupApiClient();
