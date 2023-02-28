import { ParsedUrlQuery } from 'querystring';

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

import { AuthService } from '../services';

const ssoRedirect = {
  redirect: {
    destination: '/sso',
    permanent: false,
  },
};

async function getUserFromContext(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const authService = new AuthService();
  const token = parseCookies(context)['traad.token'];
  if (!token) return null;
  try {
    const response = await authService.loadUserSSR(token);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const guestGuard = <P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const user = await getUserFromContext(ctx);
    if (user) return ssoRedirect;
    destroyCookie(ctx, 'traad.token', {
      path: '/',
    });
    return fn(ctx);
  };
};
