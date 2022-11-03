import React from 'react';

import { RiArrowDownSFill } from 'react-icons/ri';

import GeneralTable from './GeneralTable';

export interface ICustomerOverview {
  columns: IColumns[];
  data: IDataClients[];
}

export interface IDataClients {
  client: string;
  balance: number;
  return: string;
  alocation: string;
  strategy: string;
}

export interface IColumns {
  label: string;
  param: string;
}

const CustomersOverview = ({ columns, data }: ICustomerOverview) => {
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
      <GeneralTable columns={columns} data={data} />
    </div>
  );
};

export default CustomersOverview;
