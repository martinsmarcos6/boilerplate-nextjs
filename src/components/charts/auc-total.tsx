import React from 'react';

import { IoIosResize } from 'react-icons/io';
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
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
        <span className="text-base-bg">R$ 148.640.700,88</span>
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
            <Tooltip content={<CustomToolTip />} />
            <Line
              type="linear"
              dataKey="clientes"
              stroke="#D2A877"
              strokeWidth={2}
              dot={<CustomizedDot />}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Line
              type="linear"
              dataKey="uv"
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
