import React from 'react';

import { withSSRGuest } from '../guards/withSSRGuest';
import ModuleWrapper from '../layouts/ModuleWrapper';

const Index = () => {
  return (
    <ModuleWrapper>
      <span>oi eu me chamo raffy</span>
    </ModuleWrapper>
  );
};

export default Index;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
