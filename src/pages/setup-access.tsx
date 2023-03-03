import React, { ReactNode, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSidePropsContext } from 'next';
import { useForm } from 'react-hook-form';

import { SetupPasswordFirstStep } from '../components/setup-access';
import { SetupPasswordSecondStep } from '../components/setup-access/second-step';
import { traadApi } from '../config/api';
import { SignUpWrapper } from '../layouts/SignupWrapper';
import { createPasswordValidationSchema } from '../validation/schemas/create-password.validation';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;
  if (!query.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      token: query.token,
    },
  };
};

const SetupAccessPage = ({ token }: any) => {
  const [setupPasswordStep, setSetupPasswordStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createPasswordValidationSchema),
  });
  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await traadApi.post(`/auth/create-password`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSetupPasswordStep(2);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const steps: { [key: number]: ReactNode } = {
    1: (
      <SetupPasswordFirstStep
        register={register}
        errors={errors}
        isLoading={isLoading}
      />
    ),
    2: <SetupPasswordSecondStep />,
  };

  return (
    <SignUpWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col relative">{steps[setupPasswordStep]}</div>
      </form>
    </SignUpWrapper>
  );
};

export default SetupAccessPage;
