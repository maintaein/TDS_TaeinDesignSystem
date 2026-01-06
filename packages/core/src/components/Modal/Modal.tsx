import { useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { backdrop, modalContainer, modalDialog, sizeStyles } from './Modal.css'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  open: boolean
  onClose: () => void
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-label'?: string
  className?: string
}

export const Modal = ({
  open,
  onClose,
  children,
  size = 'md',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel,
  className,
  ...props
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    previousActiveElementRef.current = document.activeElement as HTMLElement

    const dialog = dialogRef.current
    if (!dialog) return

    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    if (firstFocusable) {
      firstFocusable.focus()
    } else {
      dialog.setAttribute('tabindex', '-1')
      dialog.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose()
        return
      }

      if (e.key === 'Tab') {
        if (focusableElements.length === 0) {
          e.preventDefault()
          return
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault()
            lastFocusable?.focus()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault()
            firstFocusable?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''

      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus()
      }
    }
  }, [open, closeOnEscape, onClose])

  if (!open) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose()
    }
  }

  const modalContent = (
    <div className={modalContainer}>
      <div
        className={backdrop}
        onClick={handleBackdropClick}
        data-backdrop="true"
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        aria-label={ariaLabel}
        className={clsx(modalDialog, sizeStyles[size], className)}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

Modal.displayName = 'Modal'
