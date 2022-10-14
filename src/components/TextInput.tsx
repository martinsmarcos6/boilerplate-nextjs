import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ ...rest }: TextInputProps, ref) => {
  return (
    <div className="relative flex items-center w-[630px]">
      <div className="w-full max-w-[630px]">
        <input
          ref={ref}
          className="input bg-neutral rounded-[30px] w-full placeholder-secondary-text text-secondary-text"
          {...rest}
        />
      </div>
      <AiOutlineSearch className="text-xl text-primary-text absolute right-4" />
    </div>
  );
};

export const TextInput = forwardRef(TextInputBase);
