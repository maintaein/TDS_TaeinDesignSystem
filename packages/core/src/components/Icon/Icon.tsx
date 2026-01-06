import type { SVGAttributes } from 'react';
import clsx from 'clsx';
import { iconBase } from './Icon.css';

export type IconName = 'close' | 'plus' | 'minus' | 'chevron-down' | 'chevron-up';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
  /** 아이콘 이름 */
  name: IconName;
  /** 아이콘 크기 */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** 아이콘 색상 (CSS 색상 값) */
  color?: string;
  /** 접근성 레이블 (제공 시 스크린 리더에 노출됨) */
  'aria-label'?: string;
  /** 아이콘 설명 (제공 시 title 요소로 렌더링) */
  title?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

// 아이콘 크기 맵
const SIZE_MAP = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

// 아이콘 경로 레지스트리
const ICON_PATHS: Record<IconName, string> = {
  close: 'M18 6L6 18M6 6l12 12',
  plus: 'M12 5v14m-7-7h14',
  minus: 'M5 12h14',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-up': 'M18 15l-6-6-6 6',
};

/**
 * Icon 컴포넌트
 *
 * SVG 기반 아이콘 시스템
 * - 5가지 아이콘 지원 (close, plus, minus, chevron-down, chevron-up)
 * - 4가지 크기 (sm: 16px, md: 20px, lg: 24px, xl: 32px)
 * - currentColor 기본 지원으로 부모 색상 상속
 * - 접근성 완비 (aria-label, title)
 *
 * @example
 * ```tsx
 * // 기본 사용
 * <Icon name="close" />
 *
 * // 크기와 색상 지정
 * <Icon name="plus" size="lg" color="#FF0000" />
 *
 * // 접근성 레이블
 * <Icon name="close" aria-label="닫기" />
 * ```
 */
export const Icon = ({
  name,
  size = 'md',
  color = 'currentColor',
  'aria-label': ariaLabel,
  title,
  className,
  ...props
}: IconProps) => {
  // 개발 환경에서 유효하지 않은 아이콘 이름 경고
  if (process.env.NODE_ENV === 'development') {
    if (!ICON_PATHS[name]) {
      console.error(
        `Icon: "${name}"은(는) 유효하지 않은 아이콘 이름입니다. 사용 가능한 아이콘: ${Object.keys(ICON_PATHS).join(', ')}`
      );
    }
  }

  const iconSize = SIZE_MAP[size];
  const pathData = ICON_PATHS[name];

  // aria-label이 있으면 접근 가능하게, 없으면 장식용으로 처리
  const accessibilityProps = ariaLabel
    ? {
        role: 'img',
        'aria-label': ariaLabel,
      }
    : {
        'aria-hidden': 'true' as const,
      };

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(iconBase, className)}
      style={{ color }}
      data-icon={name}
      {...accessibilityProps}
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d={pathData}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

Icon.displayName = 'Icon';
