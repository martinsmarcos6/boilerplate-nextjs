import React from 'react';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { withSSRGuest } from '../guards/withSSRGuest';

const Index = () => {
  return (
    <>
      <Header />
      <SideMenu />
    </>
  );
};

export default Index;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
