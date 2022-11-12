import React from 'react';

import { Breadcrumb } from '../../components/Breadcrumb';
import { Button } from '../../components/Button';
import { UserInfoCard } from '../../components/UserInfoCard';
import ModuleWrapper from '../../layouts/ModuleWrapper';

const ClientDetailsPage = () => {
  return (
    <ModuleWrapper>
      <main>
        <Breadcrumb
          items={[
            { title: 'Clientes', href: '/clients' },
            { title: 'Detalhes', href: '/clients/1' },
          ]}
          className="mb-4"
        />
        <div className="flex items-center gap-24">
          <UserInfoCard
            user={{ name: 'Rafael Vanderlei Cavalcante' }}
            avatarUrl=""
            size="md"
          />
          <Button variant="outlined">Acessar Analytics</Button>
        </div>
      </main>
    </ModuleWrapper>
  );
};

export default ClientDetailsPage;
