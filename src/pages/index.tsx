import React from 'react';

import DashboardChart from '../components/charts/auc-total';
import { withSSRGuest } from '../guards/withSSRGuest';
import ModuleWrapper from '../layouts/ModuleWrapper';

const Index = () => {
  return (
    <ModuleWrapper>
      <main className="grid grid-cols-2 grid-rows-2 gap-5 pb-8">
        <DashboardChart />
        <DashboardChart />
      </main>
    </ModuleWrapper>
  );
};

export default Index;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
