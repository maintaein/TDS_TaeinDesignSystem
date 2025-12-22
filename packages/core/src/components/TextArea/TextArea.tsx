import { forwardRef, useId, useEffect, useRef, useCallback } from 'react'
import type { TextareaHTMLAttributes, ChangeEvent } from 'react'
import { clsx } from 'clsx'
import * as styles from './TextArea.css'

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** 레이블 텍스트 */
  label: string
  /** TextArea size */
  size?: 'sm' | 'md' | 'lg'
  /** 높이 자동 조정 */
  autoResize?: boolean
  /** 최소 높이 (px 또는 문자열) */
  height?: string | number
  /** 에러 상태 */
  error?: boolean
  /** 에러 메시지 */
  errorMessage?: string
  /** 도움말 텍스트 */
  helperText?: string
  /** 전체 너비 사용 */
  fullWidth?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      size = 'md',
      autoResize = false,
      height = 120,
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      required = false,
      disabled = false,
      className,
      onChange,
      ...rest
    },
    ref
  ) => {
    const textareaId = useId()
    const helperId = useId()
    const internalRef = useRef<HTMLTextAreaElement>(null)

    // 개발 환경에서 label 검증
    if (process.env.NODE_ENV === 'development') {
      if (!label) {
        console.error('TextArea: label prop은 필수입니다. 접근성을 위해 label을 제공하세요.')
      }
    }

    // ref 병합 (forwardRef와 내부 ref 모두 지원)
    const setRefs = useCallback(
      (element: HTMLTextAreaElement | null) => {
        internalRef.current = element
        if (typeof ref === 'function') {
          ref(element)
        } else if (ref) {
          ref.current = element
        }
      },
      [ref]
    )

    // 자동 높이 조정 함수
    const adjustHeight = useCallback(() => {
      const textarea = internalRef.current
      if (!textarea || !autoResize) return

      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }, [autoResize])

    // autoResize 활성화 시 초기 높이 조정
    useEffect(() => {
      if (autoResize) {
        adjustHeight()
      }
    }, [autoResize, adjustHeight])

    // onChange 핸들러 래핑 (자동 높이 조정 포함)
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (autoResize) {
          adjustHeight()
        }
        onChange?.(e)
      },
      [autoResize, adjustHeight, onChange]
    )

    // helperText 또는 errorMessage 표시
    const showHelper = !error && helperText
    const showError = error && errorMessage

    // height를 px 단위로 변환
    const minHeight = typeof height === 'number' ? `${height}px` : height

    return (
      <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
        {/* Label */}
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>

        {/* TextArea Container */}
        <div className={clsx(styles.textareaContainer, styles.size[size], error && styles.error)}>
          <textarea
            ref={setRefs}
            id={textareaId}
            required={required}
            disabled={disabled}
            aria-invalid={error}
            aria-disabled={disabled}
            aria-describedby={showHelper || showError ? helperId : undefined}
            className={clsx(styles.textarea, styles.size[size], error && styles.error, className)}
            style={{
              minHeight,
              overflow: autoResize ? 'hidden' : 'auto',
            }}
            onChange={handleChange}
            {...rest}
          />
        </div>

        {/* Footer: Helper Text / Error Message */}
        {(showHelper || showError) && (
          <div className={styles.footer}>
            {showHelper && (
              <span id={helperId} className={styles.helperText}>
                {helperText}
              </span>
            )}
            {showError && (
              <span id={helperId} className={styles.errorMessage}>
                {errorMessage}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
