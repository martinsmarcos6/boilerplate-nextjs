import { AuthFormFooter } from '../../../components/AuthFormFooter';
import { Button } from '../../../components/Button';

export const PasswordRecoverSecondStep = () => {
  return (
    <div className="max-w-[408px] w-full">
      <div className="mb-9">
        <h1 className="font-raleway font-semibold text-3xl">
          Confira sua caixa de e-mail
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Enviamos um link de redefinição de senha para o seu e-mail.
        </p>
      </div>
      <Button type="submit" className="w-full mb-16">
        Abrir aplicativo de e-mail
      </Button>
      <AuthFormFooter />
    </div>
  );
};
