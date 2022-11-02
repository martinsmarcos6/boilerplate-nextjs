import React from 'react';

import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';

import { NoticesAndPendingWidgetResponse } from '../../services/contracts/tables';

interface NoticesAndPendingWidgetProps {
  data: NoticesAndPendingWidgetResponse;
}

const NoticesAndPendingWidget = ({ data }: NoticesAndPendingWidgetProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-primary-text text-lg font-[Raleway] font-semibold">
          Avisos e Pendências
        </span>
        <div className="text-secondary-text flex cursor-pointer font-medium text-sm items-center">
          <span>Todos os tipos</span>
          <RiArrowDownSFill className="text-xl" />
        </div>
      </div>
      <div className="">
        {data.notifications.map((item, index) => (
          <div
            className="flex items-center border-y-[1px] border-y-neutral py-5 justify-between"
            key={index}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-neutral" />
              <span className="text-primary-text font-semibold">
                {item.value} clientes com{' '}
                <span className="text-primary">{item.description}</span>
              </span>
            </div>
            <MdOutlineArrowRightAlt className="text-secondary-text text-2xl cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesAndPendingWidget;
