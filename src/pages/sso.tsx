import React, { useEffect } from 'react';

import { parseCookies } from 'nookies';

import { LoadingSpinner } from '../components/LoadingSpinner';
import { variables } from '../config/variables';
import { authGuard } from '../guards/auth.guard';

const modules: { [key: string]: string } = {
  backoffice: variables.backofficeUrl,
};

const Congrats = ({ origin }: any) => {
  const { 'traad.token': token } = parseCookies();

  useEffect(() => {
    if (origin) {
      window.location.href = `${modules[origin]}?sso_token=${token}`;
    }
    window.location.href = `${modules.backoffice}?sso_token=${token}`;
  }, []);

  return (
    <main className="text-3xl text-white">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <LoadingSpinner className="text-6xl" />
      </div>
    </main>
  );
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
