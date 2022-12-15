import React from 'react';

const HomePage = () => {
  return <div>HomePage</div>;
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
