import React from 'react';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

interface ModuleWrapperProps {
  children?: React.ReactNode;
}

const ModuleWrapper = ({ children }: ModuleWrapperProps) => {
  return (
    <>
      <Header />
      <div className="flex gap-24">
        <SideMenu />
        {children}
      </div>
    </>
  );
};

export default ModuleWrapper;
