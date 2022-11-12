export const currencyFormatter = (input: number) => {
  return input.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  });
};
