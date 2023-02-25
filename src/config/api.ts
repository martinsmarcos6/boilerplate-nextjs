import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';

import { variables } from './variables';

export const setupApiClient = (
  ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: variables.apiUrl,
    headers: {
      Authorization: `Bearer ${cookies['pdajobs.token']}`,
    },
  });

  return api;
};

export const traadApi = setupApiClient();
