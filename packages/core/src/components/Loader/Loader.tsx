import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import {
  loaderContainer,
  fullScreenStyles,
  overlayStyles,
  label as labelClass,
  bar,
  barFill,
  barSizeStyles,
  colorStyles,
} from './Loader.css';
import { LoadingSpinner } from '../LoadingSpinner';
// 원본 팔레트를 직접 참조하는 이유: type="bar" 렌더 경로는 themeContract 기반
// colorStyles를 쓰지만(아래), spinner/dots 경로는 LoadingSpinner에 위임하며
// getColorValue()로 raw 값을 만들어 넘긴다. LoadingSpinner의 color prop 자체가
// 테마 role이 아니라 임의의 CSS 색상 문자열을 받도록 설계돼 있어(해당 파일 참고),
// 그 prop에 맞춰 raw 값을 전달하는 것이 자연스럽다.
import { primary, gray } from '../../tokens/colors.css';

/** 로딩 상태를 표시하는 컴포넌트. 스피너, 점, 바 타입 지원 */
export interface LoaderProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'color'
> {
  /** 로딩 애니메이션 타입 @default 'spinner' */
  type?: 'spinner' | 'dots' | 'bar';
  /** 로더 크기 @default 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** 로더 색상 @default 'primary' */
  color?: 'primary' | 'secondary' | 'white';
  /** 로더 아래 표시할 텍스트 */
  label?: string;
  /** 전체 화면 중앙 배치 @default false */
  fullScreen?: boolean;
  /** 반투명 배경 오버레이 표시 @default false */
  overlay?: boolean;
  /** 스크린 리더용 레이블 */
  'aria-label'?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Loader = ({
  type = 'spinner',
  size = 'md',
  color = 'primary',
  label,
  fullScreen = false,
  overlay = false,
  'aria-label': ariaLabel,
  className,
}: LoaderProps) => {
  // color preset을 실제 색상 값으로 변환
  const getColorValue = (colorPreset: 'primary' | 'secondary' | 'white') => {
    switch (colorPreset) {
      case 'primary':
        return primary[600];
      case 'secondary':
        return gray[600];
      case 'white':
        return '#FFFFFF';
    }
  };

  const renderLoader = () => {
    const colorClass = colorStyles[color];

    // bar 타입은 LoadingSpinner가 지원하지 않으므로 기존 구현 유지
    if (type === 'bar') {
      return (
        <div
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label={ariaLabel || label || '로딩 중'}
          data-type="bar"
          data-size={size}
          data-color={color}
        >
          <div className={clsx(bar, barSizeStyles[size])}>
            <div className={clsx(barFill, colorClass)} />
          </div>
        </div>
      );
    }

    // spinner와 dots는 LoadingSpinner 사용
    return (
      <LoadingSpinner
        type={type}
        size={size}
        color={getColorValue(color)}
        aria-label={ariaLabel || label || '로딩 중'}
      />
    );
  };

  const loaderElement = renderLoader();

  if (!label && !fullScreen && !overlay) {
    return <div className={className}>{loaderElement}</div>;
  }

  return (
    <div
      className={clsx(
        loaderContainer,
        fullScreen && fullScreenStyles,
        overlay && overlayStyles,
        className
      )}
    >
      {loaderElement}
      {label && <p className={labelClass}>{label}</p>}
    </div>
  );
};

Loader.displayName = 'Loader';
