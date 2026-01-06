import { type ReactNode, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import { useClickable } from '../../_internal/useClickable'
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
  const isClickable = !!onClick

  // useClickable 훅으로 클릭 가능한 Card 처리
  const clickableProps = useClickable({
    onClick: onClick
      ? () => {
          onClick()
        }
      : undefined,
    disabled,
    role: 'button',
  })

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
        onClick={clickableProps.onClick}
        onKeyDown={clickableProps.onKeyDown}
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
