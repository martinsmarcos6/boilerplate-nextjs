import React from 'react';

const HomePage = () => {
  return <></>;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/login',
    },
  };
};

export default HomePage;
