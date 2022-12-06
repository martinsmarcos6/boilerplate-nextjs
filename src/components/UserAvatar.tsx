import React from 'react';

import { HiUser } from 'react-icons/hi';

interface UserAvatarProps {
  avatarUrl?: string;
  accentColor?: 'dark' | 'neutral';
}

export const UserAvatar = ({
  avatarUrl,
  accentColor = 'neutral',
}: UserAvatarProps) => {
  return (
    <div
      className={`w-12 h-12 ${
        accentColor === 'dark' ? 'bg-base-bg' : 'bg-neutral'
      } rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0`}
    >
      {!avatarUrl ? (
        <>
          <div
            className={`w-12 h-12 bg-transparent rounded-full flex items-center justify-center p-2 absolute border-4 ${
              accentColor === 'dark' ? 'border-base-bg' : 'border-neutral'
            } z-10`}
          />
          <HiUser className="text-secondary-text text-6xl rounded-full p-[1px]" />
        </>
      ) : (
        <div>
          <img
            src={avatarUrl}
            alt="Avatar do usuário"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};
