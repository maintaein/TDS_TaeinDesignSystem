import { useState, useRef, useEffect, useId, type ReactNode, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import {
  tooltipContainer,
  tooltip,
  positionStyles,
  arrow,
  arrowPositionStyles,
} from './Tooltip.css'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  children: ReactNode
  content: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  disabled?: boolean
  arrow?: boolean
  className?: string
}

export const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 200,
  disabled = false,
  arrow: showArrow = true,
  className,
  ...props
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const tooltipId = useId()

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const handleShow = () => {
    if (disabled) return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (delay === 0) {
      setVisible(true)
    } else {
      timerRef.current = setTimeout(() => {
        setVisible(true)
      }, delay)
    }
  }

  const handleHide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setVisible(false)
  }

  return (
    <div
      className={clsx(tooltipContainer, className)}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
      aria-describedby={visible ? tooltipId : undefined}
      {...props}
    >
      {children}
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={clsx(tooltip, positionStyles[position])}
        >
          {content}
          {showArrow && <div className={clsx(arrow, arrowPositionStyles[position])} />}
        </div>
      )}
    </div>
  )
}

Tooltip.displayName = 'Tooltip'
