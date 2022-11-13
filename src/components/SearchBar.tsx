import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import { SearchBarDropdown } from './SearchBarDropdown';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showSearchBarDropdown: boolean;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ showSearchBarDropdown, ...rest }: TextInputProps, ref) => {
  return (
    <div className="relative">
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
      <SearchBarDropdown isFocused={showSearchBarDropdown} />
    </div>
  );
};

export const SearchBar = forwardRef(TextInputBase);
