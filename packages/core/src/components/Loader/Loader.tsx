import type { HTMLAttributes } from 'react'
import clsx from 'clsx'
import {
  loaderContainer,
  fullScreenStyles,
  overlayStyles,
  label as labelClass,
  bar,
  barFill,
  barSizeStyles,
  colorStyles,
} from './Loader.css'
import { LoadingSpinner } from '../LoadingSpinner'
import { primary, gray } from '../../tokens/colors.css'

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
}: LoaderProps) => {
  // color preset을 실제 색상 값으로 변환
  const getColorValue = (colorPreset: 'primary' | 'secondary' | 'white') => {
    switch (colorPreset) {
      case 'primary':
        return primary[600]
      case 'secondary':
        return gray[600]
      case 'white':
        return '#FFFFFF'
    }
  }

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
      )
    }

    // spinner와 dots는 LoadingSpinner 사용
    return (
      <LoadingSpinner
        type={type}
        size={size}
        color={getColorValue(color)}
        aria-label={ariaLabel || label || '로딩 중'}
      />
    )
  }

  const loaderElement = renderLoader()

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
