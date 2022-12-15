import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { LetsEncryptIcon } from '../assets';

interface AuthFormFooterProps {
  className?: string;
}

export const AuthFormFooter = ({ className }: AuthFormFooterProps) => {
  return (
    <div className={`${className} flex items-center justify-between mt-24`}>
      <div>
        <LetsEncryptIcon />
      </div>
      <div className="flex items-center gap-2 text-neutral cursor-pointer">
        <FaWhatsapp className="text-xl" />
        <span className="text-sm fonPt-raleway font-medium">
          Precisa de ajuda?
        </span>
      </div>
    </div>
  );
};
