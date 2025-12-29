import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import {
  border,
  sidesStyles,
  variantStyles,
  widthStyles,
  colorStyles,
  roundedStyles,
  paddingStyles,
} from './Border.css'

export interface BorderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  sides?: 'all' | 'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  width?: 'thin' | 'medium' | 'thick'
  color?: 'default' | 'primary' | 'success' | 'error' | 'warning'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

export const Border = ({
  children,
  sides = 'all',
  variant = 'solid',
  width = 'thin',
  color = 'default',
  rounded = 'none',
  padding = 'none',
  className,
  ...props
}: BorderProps) => {
  return (
    <div
      className={clsx(
        border,
        sidesStyles[sides],
        variantStyles[variant],
        widthStyles[width],
        colorStyles[color],
        roundedStyles[rounded],
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Border.displayName = 'Border'
