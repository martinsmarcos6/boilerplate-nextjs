/* eslint-disable @typescript-eslint/return-await */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { setupApiClient } from '../config/api';

export const withSSRGuest = <P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (cookies['pdajobs.token']) {
      try {
        const apiClient = setupApiClient(ctx);
        const response = await apiClient.post('/user/me', {
          token: cookies['pdajobs.token'],
        });
        setCookie(ctx, 'pdajobs.token', response.data.accessToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });
        return {
          redirect: {
            destination: '/company/home',
            permanent: false,
          },
        };
      } catch (error) {
        destroyCookie(ctx, 'pdajobs.token', {
          path: '/',
        });
      }
    }
    return fn(ctx);
  };
};
