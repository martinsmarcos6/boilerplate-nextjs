import React from 'react';

import { AiOutlineSetting } from 'react-icons/ai';

import { Breadcrumb } from '../../components/Breadcrumb';
import { Button } from '../../components/Button';
import { InfoCard } from '../../components/InfoCard';
import { UserInfoCard } from '../../components/UserInfoCard';
import ModuleWrapper from '../../layouts/ModuleWrapper';

const ClientDetailsPage = () => {
  return (
    <ModuleWrapper>
      <main className="w-full">
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
        <section className="flex justify-between">
          <InfoCard title="Saldo Total" value={500000} />
          <InfoCard title="Rendimento Total" value={123000} />
          <InfoCard title="Rendimento Mês" value={300200} fluctuation={24.6} />
          <InfoCard
            title="Saldo Total"
            value={5000000}
            theme="primary"
            fluctuation={4.2}
          />
        </section>
      </main>
    </ModuleWrapper>
  );
};

export default ClientDetailsPage;
