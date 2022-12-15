import { AuthFormFooter } from '../../../components/AuthFormFooter';
import { Button } from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';

interface PasswordRecoverStepProps {
  setForgotPasswordStep: React.Dispatch<React.SetStateAction<number>>;
}

export const PasswordRecoverThirdStep = ({
  setForgotPasswordStep,
}: PasswordRecoverStepProps) => {
  const handleRecoverPassword = (e: any) => {
    e.preventDefault();
    setForgotPasswordStep(4);
  };

  return (
    <form className="max-w-[408px] w-full" onSubmit={handleRecoverPassword}>
      <div className="mb-9">
        <h1 className="font-raleway font-semibold text-3xl text-neutral">
          Defina sua nova senha
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Sua nova senha precisa ser diferente da senha anterior.
        </p>
      </div>
      <TextInput variant="outlined" label="E-mail" className="mb-6" />
      <TextInput variant="outlined" label="Confirme sua senha" />
      <Button type="submit" className="w-full mt-7" loading={false}>
        Definir senha
      </Button>
      <AuthFormFooter />
    </form>
  );
};
