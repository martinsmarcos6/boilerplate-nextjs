import React from 'react';

import { UserAvatar } from './UserAvatar';

interface UserInfoCardProps {
  user: {
    name: string;
  };
  avatarUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  accentColor?: 'dark' | 'neutral';
}

export const UserInfoCard = ({
  user: { name },
  avatarUrl,
  size = 'md',
  accentColor = 'neutral',
}: UserInfoCardProps) => {
  const nameArr = name.split(' ');
  const userName = `${nameArr[0]}${` ${nameArr[nameArr.length - 1] ?? ''}`}`;
  const abbreviatedName = `${name.split(' ')[0][0]}${
    nameArr[nameArr.length - 1][0] ?? ''
  }`;
  const styles = {
    sm: {
      abbr: 'uppercase text-sm font-semibold font-raleway',
      name: 'font-normal font-montserrat text-sm',
    },
    lg: {
      abbr: 'uppercase text-[30px] font-semibold font-raleway',
      name: 'font-normal font-montserrat text-sm',
    },
    md: {
      abbr: 'uppercase text-[30px] font-semibold font-raleway',
      name: 'font-normal font-montserrat text-sm',
    },
  };
  return (
    <div className="flex gap-4 items-center h-max">
      <UserAvatar avatarUrl={avatarUrl} accentColor={accentColor} />
      <div className="flex flex-col text-primary-text">
        <span className={styles[size].abbr}>{abbreviatedName}</span>
        <span className={styles[size].name}>{userName}</span>
      </div>
    </div>
  );
};
