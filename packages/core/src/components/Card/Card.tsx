import { type ReactNode, type KeyboardEvent, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import {
  card,
  variantStyles,
  clickable as clickableStyle,
  disabled as disabledStyle,
  imageContainer,
  image as imageStyle,
  header as headerStyle,
  content as contentStyle,
  paddingStyles,
  footer as footerStyle,
} from './Card.css'

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
  image?: string
  imageAlt?: string
  variant?: 'outlined' | 'elevated' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
}

export const Card = ({
  children,
  header,
  footer,
  image,
  imageAlt,
  variant = 'elevated',
  padding = 'md',
  onClick,
  disabled = false,
  className,
  ...props
}: CardProps) => {
  // 클릭 핸들러
  const handleClick = () => {
    if (disabled) return
    onClick?.()
  }

  // 키보드 핸들러
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement | HTMLElement>) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.()
    }
  }

  const isClickable = !!onClick

  const cardClasses = clsx(
    card,
    variantStyles[variant],
    {
      [clickableStyle]: isClickable,
      [disabledStyle]: disabled,
    },
    className
  )

  const cardContent = (
    <>
      {image && (
        <div className={imageContainer}>
          <img src={image} alt={imageAlt || ''} className={imageStyle} />
        </div>
      )}
      {header && <div className={headerStyle}>{header}</div>}
      <div className={clsx(contentStyle, paddingStyles[padding])}>{children}</div>
      {footer && <div className={footerStyle}>{footer}</div>}
    </>
  )

  if (isClickable) {
    return (
      <button
        type="button"
        className={cardClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {cardContent}
      </button>
    )
  }

  return (
    <article className={cardClasses} {...props}>
      {cardContent}
    </article>
  )
}

Card.displayName = 'Card'
