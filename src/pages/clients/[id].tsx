import React from 'react';

import { Breadcrumb } from '../../components/Breadcrumb';
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
    </ModuleWrapper>
  );
};

export default ClientDetailsPage;
