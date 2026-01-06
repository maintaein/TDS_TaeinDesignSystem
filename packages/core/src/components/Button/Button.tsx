import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';
import {
  buttonBase,
  sizeVariants,
  fillVariants,
  weakVariants,
  fullWidth,
} from './Button.css';
import { LoadingSpinner } from '../LoadingSpinner';

type ButtonVariant = 'primary' | 'dark' | 'danger' | 'light';
type ButtonStyle = 'fill' | 'weak';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  buttonStyle?: ButtonStyle;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      buttonStyle = 'fill',
      size = 'md',
      fullWidth: isFullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const variantClass =
      buttonStyle === 'fill' ? fillVariants[variant] : weakVariants[variant];

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={clsx(
          buttonBase,
          sizeVariants[size],
          variantClass,
          isFullWidth && fullWidth,
          className
        )}
        {...props}
      >
        {loading && (
          <LoadingSpinner
            type="dots"
            size="sm"
            color="currentColor"
            aria-label="로딩 중"
          />
        )}
        {!loading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {!loading && <span>{children}</span>}
        {!loading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
