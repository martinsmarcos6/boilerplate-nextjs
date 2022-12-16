import React, { useState } from 'react';

import { Breadcrumb } from '../components/Breadcrumb';
import { Checkbox } from '../components/Checkbox';
import { TextInput } from '../components/TextInput';
import ModuleWrapper from '../layouts/ModuleWrapper';

const Certifications = ({ title }: any) => {
  const [checked, setChecked] = useState(false);
  const handleCheckCertification = () => {
    setChecked(!checked);
  };
  const style = {
    checked:
      'bg-neutral rounded-[5px] py-4 px-5 flex gap-2 items-center border-primary border-[1px] cursor-pointer',
    unchecked:
      'bg-neutral rounded-[5px] py-4 px-5 flex gap-2 items-center cursor-pointer',
  };

  return (
    <div
      className={style[checked ? 'checked' : 'unchecked']}
      onClick={handleCheckCertification}
    >
      <Checkbox checked={checked} />
      <p className="text-primary-text font-montserrat text-xs">{title}</p>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <ModuleWrapper>
      <main className="w-full pb-24">
        <Breadcrumb
          items={[{ title: 'Meus dados', href: '/dashboard' }]}
          className="text-secondary-text mb-10"
        />
        <h1 className="text-primary-text text-3xl font-raleway font-semibold mb-8">
          Meus dados
        </h1>
        <div className="flex gap-14">
          <div className="w-full">
            <p className="text-primary-text font-montserrat text-xs mb-3">
              INFORMAÇÕES PESSOAIS:
            </p>
            <TextInput placeholder="Nome completo" />
            <div className="flex mt-5 gap-5 mb-14">
              <TextInput placeholder="E-mail" className="flex-[0.7]" />
              <TextInput placeholder="Telefone" className="flex-[0.3]" />
            </div>
            <p className="text-primary-text font-montserrat text-xs mb-3">
              ENDEREÇO:
            </p>
            <TextInput placeholder="Endereço" />
            <div className="flex gap-5 mt-5">
              <TextInput placeholder="Número" className="flex-[0.4]" />
              <TextInput placeholder="Complemento" className="flex-1" />
            </div>
            <div className="flex gap-5 mt-5">
              <TextInput placeholder="Bairro" className="flex-1" />
              <TextInput placeholder="CEP" className="flex-[0.7]" />
            </div>
            <div className="flex gap-5 mt-5">
              <TextInput placeholder="Cidade" className="flex-1" />
              <TextInput placeholder="Estado" className="flex-[0.7]" />
            </div>
          </div>
          <div className="bg-neutral w-[1px]" />
          <aside className="max-w-[430px] h-full w-full">
            <p className="text-primary-text font-montserrat text-xs mb-3">
              PERFIL LINKEDIN:
            </p>
            <TextInput placeholder="URL do perfil" className="mb-14" />
            <p className="text-primary-text font-montserrat text-xs mb-3">
              SELECIONE SUAS CERTIFICAÇÕES:
            </p>
            <div className="flex flex-col gap-5 mb-14">
              <Certifications title="CEA" />
              <Certifications title="CFP" />
              <Certifications title="CNPI" />
              <Certifications title="CGA" />
            </div>
            <p className="text-primary-text font-montserrat text-xs mb-3">
              RESUMO PROFISSIONAL:
            </p>
            <TextInput />
          </aside>
        </div>
      </main>
    </ModuleWrapper>
  );
};

export default ProfilePage;
