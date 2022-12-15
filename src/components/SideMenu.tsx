import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBarChart } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';

const SideMenu = () => {
  const router = useRouter();
  const [selectedMenuItem, setSelectedMenuItem] = useState(router.pathname);
  const navigateTo = (path: string) => {
    router.push(path);
    setSelectedMenuItem(path);
  };

  const loadMenuItemStyle = (path: string, exact?: boolean) => {
    if (exact) {
      return `${
        selectedMenuItem === path ? 'text-primary' : 'text-secondary-text'
      }`;
    }
    return `${
      selectedMenuItem.includes(path) ? 'text-primary' : 'text-secondary-text'
    }`;
  };
  return (
    <aside className="max-w-max">
      <ul className="flex flex-col gap-10">
        <li
          className={`${loadMenuItemStyle('/dashboard', true)} cursor-pointer`}
          onClick={() => {
            navigateTo('/dashboard');
          }}
        >
          <div className="flex flex-col gap-2 items-center">
            <AiOutlineHome className="text-3xl" />
            <span className="whitespace-nowrap">Visão Geral</span>
          </div>
        </li>
        <li
          className={`${loadMenuItemStyle('/clients')} cursor-pointer`}
          onClick={() => {
            navigateTo('/clients');
          }}
        >
          <div className="flex flex-col gap-2 items-center">
            <BsPerson className="text-3xl" />
            <span className="whitespace-nowrap">Clientes</span>
          </div>
        </li>
        <li className={`${loadMenuItemStyle('/analytics')} cursor-pointer`}>
          <div className="flex flex-col gap-2 items-center">
            <MdOutlineInsertChartOutlined className="text-3xl" />
            <span className="whitespace-nowrap">Analytics</span>
          </div>
        </li>
        <li className={`${loadMenuItemStyle('/indicadores')} cursor-pointer`}>
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
