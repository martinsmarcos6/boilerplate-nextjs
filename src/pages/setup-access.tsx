import React, { ReactNode, useState } from 'react';

import { SetupPasswordFirstStep } from '../components/setup-access';
import { SetupPasswordSecondStep } from '../components/setup-access/second-step';
import { SignUpWrapper } from '../layouts/SignupWrapper';

const SetupAccessPage = () => {
  const [setupPasswordStep, setSetupPasswordStep] = useState(1);
  const steps: { [key: number]: ReactNode } = {
    1: <SetupPasswordFirstStep setSetupPasswordStep={setSetupPasswordStep} />,
    2: <SetupPasswordSecondStep />,
  };
  return (
    <SignUpWrapper>
      <div className="flex flex-col relative">{steps[setupPasswordStep]}</div>
    </SignUpWrapper>
  );
};

export default SetupAccessPage;
