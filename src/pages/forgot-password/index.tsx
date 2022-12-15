import React, { ReactNode, useState } from 'react';

import { Breadcrumb } from '../../components/Breadcrumb';
import { SignUpWrapper } from '../../layouts/SignupWrapper';
import { PasswordRecoverFirstStep } from './steps/first-step';
import { PasswordRecoverSecondStep } from './steps/second-step';

const ForgotPasswordPage = () => {
  const [forgotPasswordStep, setForgotPasswordStep] = useState(1);
  const steps: { [key: number]: ReactNode } = {
    1: (
      <PasswordRecoverFirstStep setForgotPasswordStep={setForgotPasswordStep} />
    ),
    2: <PasswordRecoverSecondStep />,
  };

  return (
    <SignUpWrapper>
      <div className="flex flex-col">
        <Breadcrumb
          items={[{ title: 'Login', href: '/login' }]}
          className="mb-24 text-neutral"
        />
        {steps[forgotPasswordStep]}
      </div>
    </SignUpWrapper>
  );
};

export default ForgotPasswordPage;
