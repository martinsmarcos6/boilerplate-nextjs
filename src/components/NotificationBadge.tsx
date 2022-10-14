import React from 'react';

import { CgBell } from 'react-icons/cg';

const NotificationBadge = () => {
  return (
    <div className="indicator">
      <span className="indicator-item indicator-start badge bg-primary">2</span>
      <CgBell className="text-primary-text text-4xl cursor-pointer" />
    </div>
  );
};

export default NotificationBadge;
