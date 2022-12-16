import React, { ReactNode, useState } from 'react';

import { Breadcrumb } from '../components/Breadcrumb';
import {
  PasswordRecoverFirstStep,
  PasswordRecoverFourthStep,
  PasswordRecoverSecondStep,
  PasswordRecoverThirdStep,
} from '../components/forgot-password';
import { SignUpWrapper } from '../layouts/SignupWrapper';

const ForgotPasswordPage = () => {
  const [forgotPasswordStep, setForgotPasswordStep] = useState(1);
  const steps: { [key: number]: ReactNode } = {
    1: (
      <PasswordRecoverFirstStep setForgotPasswordStep={setForgotPasswordStep} />
    ),
    2: (
      <PasswordRecoverSecondStep
        setForgotPasswordStep={setForgotPasswordStep}
      />
    ),
    3: (
      <PasswordRecoverThirdStep setForgotPasswordStep={setForgotPasswordStep} />
    ),
    4: <PasswordRecoverFourthStep />,
  };

  return (
    <SignUpWrapper>
      <Breadcrumb
        items={[{ title: 'Login', href: '/login' }]}
        className="mb-24 text-neutral absolute top-[36px] left-[128px]"
      />
      <div className="flex flex-col relative">{steps[forgotPasswordStep]}</div>
    </SignUpWrapper>
  );
};

export default ForgotPasswordPage;
