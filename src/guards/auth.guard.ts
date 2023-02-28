import { ParsedUrlQuery } from 'querystring';

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

import { AuthService } from '../services';

const loginRedirect = {
  redirect: {
    destination: '/login',
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

export const authGuard = <P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const user = await getUserFromContext(ctx);
    if (!user) {
      destroyCookie(ctx, 'traad.token', {
        path: '/',
      });
      return loginRedirect;
    }
    return fn(ctx);
  };
};
