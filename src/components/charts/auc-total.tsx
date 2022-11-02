import React, { useState } from 'react';

import { FiMinimize2 } from 'react-icons/fi';
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

import { ChartData } from '../../interfaces/chart';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  y1Name?: string;
  y2Name: string;
}

const CustomizedDot = () => {
  return null;
};

const CustomToolTip = ({ active, payload, y2Name }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-xs font-semibold flex flex-col py-1 px-2">
        <span className="text-base-bg">
          {payload[1].value?.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })}
        </span>
        <span className="text-primary">
          {payload[0].value} {y2Name}
        </span>
      </div>
    );
  }
  return null;
};

interface ChartProps {
  data: ChartData;
  leftName: string;
  rightName: string;
  expansive?: boolean;
}

const DashboardChart = ({
  data,
  leftName,
  rightName,
  expansive = false,
}: ChartProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const itemsX: any = [];
  data.map((item) => itemsX.push(item.x));
  return (
    <div
      className={`bg-neutral h-max rounded-md py-7 pr-10 flex flex-col transition-all duration-300 ${
        isFullscreen ? 'fixed top-0 w-full h-full left-0 z-50' : 'relative'
      }`}
    >
      {expansive &&
        (isFullscreen ? (
          <FiMinimize2
            className="text-secondary-text text-2xl absolute right-2 top-2 cursor-pointer"
            onClick={() => setIsFullscreen(false)}
          />
        ) : (
          <IoIosResize
            className="text-secondary-text text-2xl absolute right-2 top-2 cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          />
        ))}
      <div className="flex justify-between pl-10 mb-8">
        <div className="flex flex-col">
          <span className="text-primary-text text-3xl font-semibold">
            {data[data.length - 1].y1.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            })}
          </span>
          <span className="text-secondary-text font-[raleway] font-semibold text-sm">
            {leftName}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-primary text-3xl font-semibold">
            {data[data.length - 1].y2}
          </span>
          <span className="text-secondary-text font-[raleway] font-semibold text-sm">
            {rightName}
          </span>
        </div>
      </div>
      <div className={`${isFullscreen ? 'h-full' : 'h-52'}`}>
        <ResponsiveContainer className="w-full h-full">
          <LineChart
            width={500}
            height={150}
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="x"
              axisLine={false}
              tickLine={false}
              ticks={itemsX.splice(1)}
            />
            <YAxis yAxisId="1" hide />
            <YAxis yAxisId="2" hide />
            <Tooltip
              content={<CustomToolTip y1Name={leftName} y2Name={rightName} />}
              cursor={{
                strokeWidth: 1,
                stroke: '#E5E5E5',
                strokeDasharray: '3 3',
              }}
            />
            <Line
              yAxisId="2"
              type="linear"
              dataKey="y2"
              stroke="#D2A877"
              strokeWidth={2}
              dot={<CustomizedDot />}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Line
              yAxisId="1"
              type="linear"
              dataKey="y1"
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
