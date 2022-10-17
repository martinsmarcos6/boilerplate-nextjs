import React from 'react';

import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

interface IGeneralTableProps {
  columns: any[];
  data: any;
}

const GeneralTable = ({ columns, data }: IGeneralTableProps) => {
  const identifyData = (dataRow: any, column: any) => {
    if (!Number.isNaN(+dataRow[column.param]))
      return dataRow[column.param].toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL',
      });
    if (
      dataRow[column.param].includes('%') &&
      dataRow[column.param].includes('-')
    ) {
      return (
        <div className="flex items-center">
          <GoTriangleDown className="mr-[10px]" />
          {dataRow[column.param]}
        </div>
      );
    }
    if (dataRow[column.param].includes('%'))
      return (
        <div className="flex items-center">
          <GoTriangleUp className="mr-[10px]" />
          {dataRow[column.param]}
        </div>
      );
    return dataRow[column.param];
  };

  const identifyCss = (dataRow: any, column: any) => {
    if (Number.isNaN(+dataRow[column.param])) {
      if (
        dataRow[column.param].includes('%') &&
        dataRow[column.param].includes('-')
      ) {
        return 'text-error';
      }
      if (dataRow[column.param].includes('%')) return 'text-success';
    }
    return 'text-primary-text';
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {columns?.map((column, i) => {
              return (
                <th
                  key={i}
                  className="bg-neutral text-secondary-text font-[Raleway]"
                >
                  {column?.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((dataRow: any, i: number) => {
            return (
              <tr key={i}>
                {columns?.map((column, index) => {
                  return (
                    <td
                      key={index}
                      className={`bg-neutral border-base-bg ${identifyCss(
                        dataRow,
                        column
                      )}`}
                    >
                      {identifyData(dataRow, column)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralTable;
