import React from 'react';

import { Logo } from '../assets';
import NotificationBadge from './NotificationBadge';
import { TextInput } from './TextInput';
import UserDropdown from './UserDropdown';

const Header = () => {
  return (
    <header className="flex items-center h-40 justify-between">
      <Logo />
      <div className="flex gap-5 items-center">
        <TextInput placeholder="Encontre um cliente ou indicador" />
        <NotificationBadge />
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
