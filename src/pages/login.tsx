import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { Logo } from '../assets';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { TextInput } from '../components/TextInput';
import { traadApi } from '../config/api';

const login = async ({ email, password }: any) => {
  return traadApi.post('/auth/login', { email, password });
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const { isLoading, mutate } = useMutation(login, {
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleLogin = (loginData: any) => {
    mutate(loginData);
  };

  return (
    <div className="py-12">
      <Logo className="mx-auto mb-[6rem]" />
      <form
        className="flex flex-col gap-4 max-w-[500px] mx-auto"
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextInput placeholder="Login" {...register('email')} />
        <TextInput
          placeholder="Senha"
          type="password"
          {...register('password')}
        />
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
