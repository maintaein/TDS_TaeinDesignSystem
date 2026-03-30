import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import {
  list,
  spacingStyles,
  withDivider,
  listItem,
  layoutStyles,
  alignStyles,
  label as labelStyle,
  value as valueStyle,
  horizontalGap,
  verticalGap,
} from './List.css';

/** 항목 목록을 표시하는 리스트 컴포넌트 */
export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  /** ListItem 컴포넌트들 */
  children: ReactNode;
  /** 항목 간 간격 @default 'md' */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /** 항목 사이 구분선 표시 @default false */
  divider?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

/** 리스트 내 개별 항목. label-value 쌍 또는 커스텀 레이아웃 지원 */
export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  /** 항목 레이블 (왼쪽 또는 상단) */
  label?: ReactNode;
  /** 항목 값 (오른쪽 또는 하단) */
  value?: ReactNode;
  /** 커스텀 레이아웃용 콘텐츠 (layout="custom"일 때 사용) */
  children?: ReactNode;
  /** 레이아웃 방향 @default 'horizontal' */
  layout?: 'horizontal' | 'vertical' | 'custom';
  /** label-value 정렬 @default 'center' */
  align?: 'start' | 'center' | 'end' | 'baseline';
  /** label 영역 고정 너비 (CSS 단위) */
  labelWidth?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const List = ({
  children,
  spacing = 'md',
  divider = false,
  className,
  ...props
}: ListProps) => {
  return (
    <ul
      className={clsx(
        list,
        spacingStyles[spacing],
        divider && withDivider,
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

List.displayName = 'List';

export const ListItem = ({
  label,
  value,
  children,
  layout = 'horizontal',
  align = 'center',
  labelWidth,
  className,
  ...props
}: ListItemProps) => {
  // children이 있으면 자유 레이아웃 모드
  if (children) {
    return (
      <li
        className={clsx(
          listItem,
          className
        )}
        {...props}
      >
        {children}
      </li>
    );
  }

  // 기존 label-value 구조
  return (
    <li
      className={clsx(
        listItem,
        layoutStyles[layout as 'horizontal' | 'vertical'],
        alignStyles[align],
        layout === 'horizontal' ? horizontalGap : verticalGap,
        className
      )}
      {...props}
    >
      <div
        className={labelStyle}
        style={labelWidth ? { width: labelWidth } : undefined}
      >
        {label}
      </div>
      <div className={valueStyle}>{value}</div>
    </li>
  );
};

ListItem.displayName = 'ListItem';
