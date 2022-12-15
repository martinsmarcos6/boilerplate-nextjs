import React from 'react';

import { destroyCookie } from 'nookies';
import { BiUserCircle } from 'react-icons/bi';
import { RiArrowDownSFill } from 'react-icons/ri';

const UserDropdown = () => {
  const handleLogout = () => {
    destroyCookie(undefined, 'traad.token');
    window.location.href = '/login';
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="flex items-center gap-3 text-primary-text cursor-pointer"
      >
        <BiUserCircle className="text-4xl" />
        <span className="font-semibold text-base font-[Raleway]">Rafael</span>
        <RiArrowDownSFill className="text-2xl" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content px-5 py-2 shadow bg-neutral w-32 mt-5 text-sm whitespace-nowrap flex flex-col gap-3 text-tertiary-text items-end rounded-[5px]"
      >
        <li className="cursor-pointer">
          <a>Meus dados</a>
        </li>
        <li className="cursor-pointer">
          <a>Trocar senha</a>
        </li>
        <li className="cursor-pointer" onClick={() => handleLogout()}>
          <a>Sair</a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
