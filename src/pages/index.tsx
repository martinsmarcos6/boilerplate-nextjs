import React, { useEffect, useState } from 'react';

import DashboardChart from '../components/charts/auc-total';
import { LoadingSpinner } from '../components/LoadingSpinner';
import CustomersOverview from '../components/tables/CustomersOverview';
import NoticesAndPendingWidget from '../components/tables/NoticesAndPendingWidget';
import { withSSRGuest } from '../guards/withSSRGuest';
import ModuleWrapper from '../layouts/ModuleWrapper';
import { ChartServices } from '../services';
import { ChartResponse } from '../services/contracts/charts';
import { NoticesAndPendingWidgetResponse } from '../services/contracts/tables';
import { TableServices } from '../services/table-services';

const Index = () => {
  const chartServices = new ChartServices();
  const tableServices = new TableServices();
  const [loading, setLoading] = useState(true);
  const [aucData, setAucData] = useState<ChartResponse>();
  const [notifications, setNotifications] =
    useState<NoticesAndPendingWidgetResponse>();
  const [avgIncomeData, setAvgIncomeData] = useState<ChartResponse>();

  const loadChartAuc = async () => {
    try {
      const response = await chartServices.loadChartAUCData();
      setAucData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadChartAvgIncome = async () => {
    try {
      const response = await chartServices.loadChartAvgIncomeData();
      setAvgIncomeData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadNoticesAndPendingWidgetData = async () => {
    try {
      const response = await tableServices.loadNoticesAndPendingWidgetData();
      setNotifications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTables = async () => {
    await loadNoticesAndPendingWidgetData();
  };

  const loadCharts = async () => {
    await loadChartAvgIncome();
    await loadChartAuc();
  };

  useEffect(() => {
    loadCharts();
    loadTables();
  }, []);

  return (
    <ModuleWrapper>
      {loading ? (
        <main className="w-full h-full flex items-center justify-center py-9">
          <LoadingSpinner />
        </main>
      ) : (
        <main className="grid grid-cols-2 grid-rows-1 gap-5 pb-24 w-full">
          {aucData ? (
            <DashboardChart
              data={aucData.data}
              leftName={aucData.y1_name}
              rightName={aucData.y2_name}
              expansive
            />
          ) : (
            <div className="flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          {avgIncomeData ? (
            <DashboardChart
              data={avgIncomeData.data}
              leftName={avgIncomeData.y1_name}
              rightName={avgIncomeData.y2_name}
            />
          ) : (
            <div className="flex items-center justify-center py-28">
              <LoadingSpinner />
            </div>
          )}
          <CustomersOverview />
          {notifications ? (
            <NoticesAndPendingWidget data={notifications} />
          ) : (
            <div className="flex items-center justify-center py-28">
              <LoadingSpinner />
            </div>
          )}
        </main>
      )}
    </ModuleWrapper>
  );
};

export default Index;

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
