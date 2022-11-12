import React, { useEffect, useState } from 'react';

import { AiOutlineSetting } from 'react-icons/ai';

import { Breadcrumb } from '../../components/Breadcrumb';
import { Button } from '../../components/Button';
import DashboardChart from '../../components/charts/auc-total';
import { InfoCard } from '../../components/InfoCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import NoticesAndPendingWidget from '../../components/tables/NoticesAndPendingWidget';
import { UserInfoCard } from '../../components/UserInfoCard';
import ModuleWrapper from '../../layouts/ModuleWrapper';
import { ChartServices } from '../../services';
import { ChartResponse } from '../../services/contracts/charts';
import { NoticesAndPendingWidgetResponse } from '../../services/contracts/tables';
import { TableServices } from '../../services/table-services';

const ClientDetailsPage = () => {
  const [notifications, setNotifications] =
    useState<NoticesAndPendingWidgetResponse>();
  const [aucData, setAucData] = useState<ChartResponse>();
  const tableServices = new TableServices();
  const chartServices = new ChartServices();

  const loadNoticesAndPendingWidgetData = async () => {
    try {
      const response = await tableServices.loadNoticesAndPendingWidgetData();
      setNotifications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadChartAuc = async () => {
    try {
      const response = await chartServices.loadChartAUCData();
      setAucData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNoticesAndPendingWidgetData();
    loadChartAuc();
  }, []);

  return (
    <ModuleWrapper>
      <main className="w-full pb-20">
        <Breadcrumb
          items={[
            { title: 'Clientes', href: '/clients' },
            { title: 'Detalhes', href: '/clients/1' },
          ]}
          className="mb-4"
        />
        <div className="flex justify-between items-end mb-5">
          <div className="flex items-end gap-24">
            <UserInfoCard
              user={{ name: 'Rafael Vanderlei Cavalcante' }}
              avatarUrl=""
              size="md"
            />
            <Button variant="outlined">Acessar Analytics</Button>
          </div>
          <div className="text-secondary-text flex flex-col items-end gap-2">
            <AiOutlineSetting className="text-2xl cursor-pointer" />
            <span className="font-montserrat font-normal text-sm">
              Cliente desde 19/09/2021
            </span>
          </div>
        </div>
        <section className="grid grid-cols-2 grid-rows-1 gap-5">
          <div className="flex justify-between mb-5">
            <InfoCard title="Saldo Total" value={500000} />
            <InfoCard
              title="Rendimento Total"
              value={123000}
              fluctuation={-27.2}
            />
          </div>
          <div className="flex gap-5 justify-between">
            <InfoCard
              title="Rendimento Mês"
              value={300200}
              fluctuation={24.6}
            />
            <InfoCard
              title="Saldo Total"
              value={5000000}
              theme="primary"
              fluctuation={4.2}
            />
          </div>
          {aucData ? (
            <DashboardChart
              data={aucData.data}
              leftName={aucData.y1_name}
              rightName={''}
              showMainValue={false}
              expansive
            />
          ) : (
            <div className="flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          {notifications ? (
            <NoticesAndPendingWidget data={notifications} />
          ) : (
            <div className="flex items-center justify-center py-28">
              <LoadingSpinner />
            </div>
          )}
        </section>
      </main>
    </ModuleWrapper>
  );
};

export default ClientDetailsPage;
