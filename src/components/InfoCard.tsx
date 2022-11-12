import React from 'react';

import { currencyFormatter } from '../utils/formatters/currency-formatter';

interface InfoCardProps {
  title: string;
  value: number;
  fluctuation?: number;
  theme?: 'primary' | 'secondary';
}

export const InfoCard = ({
  title,
  value,
  fluctuation,
  theme = 'secondary',
}: InfoCardProps) => {
  const color = {
    primary: {
      container: 'bg-primary-light',
      title: 'text-primary-text',
      fluctuation: 'bg-primary text-primary-text',
    },
    secondary: {
      container: 'bg-neutral',
      title: 'text-secondary-text',
      fluctuation: 'bg-neutral-light text-primary-text',
    },
  };
  return (
    <div
      className={`w-64 h-44 rounded-[5px] flex flex-col py-7 pl-7 pr-5 ${color[theme].container}`}
    >
      <span
        className={`mb-2 font-raleway font-semibold text-sm ${color[theme].title}`}
      >
        {title}
      </span>
      <span className="text-primary-text font-montserrat font-semibold text-[24px] mb-3">
        {currencyFormatter(value)}
      </span>
      {fluctuation && (
        <div
          className={`${color[theme].fluctuation} min-w-[40px] p-[10px] rounded-[5px] w-max flex items-center justify-center`}
        >
          <span className="text-sm font-normal font-montserrat">{`${
            fluctuation >= 0 ? '+ ' : '- '
          }${Math.abs(fluctuation)}%`}</span>
        </div>
      )}
    </div>
  );
};
