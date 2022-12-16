import React, {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  variant?: 'outlined' | 'filled';
  label?: string;
  className?: string;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    error = false,
    variant = 'filled',
    label,
    className,
    ...rest
  }: TextAreaProps,
  ref
) => {
  const errorStyle = error && 'border-red-500';
  const variantStyle = {
    outlined: 'border border-neutral',
    filled: 'bg-neutral',
  };

  return (
    <div className="relative flex items-center">
      <div className={`${className} w-full max-w-[630px]`}>
        {label && (
          <label
            htmlFor={rest.id}
            className="text-base text-neutral font-raleway font-semibold mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`${errorStyle} ${variantStyle[variant]} p-3 input rounded-[5px] w-full h-full resize-none placeholder-secondary-text text-secondary-text`}
          {...rest}
        />
      </div>
    </div>
  );
};

export const TextArea = forwardRef(TextInputBase);
