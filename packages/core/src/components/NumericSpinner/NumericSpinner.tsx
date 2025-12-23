import { forwardRef, useId, useCallback, type ChangeEvent } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import * as styles from './NumericSpinner.css';

export interface NumericSpinnerProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'readOnly'
> {
  /** 레이블 텍스트 */
  label: string;
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 증감 단위 */
  step?: number;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 전체 너비 사용 */
  fullWidth?: boolean;
}

export const NumericSpinner = forwardRef<HTMLInputElement, NumericSpinnerProps>(
  (
    {
      label,
      size = 'md',
      min,
      max,
      step = 1,
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      required = false,
      disabled = false,
      value,
      onChange,
      className,
      ...rest
    },
    ref
  ) => {
    const inputId = useId();
    const helperId = useId();

    // 개발 환경에서 label 검증
    if (process.env.NODE_ENV === 'development') {
      if (!label) {
        console.error(
          'NumericSpinner: label prop은 필수입니다. 접근성을 위해 label을 제공하세요.'
        );
      }
    }

    // 현재 값 가져오기
    const currentValue = value !== undefined ? Number(value) : undefined;

    // 증가 버튼 클릭 핸들러
    const handleIncrement = useCallback(() => {
      if (disabled) return;

      const current = currentValue ?? 0;
      const newValue = current + step;

      if (max !== undefined && newValue > max) return;

      if (onChange) {
        const event = {
          target: { value: String(newValue) },
        } as ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    }, [currentValue, step, max, disabled, onChange]);

    // 감소 버튼 클릭 핸들러
    const handleDecrement = useCallback(() => {
      if (disabled) return;

      const current = currentValue ?? 0;
      const newValue = current - step;

      if (min !== undefined && newValue < min) return;

      if (onChange) {
        const event = {
          target: { value: String(newValue) },
        } as ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    }, [currentValue, step, min, disabled, onChange]);

    // 증가 버튼 비활성화 여부
    const isIncrementDisabled =
      disabled ||
      (max !== undefined && currentValue !== undefined && currentValue >= max);

    // 감소 버튼 비활성화 여부
    const isDecrementDisabled =
      disabled ||
      (min !== undefined && currentValue !== undefined && currentValue <= min);

    // helperText 또는 errorMessage 표시
    const showHelper = !error && helperText;
    const showError = error && errorMessage;

    return (
      <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
        {/* Label */}
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>

        {/* Input Container */}
        <div
          className={clsx(
            styles.inputContainer,
            styles.size[size],
            error && styles.error
          )}
        >
          {/* Decrement Button */}
          <button
            type="button"
            aria-label="값 감소"
            disabled={isDecrementDisabled}
            onClick={handleDecrement}
            className={clsx(
              styles.button,
              styles.decrementButton,
              styles.buttonSize[size]
            )}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Number Input */}
          <input
            ref={ref}
            id={inputId}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            readOnly
            aria-invalid={error}
            aria-disabled={disabled}
            aria-describedby={showHelper || showError ? helperId : undefined}
            className={clsx(
              styles.input,
              styles.size[size],
              error && styles.error,
              className
            )}
            {...rest}
          />

          {/* Increment Button */}
          <button
            type="button"
            aria-label="값 증가"
            disabled={isIncrementDisabled}
            onClick={handleIncrement}
            className={clsx(
              styles.button,
              styles.incrementButton,
              styles.buttonSize[size]
            )}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 4V12M4 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

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

NumericSpinner.displayName = 'NumericSpinner';
