import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { Button } from '../Button';
import { PasswordInput } from '../PasswordInput';

interface FormProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  isLoading: boolean;
}

export const SetupPasswordFirstStep = ({
  register,
  errors,
  isLoading,
}: FormProps) => {
  return (
    <div className="max-w-[408px] w-full">
      <div className="mb-9">
        <h1 className="font-raleway font-semibold text-3xl text-neutral">
          Cadastro de senha
        </h1>
        <p className="font-raleway font-medium text-sm text-secondary-text">
          Por favor, cadastre sua senha de acesso abaixo.
        </p>
      </div>
      <PasswordInput
        variant="outlined"
        label="Senha"
        error={!!errors.password}
        {...register('password')}
      />
      {errors.password?.message && (
        <p className="text-sm text-error mb-1">{errors.password?.message}</p>
      )}
      <PasswordInput
        variant="outlined"
        label="Confirme sua senha"
        error={!!errors.password_confirmation}
        {...register('password_confirmation')}
      />
      {errors.password_confirmation?.message && (
        <p className="text-sm text-error mb-1">
          {errors.password_confirmation?.message}
        </p>
      )}
      <Button type="submit" className="w-full mt-7" loading={isLoading}>
        Entrar
      </Button>
    </div>
  );
};
