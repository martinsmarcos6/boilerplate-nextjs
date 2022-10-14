import React from 'react';

import Header from '../components/Header';
import { withSSRGuest } from '../guards/withSSRGuest';

const Index = () => {
  return <Header />;
};

export default Index;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
