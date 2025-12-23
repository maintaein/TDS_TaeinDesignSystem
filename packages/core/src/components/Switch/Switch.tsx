import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import * as styles from './Switch.css';

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  /** 레이블 텍스트 */
  label: string;
  /** Switch size */
  size?: 'sm' | 'md' | 'lg';
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 도움말 텍스트 */
  helperText?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      size = 'md',
      error = false,
      errorMessage,
      helperText,
      required = false,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const switchId = useId();
    const helperId = useId();

    // 개발 환경에서 label 검증
    if (process.env.NODE_ENV === 'development') {
      if (!label) {
        console.error(
          'Switch: label prop은 필수입니다. 접근성을 위해 label을 제공하세요.'
        );
      }
    }

    // helperText 또는 errorMessage 표시
    const showHelper = !error && helperText;
    const showError = error && errorMessage;

    return (
      <div className={styles.wrapper}>
        {/* Switch Container */}
        <label htmlFor={switchId} className={styles.switchLabel}>
          {/* Label Text */}
          <span className={styles.labelText}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>

          {/* Switch Track */}
          <div
            className={clsx(
              styles.switchContainer,
              styles.size[size],
              error && styles.error
            )}
          >
            <input
              ref={ref}
              id={switchId}
              type="checkbox"
              role="switch"
              required={required}
              disabled={disabled}
              aria-checked={rest.checked || false}
              aria-invalid={error}
              aria-disabled={disabled}
              aria-describedby={showHelper || showError ? helperId : undefined}
              className={clsx(
                styles.switchInput,
                error && styles.error,
                className
              )}
              {...rest}
            />
            <span className={styles.thumbSize[size]} />
          </div>
        </label>

        {/* Helper Text or Error Message */}
        {showHelper && (
          <span id={helperId} className={styles.helperText}>
            {helperText}
          </span>
        )}
        {showError && (
          <span id={helperId} className={styles.errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
