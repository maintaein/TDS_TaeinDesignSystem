import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { FormField } from '../FormField';
import * as styles from './TextField.css';

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  /** 레이블 텍스트 */
  label: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 전체 너비 사용 */
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      type = 'text',
      size = 'md',
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      required = false,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <FormField
        label={label}
        helperText={helperText}
        error={error}
        errorMessage={errorMessage}
        required={required}
        fullWidth={fullWidth}
      >
        {({ inputId, helperId, hasHelper, isError }) => (
          <div
            className={clsx(
              styles.inputContainer,
              styles.size[size],
              isError && styles.error
            )}
          >
            <input
              ref={ref}
              id={inputId}
              type={type}
              required={required}
              disabled={disabled}
              aria-invalid={isError}
              aria-disabled={disabled}
              aria-describedby={hasHelper ? helperId : undefined}
              className={clsx(
                styles.input,
                styles.size[size],
                isError && styles.error,
                className
              )}
              {...rest}
            />
          </div>
        )}
      </FormField>
    );
  }
);

TextField.displayName = 'TextField';
