import React, {
  Dispatch,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: 'outlined' | 'filled';
  label?: string;
  className?: string;
}

const hiddenPassword = (
  hidden: boolean,
  setHidden: Dispatch<React.SetStateAction<boolean>>
) => {
  const eyeIconStyle =
    'absolute text-xl text-neutral cursor-pointer right-4 top-6 bottom-0 my-auto z-50';
  const handleHidePassword = () => {
    setHidden(!hidden);
  };
  return hidden ? (
    <FaRegEyeSlash className={eyeIconStyle} onClick={handleHidePassword} />
  ) : (
    <FaRegEye className={eyeIconStyle} onClick={handleHidePassword} />
  );
};

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
  const [hidden, setHidden] = useState(true);
  const errorStyle = error && 'border-red-500';
  const variantStyle = {
    outlined: 'border border-neutral',
    filled: 'bg-neutral',
  };

  return (
    <div className={`${className} relative flex items-center`}>
      <div className="w-full max-w-[630px] relative">
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
          type={hidden ? 'password' : 'text'}
          {...rest}
        />
        {hiddenPassword(hidden, setHidden)}
      </div>
    </div>
  );
};

export const PasswordInput = forwardRef(TextInputBase);
