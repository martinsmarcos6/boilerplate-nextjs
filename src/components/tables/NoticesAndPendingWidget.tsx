import React from 'react';

import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';

const NoticesAndPendingWidget = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-primary-text text-lg font-[Raleway] font-semibold">
          Avisos e Pendências
        </span>
        <div className="text-secondary-text flex cursor-pointer font-medium text-sm items-center">
          <span>Todos os tipos</span>
          <RiArrowDownSFill className="text-xl" />
        </div>
      </div>
      <div className="">
        {[
          'saldo em conta corrente',
          'pendências de pagamento',
          'pendências de dados para o MOP',
          'suitability desatualizado',
          'cadastros desatualizados',
          'saldo em conta corrente',
        ].map((item, index) => (
          <div
            className="flex items-center border-y-[1px] border-y-neutral py-5 justify-between"
            key={index}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-neutral" />
              <span className="text-primary-text font-semibold">
                {1 + Math.floor(Math.random() * 10)} clientes com{' '}
                <span className="text-primary">{item}</span>
              </span>
            </div>
            <MdOutlineArrowRightAlt className="text-secondary-text text-2xl cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesAndPendingWidget;
