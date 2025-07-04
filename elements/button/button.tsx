import { twMerge } from 'tailwind-merge';
import React from 'react';
//import Spinner from '@/app/reusable/spinner';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'upload'
  | 'loading'
  | 'tertiary'
  | 'tertiary-line'
  | 'ghost'
  | 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    'px-4 py-2 font-semibold rounded focus:outline-none transition duration-200';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-primary-500 text-white supports-[hover:hover]:hover:shadow-semibold active:border-[1px] active:border-primary-700 rounded-xl';
      break;
    case 'secondary':
      variantClasses =
        'bg-white text-gray-900 border-[1px] border-gray-200 rounded-xl';
      break;
    case 'disabled':
      variantClasses = 'bg-gray-300 text-gray-500 rounded-xl';
      break;
    case 'upload':
      variantClasses =
        'bg-primary-100 text-blue-sky-dark rounded-xl hover:shadow-sky active:shadow-inner-sky';
      break;
    case 'loading':
      variantClasses =
        'bg-primary-600 rounded-xl flex items-center justify-center px-8';
      break;
    case 'tertiary':
      variantClasses = 'bg-red-600 text-white rounded-xl';
      break;
    case 'tertiary-line':
      variantClasses = 'bg-white border border-red-600 text-red-600 rounded-xl';
      break;
    case 'light':
      variantClasses = 'bg-primary-50 text-primary-600 rounded-xl font-medium';
      break;
    default:
      variantClasses = 'focus:ring-0';
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        disabled ? 'opacity-50' : '',
        baseClasses,
        variantClasses,
        className ?? '',
      )}
      {...props}>
      {/* {variant === 'loading' ? <Spinner /> : children} */}
      {children}
    </button>
  );
};

export default Button;
