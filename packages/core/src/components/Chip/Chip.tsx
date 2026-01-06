import { type ReactNode } from 'react'
import clsx from 'clsx'
import { useClickable } from '../../_internal/useClickable'
import { Icon } from '../Icon'
import { themeContract } from '../../tokens/theme.css'
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

  // 선택된 상태일 때 색상별 boxShadow 계산
  const getSelectedBoxShadow = () => {
    if (!selected) return undefined

    const colorMap = {
      default: themeContract.color.border.default,
      primary: themeContract.color.primary.main,
      success: themeContract.color.success.main,
      error: themeContract.color.error.main,
      warning: themeContract.color.warning.main,
    }

    return `inset 0 0 0 2px ${colorMap[color]}`
  }

  // 삭제 버튼 클릭 핸들러
  const handleDelete = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    e.stopPropagation()
    if (disabled) return
    onDelete?.()
  }

  // 클릭 가능 여부에 따라 button 또는 div로 렌더링
  const isClickable = clickable && onClick

  // useClickable 훅으로 클릭 가능한 div 처리
  const clickableProps = useClickable({
    onClick: onClick
      ? () => {
          onClick()
        }
      : undefined,
    disabled,
    role: 'button',
  })

  // 삭제 버튼용 useClickable
  const deleteButtonProps = useClickable({
    onClick: onDelete ? handleDelete : undefined,
    disabled,
    role: 'button',
  })

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
          {...deleteButtonProps}
          className={deleteButton}
          aria-label={`${label} 삭제`}
        >
          <Icon name="close" size="sm" />
        </span>
      )}
    </>
  )

  if (isClickable) {
    return (
      <button
        type="button"
        className={chipClasses}
        onClick={clickableProps.onClick}
        onKeyDown={clickableProps.onKeyDown}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={label}
        style={{ boxShadow: getSelectedBoxShadow() }}
      >
        {chipContent}
      </button>
    )
  }

  return (
    <div className={chipClasses} style={{ boxShadow: getSelectedBoxShadow() }}>
      {chipContent}
    </div>
  )
}

Chip.displayName = 'Chip'
