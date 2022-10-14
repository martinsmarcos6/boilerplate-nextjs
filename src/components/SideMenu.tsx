import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { BiBarChart } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';

const SideMenu = () => {
  return (
    <aside className="max-w-max">
      <ul className="flex flex-col gap-10">
        <li className="text-primary cursor-pointer">
          <div className="flex flex-col gap-2 items-center">
            <AiOutlineHome className="text-3xl" />
            <span className="whitespace-nowrap">Visão Geral</span>
          </div>
        </li>
        <li className="text-secondary-text cursor-pointer">
          <div className="flex flex-col gap-2 items-center">
            <BsPerson className="text-3xl" />
            <span className="whitespace-nowrap">Clientes</span>
          </div>
        </li>
        <li className="text-secondary-text cursor-pointer">
          <div className="flex flex-col gap-2 items-center">
            <MdOutlineInsertChartOutlined className="text-3xl" />
            <span className="whitespace-nowrap">Analytics</span>
          </div>
        </li>
        <li className="text-secondary-text cursor-pointer">
          <div className="flex flex-col gap-2 items-center">
            <BiBarChart className="text-3xl" />
            <span className="whitespace-nowrap">Indicadores</span>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
