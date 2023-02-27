import React from 'react';

import { LoadingSpinner } from '../components/LoadingSpinner';

const AppLoading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoadingSpinner className="text-[6rem]" />
    </div>
  );
};

export default AppLoading;
