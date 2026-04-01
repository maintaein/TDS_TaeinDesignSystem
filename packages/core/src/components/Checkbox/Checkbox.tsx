import { forwardRef, useId, useEffect, useRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import * as styles from './Checkbox.css';

/** 체크박스 입력 컴포넌트. 체크/미체크/부분선택(indeterminate) 상태 지원 */
export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  /** 체크박스 레이블 텍스트 */
  label: string;
  /** 체크박스 크기 @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** 에러 상태 표시 @default false */
  error?: boolean;
  /** 에러 메시지 (error가 true일 때 표시) */
  errorMessage?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 부분 선택 상태 (전체 선택/해제 UI에서 사용) @default false */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'md',
      error = false,
      errorMessage,
      helperText,
      indeterminate = false,
      required = false,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const checkboxId = useId();
    const helperId = useId();
    const internalRef = useRef<HTMLInputElement>(null);

    // 개발 환경에서 label 검증
    if (process.env.NODE_ENV === 'development') {
      if (!label) {
        console.error(
          'Checkbox: label prop은 필수입니다. 접근성을 위해 label을 제공하세요.'
        );
      }
    }

    // indeterminate 상태 설정
    useEffect(() => {
      const checkboxElement =
        (ref as React.RefObject<HTMLInputElement>)?.current ||
        internalRef.current;
      if (checkboxElement) {
        checkboxElement.indeterminate = indeterminate;
      }
    }, [indeterminate, ref]);

    const showHelper = !error && helperText;
    const showError = error && errorMessage;

    return (
      <div className={styles.wrapper}>
        <label htmlFor={checkboxId} className={styles.checkboxLabel}>
          <div
            className={clsx(
              styles.checkboxContainer,
              styles.size[size],
              error && styles.error
            )}
          >
            <input
              ref={(element) => {
                internalRef.current = element;
                if (typeof ref === 'function') {
                  ref(element);
                } else if (ref) {
                  ref.current = element;
                }
              }}
              id={checkboxId}
              type="checkbox"
              required={required}
              disabled={disabled}
              aria-invalid={error}
              aria-disabled={disabled}
              aria-describedby={showHelper || showError ? helperId : undefined}
              className={clsx(
                styles.checkbox,
                styles.size[size],
                error && styles.error,
                className
              )}
              {...rest}
            />
            <span
              className={clsx(
                styles.checkmark,
                styles.size[size],
                error && styles.error
              )}
            />
          </div>

          <span className={styles.labelText}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
        </label>

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

Checkbox.displayName = 'Checkbox';
