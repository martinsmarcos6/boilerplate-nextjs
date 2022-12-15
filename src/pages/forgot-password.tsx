import React from 'react';

import { AuthFormFooter } from '../components/AuthFormFooter';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { SignUpWrapper } from '../layouts/SignupWrapper';

const ForgotPasswordPage = () => {
  return (
    <SignUpWrapper>
      <div className="flex flex-col">
        <Breadcrumb
          items={[{ title: 'Login', href: '/login' }]}
          className="mb-24 text-neutral"
        />
        <form className="max-w-[408px] w-full">
          <div className="mb-9">
            <h1 className="font-raleway font-semibold text-3xl">
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
          <AuthFormFooter />
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default ForgotPasswordPage;
