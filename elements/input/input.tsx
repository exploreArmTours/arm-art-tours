import { ChangeEvent, FC, InputHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text, TextStyle } from '../typography/text';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  id: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  suffixIconClassName?: string;
  errorClassName?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  isRequired?: boolean;
  warning?: string;
  warningClassName?: string;
  maxLength?: number;
}

const TextField: FC<TextFieldProps> = ({
  label,
  placeholder = '',
  value,
  onChange,
  error,
  id,
  className = '',
  inputClassName = '',
  labelClassName = '',
  suffixIconClassName = '',
  errorClassName = '',
  prefixIcon,
  suffixIcon,
  isRequired,
  warning,
  warningClassName,
  maxLength,
  ...otherProps
}) => {
  return (
    <div className={twMerge('flex flex-col gap-1', className)}>
      {label && (
        <label htmlFor={id} className='flex items-center gap-1'>
          <Text
            style={TextStyle.BodySmMedium}
            value={label}
            className={twMerge('text-gray-600', labelClassName)}
          />
          {isRequired ? <span className='text-red-600'>*</span> : null}
        </label>
      )}
      <div className='relative flex items-center'>
        {prefixIcon && <div className='absolute left-4'>{prefixIcon}</div>}
        <input
          type='text'
          id={id}
          value={value}
          maxLength={maxLength && maxLength}
          onChange={onChange}
          placeholder={placeholder}
          className={twMerge(
            'w-full shrink-0 rounded-xl border-[1px] py-[14.2px] text-base/[25.6px] font-medium text-gray-900 placeholder:text-base/[25.6px] placeholder:font-normal placeholder:text-gray-400 focus:outline-none disabled:text-gray-500',
            prefixIcon ? 'pl-[52px]' : 'pl-3',
            suffixIcon ? 'pr-[52px]' : 'pr-3',
            inputClassName,
            error
              ? 'border-red-600'
              : warning
              ? 'border-orange-600'
              : 'border-gray-200',
          )}
          {...otherProps}
        />
        {suffixIcon && (
          <div
            className={twMerge(
              'absolute right-4 flex items-center justify-center',
              suffixIconClassName,
            )}>
            {suffixIcon}
          </div>
        )}
      </div>
      {(error || warning) && (
        <div
          className={error ? errorClassName : warning ? warningClassName : ''}>
          <Text
            style={TextStyle.BodySmallRegular}
            value={(error || warning) ?? ''}
            className={
              error ? 'text-red-600' : warning ? 'text-orange-600' : ''
            }
          />
        </div>
      )}
    </div>
  );
};

export default TextField;
