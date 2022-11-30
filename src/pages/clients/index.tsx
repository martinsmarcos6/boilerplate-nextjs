import React from 'react';

import { useRouter } from 'next/router';
import { GoArrowRight } from 'react-icons/go';
import { RiArrowUpSFill } from 'react-icons/ri';

import { Footer } from '../../components/Footer';
import { UserInfoCard } from '../../components/UserInfoCard';
import ModuleWrapper from '../../layouts/ModuleWrapper';
import { currencyFormatter } from '../../utils/formatters/currency-formatter';

const Divider = () => {
  return <div className="h-10 w-[1px] bg-neutral" />;
};

const SummaryItem = ({ title, amount }: any) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="w-10 h-10 rounded-full bg-base-bg flex items-center justify-center">
        <span className="text-primary-text text-xs">icon</span>
      </div>
      <div className="flex flex-col">
        <span className="text-base-bg font-raleway font-semibold text-sm">
          {title}
        </span>
        <span className="text-primary-text font-montserrat font-semibold text-xl">
          {amount}
        </span>
      </div>
    </div>
  );
};

const InfoSummary = () => {
  return (
    <div className="bg-primary w-full h-28 flex items-center justify-between px-8 rounded-md">
      <SummaryItem title="Clientes" amount="28" />
      <Divider />
      <SummaryItem title="AUC Total" amount={currencyFormatter(208462980.88)} />
      <Divider />
      <SummaryItem
        title="Receita Mensal"
        amount={currencyFormatter(52111.74)}
      />
      <Divider />
      <SummaryItem
        title="Receita Média por cliente"
        amount={currencyFormatter(890.24)}
      />
    </div>
  );
};

const UserCard = () => {
  const router = useRouter();
  return (
    <div className="flex items-center bg-neutral mt-4 rounded-md px-8">
      <div className="text-primary-text font-montserrat text-sm font-normal w-full rounded-md grid grid-cols-6 h-20 items-center gap-2">
        <span className="rounded-l-md">
          <UserInfoCard
            user={{ name: 'Rafael' }}
            size="sm"
            accentColor="dark"
          />
        </span>
        <span>{currencyFormatter(553977989)}</span>
        <span>
          <div className="flex items-center justify-center gap-2">
            <RiArrowUpSFill />
            24,60%
          </div>
        </span>
        <span className="text-primary text-center">
          {currencyFormatter(2077.42)}
        </span>
        <span className="text-primary text-center">0,45%</span>
        <span className="text-primary text-center">5</span>
      </div>
      <div className="w-8 h-8 bg-secondary-text rounded-full cursor-pointer flex items-center justify-center">
        <GoArrowRight
          className="text-neutral text-xl"
          onClick={() => router.push('/clients/1')}
        />
      </div>
    </div>
  );
};

const ClientsPage = () => {
  return (
    <div className="relative min-h-screen">
      <ModuleWrapper>
        <main className="w-full">
          <InfoSummary />
          <section className="mt-14">
            <div className="flex items-center px-8">
              <div className="text-secondary-text w-full grid grid-cols-6 font-semibold items-center font-raleway text-sm gap-2">
                <span>Cliente</span>
                <span>Saldo Total</span>
                <span className="text-center">Rendimento %</span>
                <span className="text-center">Receita Mês</span>
                <span className="text-center">Taxa Consultoria</span>
                <span className="text-center">Avisos e Pendências</span>
              </div>
              <span className="w-8" />
            </div>
            <div className="">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </section>
        </main>
      </ModuleWrapper>
      <Footer />
    </div>
  );
};

export default ClientsPage;
