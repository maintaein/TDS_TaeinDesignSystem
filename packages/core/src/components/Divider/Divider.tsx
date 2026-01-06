import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import {
  divider,
  orientationStyles,
  variantStyles,
  spacingStyles,
  textAlignStyles,
  dividerWithText,
  line,
  lineVertical,
  textContent,
  textContentVertical,
} from './Divider.css'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  spacing?: 'sm' | 'md' | 'lg'
  textAlign?: 'left' | 'center' | 'right'
  className?: string
}

export const Divider = ({
  children,
  orientation = 'horizontal',
  variant = 'solid',
  spacing = 'md',
  textAlign = 'center',
  className,
  ...props
}: DividerProps) => {
  const isVertical = orientation === 'vertical'

  if (!children) {
    return (
      <div
        role="separator"
        aria-orientation={orientation}
        className={clsx(
          divider,
          orientationStyles[orientation],
          variantStyles[variant],
          spacingStyles[spacing],
          className
        )}
        {...props}
      />
    )
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={clsx(
        divider,
        orientationStyles[orientation],
        variantStyles[variant],
        spacingStyles[spacing],
        textAlignStyles[textAlign],
        dividerWithText,
        className
      )}
      {...props}
    >
      {(textAlign === 'center' || textAlign === 'right') && (
        <div className={isVertical ? lineVertical : line} />
      )}      
      <div className={isVertical ? textContentVertical : textContent}>{children}</div>
      {(textAlign === 'center' || textAlign === 'left') && (
        <div className={isVertical ? lineVertical : line} />
      )}
    </div>
  )
}

Divider.displayName = 'Divider'
