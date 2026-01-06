import type { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { primary } from '../../tokens/colors.css'
import {
  container,
  spinner,
  dotsContainer,
  dot,
  sizeStyles,
  dotSizeStyles,
  dotDelayStyles,
} from './LoadingSpinner.css'

export interface LoadingSpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  type?: 'spinner' | 'dots'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  'aria-label'?: string
  className?: string
}

export const LoadingSpinner = ({
  type = 'spinner',
  size = 'md',
  color = primary[600],
  'aria-label': ariaLabel = '로딩 중',
  className,
  ...props
}: LoadingSpinnerProps) => {
  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return (
          <div className={dotsContainer}>
            <span
              className={clsx(dot, dotSizeStyles[size], dotDelayStyles.first)}
              data-dot
              data-delay="first"
            />
            <span
              className={clsx(dot, dotSizeStyles[size], dotDelayStyles.second)}
              data-dot
              data-delay="second"
            />
            <span
              className={clsx(dot, dotSizeStyles[size], dotDelayStyles.third)}
              data-dot
              data-delay="third"
            />
          </div>
        )
      case 'spinner':
      default:
        return <div className={clsx(spinner, sizeStyles[size])} data-spinner />
    }
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      data-type={type}
      data-size={size}
      className={clsx(container, className)}
      style={{
        '--spinner-color': color,
      } as React.CSSProperties}
      {...props}
    >
      {renderSpinner()}
    </div>
  )
}

LoadingSpinner.displayName = 'LoadingSpinner'
