import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import {
  headerBar,
  variantStyles,
  stickyStyles,
  elevationStyles,
  borderStyles,
  leftSection,
  logo as logoStyle,
  title as titleStyle,
  centerSection,
  rightSection,
} from './HeaderBar.css';

/** 페이지 상단 헤더바 컴포넌트. 로고, 제목, 액션 영역 포함 */
export interface HeaderBarProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'title'
> {
  /** 왼쪽 로고 영역 */
  logo?: ReactNode;
  /** 로고 옆 제목 */
  title?: ReactNode;
  /** 중앙 콘텐츠 영역 */
  children?: ReactNode;
  /** 오른쪽 액션 영역 (버튼, 아이콘 등) */
  actions?: ReactNode;
  /** 스크롤 시 상단 고정 @default false */
  sticky?: boolean;
  /** 헤더 배경 스타일 @default 'default' */
  variant?: 'default' | 'dark' | 'transparent';
  /** 하단 그림자 효과 @default false */
  elevation?: boolean;
  /** 하단 테두리 표시 @default true */
  border?: boolean;
  /** 스크린 리더용 레이블 */
  'aria-label'?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const HeaderBar = ({
  logo,
  title,
  children,
  actions,
  sticky = false,
  variant = 'default',
  elevation = false,
  border = true,
  'aria-label': ariaLabel,
  className,
  ...props
}: HeaderBarProps) => {
  return (
    <header
      role="banner"
      aria-label={ariaLabel}
      className={clsx(
        headerBar,
        variantStyles[variant],
        stickyStyles[sticky.toString() as 'true' | 'false'],
        elevationStyles[elevation.toString() as 'true' | 'false'],
        borderStyles[border.toString() as 'true' | 'false'],
        className
      )}
      {...props}
    >
      {(logo || title) && (
        <div className={leftSection}>
          {logo && <div className={logoStyle}>{logo}</div>}
          {title && <h1 className={titleStyle}>{title}</h1>}
        </div>
      )}

      {children && <div className={centerSection}>{children}</div>}

      {actions && <div className={rightSection}>{actions}</div>}
    </header>
  );
};

HeaderBar.displayName = 'HeaderBar';
