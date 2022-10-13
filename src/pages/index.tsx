import React from 'react';

import { withSSRGuest } from '../guards/withSSRGuest';

const Index = () => {
  return (
    <div>
      <span>Oi</span>
    </div>
  );
};

export default Index;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
