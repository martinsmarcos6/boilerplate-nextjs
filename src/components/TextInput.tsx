import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: 'outlined' | 'filled';
  label?: string;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (
  { error = false, variant = 'filled', label, ...rest }: TextInputProps,
  ref
) => {
  const errorStyle = error && 'border-red-500';
  const variantStyle = {
    outlined: 'border border-neutral',
    filled: 'bg-neutral',
  };

  return (
    <div className="relative flex items-center">
      <div className="w-full max-w-[630px]">
        {label && (
          <label
            htmlFor={rest.id}
            className="text-base text-neutral font-raleway"
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
