import React from 'react';

import { GetServerSidePropsContext } from 'next';
import { destroyCookie } from 'nookies';

const Logout = () => {
  return <div>Logout</div>;
};

export default Logout;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  destroyCookie(ctx, 'traad.token', {
    path: '/',
  });
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
