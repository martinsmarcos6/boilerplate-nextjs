import React from 'react';

import { Footer } from '../../components/Footer';
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

const ClientsPage = () => {
  return (
    <div className="relative min-h-screen">
      <ModuleWrapper>
        <InfoSummary />
      </ModuleWrapper>
      <Footer />
    </div>
  );
};

export default ClientsPage;
