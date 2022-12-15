import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { LetsEncryptIcon } from '../assets';

export const AuthFormFooter = () => {
  return (
    <div className="flex items-center justify-between mt-24">
      <div>
        <LetsEncryptIcon />
      </div>
      <div className="flex items-center gap-2 text-neutral cursor-pointer">
        <FaWhatsapp className="text-xl" />
        <span className="text-sm font-raleway font-medium">
          Precisa de ajuda?
        </span>
      </div>
    </div>
  );
};
