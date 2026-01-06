import { useState, useId, type HTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'
import { Icon } from '../Icon'
import {
  boardRow,
  variantStyles,
  header,
  title as titleStyle,
  iconContainer,
  iconExpanded,
  contentWrapper,
  content,
  contentExpanded,
  contentCollapsed,
} from './BoardRow.css'

export interface BoardRowProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onChange'> {
  title: ReactNode
  children: ReactNode
  variant?: 'default' | 'outlined' | 'filled'
  defaultExpanded?: boolean
  expanded?: boolean
  onChange?: (expanded: boolean) => void
  disabled?: boolean
  className?: string
}

export const BoardRow = ({
  title,
  children,
  variant = 'default',
  defaultExpanded = false,
  expanded: controlledExpanded,
  onChange,
  disabled = false,
  className,
  ...props
}: BoardRowProps) => {
  const headerId = useId()
  const contentId = useId()

  // controlled vs uncontrolled mode
  const isControlled = controlledExpanded !== undefined
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded)
  const isExpanded = isControlled ? controlledExpanded : uncontrolledExpanded

  const handleToggle = () => {
    if (disabled) return

    if (isControlled) {
      onChange?.(!controlledExpanded)
    } else {
      setUncontrolledExpanded((prev) => !prev)
    }
  }

  return (
    <div className={clsx(boardRow, variantStyles[variant], className)} {...props}>
      <button
        id={headerId}
        type="button"
        className={header}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        <div className={titleStyle}>{title}</div>
        <div className={clsx(iconContainer, isExpanded && iconExpanded)}>
          <Icon name="chevron-down" size="md" />
        </div>
      </button>

      <div className={contentWrapper}>
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          className={clsx(content, isExpanded ? contentExpanded : contentCollapsed)}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

BoardRow.displayName = 'BoardRow'
