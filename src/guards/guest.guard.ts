import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

import { AuthService } from '../services';

const ssoRedirect = {
  redirect: {
    destination: '/sso',
    permanent: false,
  },
};

export const guestGuard = <P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const authService = new AuthService();
    const cookies = parseCookies(ctx);
    const { 'traad.token': token } = cookies;
    if (token) {
      try {
        await authService.loadUserSSR(token);
        return ssoRedirect;
      } catch (error) {
        console.error(error);
        destroyCookie(ctx, 'traad.token', {
          path: '/',
        });
      }
    }
    return fn(ctx);
  };
};
