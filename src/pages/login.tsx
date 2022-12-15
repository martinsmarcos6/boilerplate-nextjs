import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useForm } from 'react-hook-form';
import { FaWhatsapp } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { LetsEncryptIcon, Logo } from '../assets';
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
    <main className="fixed left-0 top-0 bg-white w-full h-full flex">
      <aside className="bg-[url('/assets/fractal.svg')] flex-1 bg-no-repeat flex items-center justify-center">
        <Logo />
      </aside>
      <aside className="flex-1 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="max-w-[408px] w-full"
        >
          <h1 className="font-raleway font-semibold text-3xl mb-14">
            Bem-vindo de volta.
          </h1>
          <TextInput
            variant="outlined"
            label="Email"
            className="mb-6"
            error={isError || !!errors.email}
            {...register('email')}
          />
          <TextInput
            variant="outlined"
            label="Senha"
            type="password"
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
            <Link href="#" passHref>
              <a className="text-neutral underline font-raleway text-sm font-semibold">
                Esqueci minha senha
              </a>
            </Link>
          </div>
          <Button type="submit" className="w-full" loading={isLoading}>
            Entrar
          </Button>

          <div className="flex items-center justify-between mt-24">
            <div>
              <LetsEncryptIcon />
            </div>
            <div className="flex items-center gap-2 text-neutral cursor-pointer">
              <FaWhatsapp className="text-xl" />
              <span className="text-sm font-raleway font-medium">
                Precisa de ajuda?
              </span>
            </div>
          </div>
        </form>
      </aside>
    </main>
  );
};

export default LoginPage;
