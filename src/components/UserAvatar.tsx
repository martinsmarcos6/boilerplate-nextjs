import React from 'react';

import { HiUser } from 'react-icons/hi';

interface UserAvatarProps {
  avatarUrl?: string;
}

export const UserAvatar = ({ avatarUrl }: UserAvatarProps) => {
  return (
    <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center relative overflow-hidden">
      {!avatarUrl ? (
        <>
          <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center p-2 absolute border-4 border-neutral z-10" />
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
