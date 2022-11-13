import React, { useState } from 'react';

import { Logo } from '../assets';
import NotificationBadge from './NotificationBadge';
import { SearchBar } from './SearchBar';
import UserDropdown from './UserDropdown';

interface HeaderProps {
  setHeaderActiveBlur: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setHeaderActiveBlur }: HeaderProps) => {
  const [showSearchBarDropdown, setShowSearchBarDropdown] = useState(false);

  const handleSearchBarChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.value.length >= 2) {
      setShowSearchBarDropdown(true);
      setHeaderActiveBlur(true);
    } else {
      setShowSearchBarDropdown(false);
      setHeaderActiveBlur(false);
    }
  };

  return (
    <header className="flex items-center h-40 justify-between">
      <Logo />
      <div className="flex gap-5 items-center">
        <SearchBar
          placeholder="Encontre um cliente ou indicador"
          onChange={handleSearchBarChange}
          showSearchBarDropdown={showSearchBarDropdown}
        />
        <NotificationBadge />
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
