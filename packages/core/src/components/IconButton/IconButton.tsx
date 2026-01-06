import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';
import {
  buttonBase,
  sizeVariants,
  fillVariants,
  weakVariants,
} from './IconButton.css';
import { LoadingSpinner } from '../LoadingSpinner';

type IconButtonVariant = 'primary' | 'dark' | 'danger' | 'light';
type IconButtonStyle = 'fill' | 'weak';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 색상 변형 */
  variant?: IconButtonVariant;
  /** 버튼 스타일 (fill: 채움, weak: 약한 스타일) */
  buttonStyle?: IconButtonStyle;
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** 로딩 상태 */
  loading?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 아이콘 (ReactNode) */
  children: ReactNode;
  /** 접근성: 버튼 레이블 (필수) */
  'aria-label'?: string;
  /** 접근성: 버튼 레이블 ID 참조 */
  'aria-labelledby'?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'primary',
      buttonStyle = 'fill',
      size = 'md',
      loading = false,
      disabled = false,
      children,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    // 개발 환경에서 접근성 검증
    if (process.env.NODE_ENV === 'development') {
      if ((!ariaLabel || ariaLabel.trim() === '') && !ariaLabelledby) {
        console.error(
          'IconButton: aria-label 또는 aria-labelledby가 필요합니다. 접근성을 위해 버튼의 용도를 설명하는 레이블을 제공하세요.'
        );
      }
    }

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
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={clsx(
          buttonBase,
          sizeVariants[size],
          variantClass,
          className
        )}
        {...props}
      >
        {loading ? (
          <LoadingSpinner
            type="spinner"
            size="sm"
            color="currentColor"
            aria-label="로딩 중"
          />
        ) : (
          <span aria-hidden="true">{children}</span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
