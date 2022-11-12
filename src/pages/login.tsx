import React from 'react';

import Link from 'next/link';

import { Logo } from '../assets';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { TextInput } from '../components/TextInput';

const LoginPage = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="py-12">
      <Logo className="mx-auto mb-[6rem]" />
      <form
        className="flex flex-col gap-4 max-w-[500px] mx-auto"
        onSubmit={handleLogin}
      >
        <TextInput placeholder="Login" />
        <TextInput placeholder="Senha" type="password" />
        <div className="flex justify-between items-center">
          <div className="text-primary-text flex gap-2 items-center">
            <Checkbox label="Lembre-me" />
          </div>
          <Link href="#" passHref>
            <a className="text-primary underline">Esqueci minha senha?</a>
          </Link>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
