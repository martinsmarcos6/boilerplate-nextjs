import { Button } from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';

interface PasswordRecoverStepProps {
  setForgotPasswordStep: React.Dispatch<React.SetStateAction<number>>;
}

export const PasswordRecoverFirstStep = ({
  setForgotPasswordStep,
}: PasswordRecoverStepProps) => {
  const handleRecoverPassword = (e: any) => {
    e.preventDefault();
    setForgotPasswordStep(2);
  };

  return (
    <form className="max-w-[408px] w-full" onSubmit={handleRecoverPassword}>
      <div className="mb-9">
        <h1 className="font-raleway font-semibold text-3xl text-neutral">
          Esqueceu sua senha?
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Preencha o e-mail cadastrado para redefinir sua senha.
        </p>
      </div>
      <TextInput variant="outlined" label="E-mail" />
      <Button type="submit" className="w-full mt-7" loading={false}>
        Entrar
      </Button>
    </form>
  );
};
