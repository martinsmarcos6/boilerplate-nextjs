import React from 'react';

import { AiOutlineLoading } from 'react-icons/ai';

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <AiOutlineLoading
      className={`animate-spin text-primary text-6xl ${className}`}
    />
  );
};
