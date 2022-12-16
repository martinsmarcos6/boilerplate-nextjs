import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: 'outlined' | 'filled';
  label?: string;
  className?: string;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (
  {
    error = false,
    variant = 'filled',
    label,
    className,
    ...rest
  }: TextInputProps,
  ref
) => {
  const errorStyle = error && 'border-red-500';
  const variantStyle = {
    outlined: 'border border-neutral',
    filled: 'bg-neutral',
  };

  return (
    <div className={`${className} relative flex items-center`}>
      <div className="w-full">
        {label && (
          <label
            htmlFor={rest.id}
            className="text-base text-neutral font-raleway font-semibold mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`${errorStyle} ${variantStyle[variant]} input rounded-[5px] w-full placeholder-secondary-text text-secondary-text`}
          {...rest}
        />
      </div>
    </div>
  );
};

export const TextInput = forwardRef(TextInputBase);
