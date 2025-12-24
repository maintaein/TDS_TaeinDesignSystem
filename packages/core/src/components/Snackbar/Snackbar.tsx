import { useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import {
  snackbar,
  severityStyles,
  positionStyles,
  content,
  message as messageClass,
  actions,
  closeButton,
} from './Snackbar.css'

export interface SnackbarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  open: boolean
  message: ReactNode
  severity?: 'success' | 'error' | 'warning' | 'info'
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  autoHideDuration?: number | null
  onClose?: () => void
  action?: ReactNode
  className?: string
}

export const Snackbar = ({
  open,
  message,
  severity = 'info',
  position = 'bottom-center',
  autoHideDuration = 6000,
  onClose,
  action,
  className,
  ...props
}: SnackbarProps) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!open) {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      return
    }

    if (autoHideDuration !== null && onClose) {
      timerRef.current = setTimeout(() => {
        onClose()
      }, autoHideDuration)

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current)
        }
      }
    }
  }, [open, autoHideDuration, onClose])

  if (!open) {
    return null
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      className={clsx(snackbar, severityStyles[severity], positionStyles[position], className)}
      {...props}
    >
      <div className={content}>
        <span className={messageClass}>{message}</span>
        <div className={actions}>
          {action}
          <button
            type="button"
            aria-label="닫기"
            className={closeButton}
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

Snackbar.displayName = 'Snackbar'
