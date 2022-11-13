import React, { useState } from 'react';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

interface ModuleWrapperProps {
  children?: React.ReactNode;
}

const ModuleWrapper = ({ children }: ModuleWrapperProps) => {
  const [headerActiveBlur, setHeaderActiveBlur] = useState(false);

  return (
    <>
      <Header setHeaderActiveBlur={setHeaderActiveBlur} />
      <div
        className={`flex gap-24 transition-all duration-500 ${
          headerActiveBlur ? 'opacity-20' : 'opacity-100'
        }`}
      >
        <SideMenu />
        {children}
      </div>
    </>
  );
};

export default ModuleWrapper;
