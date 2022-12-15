import { AuthFormFooter } from '../../../components/AuthFormFooter';
import { Button } from '../../../components/Button';

interface PasswordRecoverStepProps {
  setForgotPasswordStep: React.Dispatch<React.SetStateAction<number>>;
}

export const PasswordRecoverSecondStep = ({
  setForgotPasswordStep,
}: PasswordRecoverStepProps) => {
  const handleOpenEmail = () => {
    setForgotPasswordStep(3);
  };

  return (
    <div className="max-w-[408px] w-full">
      <div className="mb-9">
        <h1 className="font-raleway font-semibold text-3xl text-neutral">
          Confira sua caixa de e-mail
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Enviamos um link de redefinição de senha para o seu e-mail.
        </p>
      </div>
      <Button type="submit" className="w-full mb-16" onClick={handleOpenEmail}>
        Abrir aplicativo de e-mail
      </Button>
      <AuthFormFooter />
    </div>
  );
};
