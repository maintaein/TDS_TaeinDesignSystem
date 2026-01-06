import type { ReactNode, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { badge, variantStyles, sizeStyles, dotStyles } from './Badge.css'

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  max?: number
  dot?: boolean
  showZero?: boolean
  'aria-label'?: string
  className?: string
}

export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  max = 99,
  dot = false,
  showZero = true,
  'aria-label': ariaLabel,
  className,
  ...props
}: BadgeProps) => {
  // dot 모드가 아닐 때 children 검증
  if (!dot) {
    // children이 없으면 렌더링하지 않음
    if (children === null || children === undefined) {
      return null
    }

    // 빈 문자열은 렌더링하지 않음
    if (children === '') {
      return null
    }

    // 0 처리
    if (children === 0 && !showZero) {
      return null
    }
  }

  // 표시할 내용 결정
  const getDisplayContent = () => {
    if (dot) {
      return null
    }

    // 숫자인 경우 max 처리
    const numValue = Number(children)
    const isNumeric = !isNaN(numValue) && children !== '' && children !== null && children !== undefined

    if (isNumeric) {
      // showZero가 false이고 값이 0이면 빈 문자열 반환 (렌더링되지 않도록)
      if (numValue === 0 && !showZero) {
        return ''
      }

      if (numValue > max) {
        return `${max}+`
      }
      return String(numValue)
    }

    // 텍스트인 경우 그대로 반환
    return children
  }

  const displayContent = getDisplayContent()

  // displayContent가 빈 문자열이면 렌더링하지 않음
  if (displayContent === '') {
    return null
  }

  // aria-label 자동 생성
  const getAriaLabel = () => {
    if (ariaLabel) {
      return ariaLabel
    }

    if (dot) {
      return '알림'
    }

    const numValue = Number(children)
    const isNumeric = !isNaN(numValue) && children !== '' && children !== null && children !== undefined

    if (isNumeric) {
      return `${displayContent}개의 알림`
    }

    return String(children)
  }

  const finalAriaLabel = getAriaLabel()

  return (
    <span
      role="status"
      {...(finalAriaLabel ? { 'aria-label': finalAriaLabel } : {})}
      className={clsx(
        badge,
        variantStyles[variant],
        sizeStyles[size],
        dot && dotStyles,
        className
      )}
      {...props}
    >
      {displayContent}
    </span>
  )
}

Badge.displayName = 'Badge'
