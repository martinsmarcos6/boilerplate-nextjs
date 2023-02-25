import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

import { AuthService } from '../services';

const loginRedirect = {
  redirect: {
    destination: '/login',
    permanent: false,
  },
};

export const authGuard = <P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const authService = new AuthService();
    const cookies = parseCookies(ctx);
    const { 'traad.token': token } = cookies;
    if (!token) return loginRedirect;
    try {
      await authService.loadUserSSR(token);
    } catch (error) {
      destroyCookie(ctx, 'traad.token', {
        path: '/',
      });
      return loginRedirect;
    }
    return fn(ctx);
  };
};
