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

// List Props
export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  divider?: boolean;
  className?: string;
}

// ListItem Props
export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  label?: ReactNode;
  value?: ReactNode;
  children?: ReactNode;
  layout?: 'horizontal' | 'vertical' | 'custom';
  align?: 'start' | 'center' | 'end' | 'baseline';
  labelWidth?: string;
  className?: string;
}

// List 컴포넌트
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

// ListItem 컴포넌트
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
