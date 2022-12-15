import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { Logo } from '../assets';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { TextInput } from '../components/TextInput';
import { traadApi } from '../config/api';

const login = async ({ email, password }: any) => {
  return traadApi.post('/auth/login', { email, password });
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  const { isLoading, mutate, isError } = useMutation(login, {
    onSuccess: (data) => {
      setCookie(undefined, 'traad.token', JSON.stringify(data.data), {
        maxAge: 60 * 60 * 24 * 30, // 30 days,
        path: '/',
      });
      router.push('/dashboard');
    },
  });

  const handleLogin = (loginData: any) => {
    mutate(loginData);
  };

  return (
    <div className="py-12 px-3">
      <Logo className="mx-auto mb-[6rem]" />
      <form
        className="flex flex-col gap-4 max-w-[500px] mx-auto"
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextInput
          placeholder="Login"
          error={isError || !!errors.email}
          {...register('email')}
        />
        {errors.email && (
          <div className="text-left text-sm mt-[-16px] text-red-500">
            {errors.email.message}
          </div>
        )}
        <TextInput
          placeholder="Senha"
          type="password"
          error={isError || !!errors.password}
          {...register('password')}
        />
        {errors.password && (
          <div className="text-left text-sm mt-[-16px] text-red-500">
            {errors.password.message}
          </div>
        )}
        {isError && (
          <div className="text-center text-red-500 bg-red-100 p-4 rounded-md">
            Usuário ou senha inválidos
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="text-primary-text flex gap-2 items-center">
            <Checkbox label="Lembre-me" />
          </div>
          <Link href="#" passHref>
            <a className="text-primary underline">Esqueci minha senha?</a>
          </Link>
        </div>
        <div className="flex justify-end">
          <Button type="submit" loading={isLoading}>
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
