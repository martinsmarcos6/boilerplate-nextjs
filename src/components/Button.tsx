import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'outlined';
  loading?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'solid',
  loading = false,
  className,
  ...rest
}: ButtonProps) => {
  const styles = {
    solid: 'bg-primary text-primary-text hover:bg-primary',
    outlined: 'bg-transparent border-primary text-primary',
    loading: `${loading && 'loading'}`,
  };

  const styleArr = [styles[variant], styles.loading];

  return (
    <button
      className={`btn ${styleArr.join(' ')} normal-case ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
