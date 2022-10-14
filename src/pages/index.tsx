import React from 'react';

import DashboardChart from '../components/charts/auc-total';
import CustomersOverview from '../components/tables/CustomersOverview';
import NoticesAndPendingWidget from '../components/tables/NoticesAndPendingWidget';
import { withSSRGuest } from '../guards/withSSRGuest';
import ModuleWrapper from '../layouts/ModuleWrapper';

const Index = () => {
  return (
    <ModuleWrapper>
      <main className="grid grid-cols-2 grid-rows-1 gap-5 pb-24">
        <DashboardChart />
        <DashboardChart />
        <CustomersOverview />
        <NoticesAndPendingWidget />
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
