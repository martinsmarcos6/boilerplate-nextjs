import React from 'react';

import { RiArrowDownSFill } from 'react-icons/ri';

import GeneralTable from './GeneralTable';

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

const data: IDataClients[] = [
  {
    client: 'MT',
    balance: 20000000.0,
    return: '2.94%',
    alocation: 'RF, RV, FII',
    strategy: 'AVALIAR',
  },
  {
    client: 'PL',
    balance: 8893000.0,
    return: '-3.23%',
    alocation: 'RF, INT',
    strategy: 'AVALIAR',
  },
  {
    client: 'RL',
    balance: 7234000.0,
    return: '-2.84%',
    alocation: 'RV, FII',
    strategy: 'AVALIAR',
  },
  {
    client: 'AF',
    balance: 4876000.0,
    return: '-3.94%',
    alocation: 'RF, RV, FII',
    strategy: 'AVALIAR',
  },
  {
    client: 'PA',
    balance: 3209000.0,
    return: '2.91%',
    alocation: 'RF, INT',
    strategy: 'AVALIAR',
  },
  {
    client: 'BO',
    balance: 2306000.0,
    return: '2.88%',
    alocation: 'RV, FII',
    strategy: 'AVALIAR',
  },
  {
    client: 'CS',
    balance: 1879000.0,
    return: '3.27%',
    alocation: 'RF, RV, FII',
    strategy: 'AVALIAR',
  },
];

const columns: IColumns[] = [
  {
    label: 'Cliente',
    param: 'client',
  },
  {
    label: 'Saldo Atual',
    param: 'balance',
  },
  {
    label: 'Retorno%',
    param: 'return',
  },
  {
    label: 'Alocação',
    param: 'alocation',
  },
  {
    label: 'Estratégia',
    param: 'strategy',
  },
];

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
      <GeneralTable columns={columns} data={data} />
    </div>
  );
};

export default CustomersOverview;
