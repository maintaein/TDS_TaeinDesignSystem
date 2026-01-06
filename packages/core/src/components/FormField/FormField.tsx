import { useId, type ReactNode } from 'react'
import clsx from 'clsx'
import {
  wrapper,
  fullWidth as fullWidthStyle,
  label as labelStyle,
  required as requiredStyle,
  helperText as helperTextStyle,
  errorMessage as errorMessageStyle,
} from './FormField.css'

export interface FormFieldRenderProps {
  inputId: string
  helperId: string
  hasHelper: boolean
  isError: boolean
}

export interface FormFieldProps {
  label: string
  helperText?: string
  error?: boolean
  errorMessage?: string
  required?: boolean
  fullWidth?: boolean
  className?: string
  children: (props: FormFieldRenderProps) => ReactNode
}

export const FormField = ({
  label,
  helperText,
  error = false,
  errorMessage,
  required = false,
  fullWidth = false,
  className,
  children,
}: FormFieldProps) => {
  const inputId = useId()
  const helperId = useId()

  // helperText 또는 errorMessage 표시 여부
  const showHelper = !error && !!helperText
  const showError = error && !!errorMessage
  const hasHelper = showHelper || showError
  const isError = error

  return (
    <div className={clsx(wrapper, fullWidth && fullWidthStyle, className)}>
      {/* Label */}
      <label htmlFor={inputId} className={labelStyle}>
        {label}
        {required && <span className={requiredStyle}>*</span>}
      </label>

      {/* Input (render prop pattern) */}
      {children({ inputId, helperId, hasHelper, isError })}

      {/* Helper Text */}
      {showHelper && (
        <span id={helperId} className={helperTextStyle}>
          {helperText}
        </span>
      )}

      {/* Error Message */}
      {showError && (
        <span id={helperId} className={errorMessageStyle}>
          {errorMessage}
        </span>
      )}
    </div>
  )
}

FormField.displayName = 'FormField'
