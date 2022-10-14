import React from 'react';

import { RiArrowDownSFill } from 'react-icons/ri';

const CustomersOverview = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-primary-text text-lg font-[Raleway] font-semibold">
          Visão geral clientes
        </span>
        <div className="text-secondary-text flex cursor-pointer font-medium text-sm items-center">
          <span>Todos os status</span>
          <RiArrowDownSFill className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default CustomersOverview;
