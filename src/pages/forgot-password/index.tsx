import React, { ReactNode, useState } from 'react';

import { Breadcrumb } from '../../components/Breadcrumb';
import { SignUpWrapper } from '../../layouts/SignupWrapper';
import { PasswordRecoverFirstStep } from './steps/first-step';
import { PasswordRecoverFourthStep } from './steps/fourth-step';
import { PasswordRecoverSecondStep } from './steps/second-step';
import { PasswordRecoverThirdStep } from './steps/third-step';

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
