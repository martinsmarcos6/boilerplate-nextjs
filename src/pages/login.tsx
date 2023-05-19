import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';
import { useMutation } from 'react-query';

import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { PasswordInput } from '../components/PasswordInput';
import { TextInput } from '../components/TextInput';
import { useAuth } from '../contexts/AuthContext';
import { guestGuard } from '../guards/guest.guard';
import { SignUpWrapper } from '../layouts/SignupWrapper';
import { loginValidationSchema } from '../validation/schemas';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });
  const router = useRouter();
  const { signIn } = useAuth();

  const {
    isLoading,
    mutateAsync: login,
    isError,
  } = useMutation(signIn, {
    onSuccess: async () => {
      await router.push('/sso');
    },
  });

  const handleLogin = async (loginData: any) => {
    await login({
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    });
  };
  return (
    <SignUpWrapper>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="max-w-[408px] w-full"
      >
        <h1 className="font-raleway font-semibold text-3xl mb-14 text-neutral">
          Bem-vindo de volta.
        </h1>
        <TextInput
          variant="outlined"
          label="Email"
          className="mb-6"
          error={isError || !!errors.email}
          {...register('email')}
        />
        <PasswordInput
          variant="outlined"
          label="Senha"
          error={isError || !!errors.password}
          {...register('password')}
        />
        {isError && (
          <div className="flex gap-2 items-center justify-end mt-1">
            <span className="font-montserrat text-[9px]">
              Senha incorreta. Tente novamente ou recupere a sua senha.
            </span>
            <FiAlertCircle className="text-primary text-[10px]" />
          </div>
        )}
        <div className="flex justify-between items-center mt-3 whitespace-nowrap mb-11">
          <div className="flex items-center">
            <Checkbox theme="dark" />
            <span className="text-neutral font-raleway font-medium text-sm">
              Mantenha-me conectado
            </span>
          </div>
          <Link href="/forgot-password" passHref>
            <a className="text-neutral underline font-raleway text-sm font-semibold">
              Esqueci minha senha
            </a>
          </Link>
        </div>
        <Button type="submit" className="w-full" loading={isLoading}>
          Entrar
        </Button>
      </form>
    </SignUpWrapper>
  );
};

export default LoginPage;

export const getServerSideProps = guestGuard(async () => {
  return {
    props: {},
  };
});
