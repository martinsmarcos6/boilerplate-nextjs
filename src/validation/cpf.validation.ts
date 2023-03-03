/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export const validateCpf = (cpf?: string): boolean => {
  if (!cpf) return true;
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11) return false;
  if (cpf === '00000000000') return false;
  let sum = 0;
  let remainder;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10), 10)) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11), 10)) return false;
  return true;
};
