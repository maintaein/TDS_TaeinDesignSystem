import { type ReactNode, type MouseEvent, type KeyboardEvent } from 'react'
import clsx from 'clsx'
import {
  chip,
  sizeStyles,
  variantStyles,
  colorStyles,
  filledColorStyles,
  outlinedColorStyles,
  clickable as clickableStyle,
  selected as selectedStyle,
  disabled as disabledStyle,
  label as labelStyle,
  iconContainer,
  deleteButton,
  deleteIcon,
} from './Chip.css'

export interface ChipProps {
  label: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'filled' | 'outlined'
  color?: 'default' | 'primary' | 'success' | 'error' | 'warning'
  icon?: ReactNode
  avatar?: ReactNode
  onDelete?: () => void
  clickable?: boolean
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export const Chip = ({
  label,
  size = 'md',
  variant = 'filled',
  color = 'default',
  icon,
  avatar,
  onDelete,
  clickable = false,
  selected = false,
  disabled = false,
  onClick,
  className,
}: ChipProps) => {
  // variant와 color 조합에 따른 스타일
  const colorStyleClass =
    variant === 'filled' ? filledColorStyles[color] : outlinedColorStyles[color]

  // 클릭 핸들러
  const handleClick = () => {
    if (disabled) return
    onClick?.()
  }

  // 키보드 핸들러
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.()
    }
  }

  // 삭제 버튼 클릭 핸들러
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (disabled) return
    onDelete?.()
  }

  // 클릭 가능 여부에 따라 button 또는 div로 렌더링
  const isClickable = clickable && onClick

  const chipClasses = clsx(
    chip,
    sizeStyles[size],
    variantStyles[variant],
    colorStyles[color],
    colorStyleClass,
    {
      [clickableStyle]: isClickable,
      [selectedStyle]: selected,
      [disabledStyle]: disabled,
    },
    className
  )

  const chipContent = (
    <>
      {avatar && <span className={iconContainer}>{avatar}</span>}
      {icon && <span className={iconContainer}>{icon}</span>}
      <span className={labelStyle}>{label}</span>
      {onDelete && (
        <span
          role="button"
          tabIndex={disabled ? -1 : 0}
          className={deleteButton}
          onClick={handleDelete}
          onKeyDown={(e) => {
            if (disabled) return
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleDelete(e as unknown as MouseEvent<HTMLButtonElement>)
            }
          }}
          aria-label={`${label} 삭제`}
          aria-disabled={disabled}
          style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        >
          <svg
            className={deleteIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      )}
    </>
  )

  if (isClickable) {
    return (
      <button
        type="button"
        className={chipClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={label}
      >
        {chipContent}
      </button>
    )
  }

  return <div className={chipClasses}>{chipContent}</div>
}

Chip.displayName = 'Chip'
