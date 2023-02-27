import { Button } from '../Button';
import { PasswordInput } from '../PasswordInput';

interface SetupAccessStepProps {
  setSetupPasswordStep: React.Dispatch<React.SetStateAction<number>>;
}

export const SetupPasswordFirstStep = ({
  setSetupPasswordStep,
}: SetupAccessStepProps) => {
  const handleRecoverPassword = (e: any) => {
    e.preventDefault();
    setSetupPasswordStep(2);
  };

  return (
    <form className="max-w-[408px] w-full" onSubmit={handleRecoverPassword}>
      <div className="mb-9">
        <h1 className="font-raleway font-semibold text-3xl text-neutral">
          Cadastro de senha de acesso
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Por favor, cadastre sua senha de acesso abaixo.
        </p>
      </div>
      <PasswordInput variant="outlined" label="Senha" className="mb-6" />
      <PasswordInput variant="outlined" label="Confirme sua senha" />
      <Button type="submit" className="w-full mt-7" loading={false}>
        Entrar
      </Button>
    </form>
  );
};
