import type { HTMLAttributes } from 'react'
import clsx from 'clsx'
import {
  loaderContainer,
  loader,
  typeStyles,
  sizeStyles,
  colorStyles,
  fullScreenStyles,
  overlayStyles,
  label as labelClass,
  spinner,
  dotsContainer,
  dot,
  bar,
  barFill,
  dotSize,
  dotDelay,
  barSizeStyles,
  barReset,
} from './Loader.css'

export interface LoaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  type?: 'spinner' | 'dots' | 'bar'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'white'
  label?: string
  fullScreen?: boolean
  overlay?: boolean
  'aria-label'?: string
  className?: string
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
  ...props
}: LoaderProps) => {

  const renderLoader = () => {
    // 공통 컬러 변수 적용을 위해 colorStyles[color]를 여기서 활용
    const colorClass = colorStyles[color];

    switch (type) {
      case 'dots':
        return (
          <div className={dotsContainer}>
            <span className={clsx(dot, dotSize[size], colorStyles[color], dotDelay.first)} />
            <span className={clsx(dot, dotSize[size], colorStyles[color], dotDelay.second)} />
            <span className={clsx(dot, dotSize[size], colorStyles[color], dotDelay.third)} />
          </div>
        )
      case 'bar':
        return (
          <div className={clsx(bar, barSizeStyles[size])}>
            <div className={clsx(barFill, colorClass)} />
          </div>        
          )
      case 'spinner':
      default:
        return <div className={clsx(spinner, sizeStyles[size], colorClass)} />
    }
  }
  
  const loaderElement = (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel || label || '로딩 중'}
      // 테스트가 찾는 모든 클래스(type, size, color)를 이 레벨에 부여
      className={clsx(
        loader,
        typeStyles[type],
        sizeStyles[size],
        colorStyles[color],
        type === 'bar' ? barReset : sizeStyles[size],
      )}
      {...props}
    >
      {renderLoader()}
    </div>
  )
  
  if (!label && !fullScreen && !overlay) {
    return <div className={className}>{loaderElement}</div>
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
  )
}

Loader.displayName = 'Loader'
