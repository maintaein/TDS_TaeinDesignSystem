import { useEffect, useRef, useState, useId, type ReactNode, type HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import {
  backdrop,
  backdropEnter,
  backdropExit,
  bottomSheetContainer,
  bottomSheet as bottomSheetStyle,
  bottomSheetEnter,
  bottomSheetExit,
  heightStyles,
  handle,
  header,
  title as titleStyle,
  closeButton,
  content,
} from './BottomSheet.css'

export interface BottomSheetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean
  onClose: () => void
  title?: ReactNode
  children: ReactNode
  height?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  showHandle?: boolean
  showClose?: boolean
  enableDrag?: boolean
  className?: string
}

export const BottomSheet = ({
  open,
  onClose,
  title,
  children,
  height = 'auto',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showHandle = true,
  showClose = false,
  enableDrag = true,
  className,
  ...props
}: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)
  const titleId = useId()
  
  const [startY, setStartY] = useState<number>(0)
  const [isDragging, setIsDragging] = useState(false)
  
  const [shouldRender, setShouldRender] = useState(open)


  if(open && !shouldRender) {
    setShouldRender(true)
  }
  
  //접근성 및 스크롤 제어
  useEffect(() => {
    if (!open) return

    previousActiveElementRef.current = document.activeElement as HTMLElement
    const sheet = sheetRef.current
    if (!sheet) return

    // 포커스 트랩 설정
    const focusableElements = sheet.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements[0]) {
      focusableElements[0].focus()
    } else {
      sheet.setAttribute('tabindex', '-1')
      sheet.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousActiveElementRef.current?.focus()
    }
  }, [open, closeOnEscape, onClose])

  //드래그 제어 로직
  useEffect(() => {
    if (!enableDrag || !open) return

    const sheet = sheetRef.current
    if (!sheet) return

    const handleTouchStart = (e: TouchEvent) => {
      setStartY(e.touches[0].clientY)
      setIsDragging(true)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      const currentY = e.touches[0].clientY
      const diff = currentY - startY
      
      // 아래로 드래그할 때만 시각적 피드백
      if (diff > 0) {
        sheet.style.transform = `translateY(${diff}px)`
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return
      setIsDragging(false)

      const endY = e.changedTouches[0].clientY
      const diff = endY - startY

      if (diff > 100) {
        onClose() //
      } else {
        sheet.style.transform = ''
      }
    }

    sheet.addEventListener('touchstart', handleTouchStart)
    sheet.addEventListener('touchmove', handleTouchMove)
    sheet.addEventListener('touchend', handleTouchEnd)

    return () => {
      sheet.removeEventListener('touchstart', handleTouchStart)
      sheet.removeEventListener('touchmove', handleTouchMove)
      sheet.removeEventListener('touchend', handleTouchEnd)
    }
  }, [enableDrag, open, isDragging, startY, onClose])

  //애니메이션 종료 처리
  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.target !== e.currentTarget) return

    if (!open) {
      setShouldRender(false)
      // 인라인 스타일 초기화 (다음 번에 열릴 때를 대비)
      if (sheetRef.current) {
        sheetRef.current.style.transform = ''
      }
    }
  }
  if (!shouldRender) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose()
    }
  }

  const sheetContent = (
    <div className={bottomSheetContainer}>
      <div
        className={clsx(backdrop, !open ? backdropExit : backdropEnter)}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        onAnimationEnd={handleAnimationEnd}
        className={clsx(
          bottomSheetStyle,
          heightStyles[height],
          !open ? bottomSheetExit : bottomSheetEnter,
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {showHandle && <div className={handle} />}

        {title && (
          <div className={header}>
            <h2 id={titleId} className={titleStyle}>{title}</h2>
            {showClose && (
              <button className={closeButton} onClick={onClose} aria-label="닫기" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className={content}>{children}</div>
      </div>
    </div>
  )

  return createPortal(sheetContent, document.body)
}

BottomSheet.displayName = 'BottomSheet'