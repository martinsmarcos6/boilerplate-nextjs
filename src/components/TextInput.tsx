import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ error = false, ...rest }: TextInputProps, ref) => {
  const errorStyle = error && 'border-red-500';
  return (
    <div className="relative flex items-center">
      <div className="w-full max-w-[630px]">
        <input
          ref={ref}
          className={`${errorStyle} input bg-neutral rounded-[5px] w-full placeholder-secondary-text text-secondary-text`}
          {...rest}
        />
      </div>
    </div>
  );
};

export const TextInput = forwardRef(TextInputBase);
