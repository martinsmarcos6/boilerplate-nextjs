import Link from 'next/link';
import { BsCheck2Circle } from 'react-icons/bs';

import { Button } from '../Button';

export const SetupPasswordSecondStep = () => {
  return (
    <div className="max-w-[408px] w-full">
      <div className="mb-9">
        <div className="flex items-center justify-center mb-4">
          <BsCheck2Circle className="text-center text-[150px] text-primary" />
        </div>
        <h1 className="font-raleway font-semibold text-3xl text-neutral">
          Senha cadastrada!
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Sua senha foi cadastrada com sucesso. Clique abaixo para entrar.
        </p>
      </div>
      <Link href={'/login'} passHref>
        <Button type="submit" className="w-full">
          Continuar
        </Button>
      </Link>
    </div>
  );
};
