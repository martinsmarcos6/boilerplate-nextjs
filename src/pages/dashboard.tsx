import React from 'react';

import { useQuery } from 'react-query';

import DashboardChart from '../components/charts/auc-total';
import { LoadingSpinner } from '../components/LoadingSpinner';
import CustomersOverview from '../components/tables/CustomersOverview';
import NoticesAndPendingWidget from '../components/tables/NoticesAndPendingWidget';
import { withSSRGuest } from '../guards/withSSRGuest';
import ModuleWrapper from '../layouts/ModuleWrapper';
import { ChartServices } from '../services';
import { TableServices } from '../services/table-services';

const chartServices = new ChartServices();
const tableServices = new TableServices();
const Index = () => {
  const aucChart1Query = useQuery('auc-chart', () =>
    chartServices.loadChartAUCData()
  );
  const avgIncomeDataChart = useQuery('avg-income-chart', () =>
    chartServices.loadChartAvgIncomeData()
  );
  const noticesPendingWidgetQuery = useQuery('notices-pending-widget', () =>
    tableServices.loadNoticesAndPendingWidgetData()
  );
  const customerOverviewWidgetQuery = useQuery('customer-overview-widget', () =>
    tableServices.loadCustomerOverviewData()
  );
  return (
    <ModuleWrapper>
      <main className="grid grid-cols-2 grid-rows-1 gap-5 pb-24 w-full">
        {aucChart1Query.isSuccess ? (
          <DashboardChart
            data={aucChart1Query.data.data.data}
            leftName={aucChart1Query.data.data.y1_name}
            rightName={aucChart1Query.data.data.y1_name}
            expansive
          />
        ) : (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        {avgIncomeDataChart.isSuccess ? (
          <DashboardChart
            data={avgIncomeDataChart.data.data.data}
            leftName={avgIncomeDataChart.data.data.y1_name}
            rightName={avgIncomeDataChart.data.data.y2_name}
          />
        ) : (
          <div className="flex items-center justify-center py-28">
            <LoadingSpinner />
          </div>
        )}
        {customerOverviewWidgetQuery.isSuccess ? (
          <CustomersOverview
            columns={customerOverviewWidgetQuery.data.data.columns}
            data={customerOverviewWidgetQuery.data.data.data}
          />
        ) : (
          <div className="flex items-center justify-center py-28">
            <LoadingSpinner />
          </div>
        )}

        {noticesPendingWidgetQuery.isSuccess ? (
          <NoticesAndPendingWidget data={noticesPendingWidgetQuery.data.data} />
        ) : (
          <div className="flex items-center justify-center py-28">
            <LoadingSpinner />
          </div>
        )}
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
