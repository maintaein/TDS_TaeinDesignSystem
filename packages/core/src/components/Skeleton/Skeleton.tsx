import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { skeleton, variantStyles, animationStyles } from './Skeleton.css';

/** 콘텐츠 로딩 중 표시하는 플레이스홀더 컴포넌트 */
export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /** 스켈레톤 형태 @default 'text' */
  variant?: 'text' | 'rect' | 'circle' | 'rounded';
  /** 애니메이션 타입. false로 비활성화 가능 @default 'wave' */
  animation?: 'wave' | 'pulse' | false;
  /** 너비 (숫자면 px, 문자열이면 CSS 단위) */
  width?: number | string;
  /** 높이 (숫자면 px, 문자열이면 CSS 단위) */
  height?: number | string;
  /** 스크린 리더용 레이블 */
  'aria-label'?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Skeleton = ({
  variant = 'text',
  animation = 'wave',
  width,
  height,
  'aria-label': ariaLabel,
  className,
  ...props
}: SkeletonProps) => {
  const getDimensions = () => {
    const style: React.CSSProperties = {};

    if (width !== undefined) {
      style.width = typeof width === 'number' ? `${width}px` : width;
    }

    if (height !== undefined) {
      style.height = typeof height === 'number' ? `${height}px` : height;
    }

    // circle variant는 width만 설정하면 height도 동일하게
    if (variant === 'circle' && width !== undefined && height === undefined) {
      style.height = style.width;
    }

    return style;
  };

  const getAriaLabel = () => {
    if (ariaLabel) {
      return ariaLabel;
    }
    return '콘텐츠 로딩 중';
  };

  return (
    <span
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={getAriaLabel()}
      className={clsx(
        skeleton,
        variantStyles[variant],
        animation && animationStyles[animation],
        className
      )}
      style={getDimensions()}
      {...props}
    />
  );
};

Skeleton.displayName = 'Skeleton';
