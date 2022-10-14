import React from 'react';

import { IoIosResize } from 'react-icons/io';
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
  ResponsiveContainer,
} from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent';

const data = [
  {
    name: 'JUN',
    auc: 3500000,
    clientes: 12,
  },
  {
    name: 'JUL',
    auc: 3700000,
    clientes: 14,
  },
  {
    name: 'AGO',
    auc: 3700000,
    clientes: 20,
  },
  {
    name: 'SET',
    auc: 3900000,
    clientes: 22,
  },
  {
    name: 'OUT',
    auc: 4000000,
    clientes: 24,
  },
  {
    name: 'NOV',
    auc: 4100000,
    clientes: 27,
  },
  {
    name: 'DEZ',
    auc: 4300000,
    clientes: 30,
  },
];

const CustomizedDot = () => {
  return null;
};

const CustomToolTip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-xs font-semibold flex flex-col py-1 px-2">
        <span className="text-base-bg">
          {payload[1].value?.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })}
        </span>
        <span className="text-primary">{payload[0].value} clientes</span>
      </div>
    );
  }
  return null;
};

const DashboardChart = () => {
  const itemsX: any = [];
  data.map((item) => itemsX.push(item.name));
  return (
    <div className="bg-neutral h-max rounded-md py-7 pr-10 flex flex-col relative">
      <IoIosResize className="text-secondary-text text-2xl absolute right-2 top-2 cursor-pointer" />
      <div className="flex justify-between pl-10 mb-8">
        <div className="flex flex-col">
          <span className="text-primary-text text-3xl font-semibold">
            {data[data.length - 1].auc.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            })}
          </span>
          <span className="text-secondary-text font-[raleway] font-semibold text-sm">
            AUC total
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-primary text-3xl font-semibold">
            {data[data.length - 1].clientes}
          </span>
          <span className="text-secondary-text font-[raleway] font-semibold text-sm">
            Clientes
          </span>
        </div>
      </div>
      <div className="h-52">
        <ResponsiveContainer className="w-full h-full">
          <LineChart
            width={500}
            height={150}
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              ticks={itemsX.splice(1)}
            />
            <YAxis yAxisId="auac" hide />
            <YAxis yAxisId="clients" hide />
            <Tooltip
              content={<CustomToolTip />}
              cursor={{
                strokeWidth: 1,
                stroke: '#E5E5E5',
                strokeDasharray: '3 3',
              }}
            />
            <Line
              yAxisId="clients"
              type="linear"
              dataKey="clientes"
              stroke="#D2A877"
              strokeWidth={2}
              dot={<CustomizedDot />}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Line
              yAxisId="auac"
              type="linear"
              dataKey="auc"
              stroke="#ffffff"
              strokeWidth={2}
              dot={<CustomizedDot />}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
