import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ ...rest }: TextInputProps, ref) => {
  return (
    <div className="relative flex items-center">
      <div className="w-full max-w-[630px]">
        <input
          ref={ref}
          className="input bg-neutral rounded-[5px] w-full placeholder-secondary-text text-secondary-text"
          {...rest}
        />
      </div>
    </div>
  );
};

export const TextInput = forwardRef(TextInputBase);
