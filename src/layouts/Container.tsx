import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-screen h-screen bg-base-bg">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
