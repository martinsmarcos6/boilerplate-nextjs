import React from 'react';

import { IoIosResize } from 'react-icons/io';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

const data = [
  {
    name: 'JUN',
    uv: 35,
    clientes: 12,
  },
  {
    name: 'JUL',
    uv: 37,
    clientes: 14,
  },
  {
    name: 'AGO',
    uv: 37,
    clientes: 20,
  },
  {
    name: 'SET',
    uv: 39,
    clientes: 22,
  },
  {
    name: 'OUT',
    uv: 40,
    clientes: 24,
  },
  {
    name: 'NOV',
    uv: 41,
    clientes: 27,
  },
  {
    name: 'DEZ',
    uv: 43,
    clientes: 30,
  },
];

const DashboardChart = () => {
  return (
    <div className="bg-neutral h-max rounded-md py-7 pr-10 flex flex-col relative">
      <IoIosResize className="text-secondary-text text-2xl absolute right-2 top-2 cursor-pointer" />
      <div className="flex justify-between pl-10 mb-8">
        <div className="flex flex-col">
          <span className="text-primary-text text-3xl font-semibold">
            R$ 208.462.980,88
          </span>
          <span className="text-secondary-text font-[raleway] font-semibold text-sm">
            AUC total
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-primary text-3xl font-semibold">28</span>
          <span className="text-secondary-text font-[raleway] font-semibold text-sm">
            Clientes
          </span>
        </div>
      </div>
      <LineChart
        width={500}
        height={150}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Line type="linear" dataKey="clientes" stroke="#D2A877" />
        <Line type="linear" dataKey="uv" stroke="#ffffff" />
      </LineChart>
    </div>
  );
};

export default DashboardChart;
