import React from 'react';

import { Breadcrumb } from '../../components/Breadcrumb';
import { UserInfoCard } from '../../components/UserInfoCard';
import ModuleWrapper from '../../layouts/ModuleWrapper';

const ClientDetailsPage = () => {
  return (
    <ModuleWrapper>
      <Breadcrumb
        items={[
          { title: 'Clientes', href: '/clients' },
          { title: 'Detalhes', href: '/clients/1' },
        ]}
      />
      <UserInfoCard
        user={{ name: 'Rafael Vanderlei Marques' }}
        avatarUrl=""
        size="md"
      />
    </ModuleWrapper>
  );
};

export default ClientDetailsPage;
