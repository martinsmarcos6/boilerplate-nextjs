import React from 'react';

import { UserInfoCard } from './UserInfoCard';

interface SearchBarDropdownProps {
  isFocused: boolean;
}

export const SearchBarDropdown = ({ isFocused }: SearchBarDropdownProps) => {
  return (
    <div
      className={`absolute z-50  overflow-hidden ${
        isFocused ? 'h-max px-5 pb-5' : 'h-0'
      } bg-neutral mt-5 w-[630px] rounded-[5px]`}
    >
      <div className="text-primary-text flex items-center border-b-2 border-base-bg mb-4">
        <div className="px-4 pb-1 pt-3 flex border-b-[6px] border-base-bg cursor-pointer">
          <span>Clientes</span>
        </div>
        <div className="px-4 pb-1 pt-3 border-b-[6px] border-neutral cursor-pointer">
          <span>Indicadores</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <UserInfoCard user={{ name: 'Rafael Cavalcante' }} size="sm" />
        <UserInfoCard user={{ name: 'Marcos Martins' }} size="sm" />
        <UserInfoCard user={{ name: 'Lincoln Araujo' }} size="sm" />
        <UserInfoCard user={{ name: 'Igor Fanticheli' }} size="sm" />
      </div>
    </div>
  );
};
