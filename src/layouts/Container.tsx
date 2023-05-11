import React from 'react';

import { NextComponentType, NextPageContext } from 'next';

interface ContainerProps {
  children:
    | React.ReactNode
    | JSX.Element
    | NextComponentType<NextPageContext, any, any>;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-screen min-h-screen bg-base-bg">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
