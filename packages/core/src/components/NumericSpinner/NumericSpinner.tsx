import { forwardRef, useId, useCallback, useState, type ChangeEvent } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import * as styles from './NumericSpinner.css';
import { Icon } from '../Icon';

/** 증감 버튼이 있는 숫자 입력 컴포넌트. 제어/비제어 모드 지원 */
export interface NumericSpinnerProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'readOnly' | 'defaultValue'
> {
  /** 레이블 텍스트 */
  label: string;

  // 제어 모드
  /** 제어 모드: 현재 값 */
  value?: number;
  /** 제어 모드: 값 변경 핸들러 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  // 비제어 모드
  /** 비제어 모드: 초기값 */
  defaultValue?: number;

  // 공통 props
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Input width (CSS 단위, 예: '100px', '10rem') */
  inputWidth?: string;
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
      value: controlledValue,
      defaultValue,
      onChange,
      size = 'md',
      inputWidth,
      min,
      max,
      step = 1,
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
    const inputId = useId();
    const helperId = useId();

    // 비제어 모드용 내부 상태
    const [uncontrolledValue, setUncontrolledValue] = useState<number>(
      defaultValue ?? 0
    );

    // 제어/비제어 판단
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? Number(controlledValue) : uncontrolledValue;

    // 개발 환경에서 검증
    if (process.env.NODE_ENV === 'development') {
      if (!label) {
        console.error(
          'NumericSpinner: label prop은 필수입니다. 접근성을 위해 label을 제공하세요.'
        );
      }
      if (controlledValue !== undefined && defaultValue !== undefined) {
        console.warn(
          'NumericSpinner: value와 defaultValue를 동시에 사용할 수 없습니다. ' +
            '제어 컴포넌트는 value를, 비제어 컴포넌트는 defaultValue를 사용하세요.'
        );
      }
    }

    // 값 변경 핸들러
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);

        // 비제어 모드: 내부 상태 업데이트
        if (!isControlled) {
          setUncontrolledValue(newValue);
        }

        // onChange 호출 (있는 경우)
        onChange?.(e);
      },
      [isControlled, onChange]
    );

    // 증가 버튼 클릭 핸들러
    const handleIncrement = useCallback(() => {
      if (disabled) return;

      let newValue = currentValue + step;
      if (max !== undefined) {
        newValue = Math.min(newValue, max);
      }

      // 비제어 모드: 내부 상태 업데이트
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      // onChange 호출 (있는 경우)
      if (onChange) {
        const event = {
          target: { value: String(newValue) },
          currentTarget: { value: String(newValue) },
        } as ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    }, [currentValue, step, max, disabled, isControlled, onChange]);

    // 감소 버튼 클릭 핸들러
    const handleDecrement = useCallback(() => {
      if (disabled) return;

      let newValue = currentValue - step;
      if (min !== undefined) {
        newValue = Math.max(newValue, min);
      }

      // 비제어 모드: 내부 상태 업데이트
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      // onChange 호출 (있는 경우)
      if (onChange) {
        const event = {
          target: { value: String(newValue) },
          currentTarget: { value: String(newValue) },
        } as ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    }, [currentValue, step, min, disabled, isControlled, onChange]);

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
            <Icon name="minus" size="sm" />
          </button>

          {/* Number Input */}
          <input
            ref={ref}
            id={inputId}
            type="number"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            readOnly
            aria-invalid={error}
            aria-disabled={disabled}
            aria-describedby={showHelper || showError ? helperId : undefined}
            style={inputWidth ? { width: inputWidth } : undefined}
            className={clsx(
              styles.input,
              styles.inputSize[size],
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
            <Icon name="plus" size="sm" />
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
