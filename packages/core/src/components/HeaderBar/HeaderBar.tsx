import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import {
  headerBar,
  variantStyles,
  stickyStyles,
  elevationStyles,
  borderStyles,
  leftSection,
  logo as logoStyle,
  title as titleStyle,
  centerSection,
  rightSection,
} from './HeaderBar.css'

export interface HeaderBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  logo?: ReactNode
  title?: ReactNode
  children?: ReactNode
  actions?: ReactNode
  sticky?: boolean
  variant?: 'default' | 'dark' | 'transparent'
  elevation?: boolean
  border?: boolean
  'aria-label'?: string
  className?: string
}

export const HeaderBar = ({
  logo,
  title,
  children,
  actions,
  sticky = false,
  variant = 'default',
  elevation = false,
  border = true,
  'aria-label': ariaLabel,
  className,
  ...props
}: HeaderBarProps) => {
  return (
    <header
      role="banner"
      aria-label={ariaLabel}
      className={clsx(
        headerBar,
        variantStyles[variant],
        stickyStyles[sticky.toString() as 'true' | 'false'],
        elevationStyles[elevation.toString() as 'true' | 'false'],
        borderStyles[border.toString() as 'true' | 'false'],
        className
      )}
      {...props}
    >
      {(logo || title) && (
        <div className={leftSection}>
          {logo && <div className={logoStyle}>{logo}</div>}
          {title && <h1 className={titleStyle}>{title}</h1>}
        </div>
      )}

      {children && <div className={centerSection}>{children}</div>}

      {actions && <div className={rightSection}>{actions}</div>}
    </header>
  )
}

HeaderBar.displayName = 'HeaderBar'
