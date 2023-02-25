import React, { useEffect } from 'react';

import { parseCookies } from 'nookies';

import { useAuth } from '../contexts/AuthContext';
import { authGuard } from '../guards/auth.guard';

const Congrats = ({ origin }: any) => {
  const { user } = useAuth();
  const { 'traad.token': token } = parseCookies();
  useEffect(() => {
    if (!user) {
      window.location.href = `${origin}?sso_token=${token}`;
    }
  }, []);
  return <div className="text-3xl text-white">Loading...</div>;
};

export default Congrats;

export const getServerSideProps = authGuard(async (ctx) => {
  const { query } = ctx;
  return {
    props: {
      origin: query.origin ?? null,
    },
  };
});
