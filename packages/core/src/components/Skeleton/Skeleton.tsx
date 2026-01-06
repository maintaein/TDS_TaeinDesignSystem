import type { HTMLAttributes } from 'react'
import clsx from 'clsx'
import {
  skeleton,
  variantStyles,
  animationStyles,
} from './Skeleton.css'

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'text' | 'rect' | 'circle' | 'rounded'
  animation?: 'wave' | 'pulse' | false
  width?: number | string
  height?: number | string
  'aria-label'?: string
  className?: string
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
    const style: React.CSSProperties = {}

    if (width !== undefined) {
      style.width = typeof width === 'number' ? `${width}px` : width
    }

    if (height !== undefined) {
      style.height = typeof height === 'number' ? `${height}px` : height
    }

    // circle variant는 width만 설정하면 height도 동일하게
    if (variant === 'circle' && width !== undefined && height === undefined) {
      style.height = style.width
    }

    return style
  }

  const getAriaLabel = () => {
    if (ariaLabel) {
      return ariaLabel
    }
    return '콘텐츠 로딩 중'
  }

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
  )
}

Skeleton.displayName = 'Skeleton'
