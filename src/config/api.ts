import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';

export const setupApiClient = (
  ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies['pdajobs.token']}`,
    },
  });

  return api;
};

export const traadApi = setupApiClient();
