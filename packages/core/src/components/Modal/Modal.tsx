import {
  useEffect,
  useRef,
  useMemo,
  createContext,
  useContext,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import {
  backdrop,
  modalContainer,
  modalDialog,
  sizeStyles,
  modalHeader as modalHeaderStyle,
  modalHeaderContent,
  modalTitle as modalTitleStyle,
  modalCloseButton,
  modalContent as modalContentStyle,
  modalFooter as modalFooterStyle,
  footerAlignStyles,
} from './Modal.css';

// Context로 onClose 전달 (Header의 닫기 버튼에서 사용)
interface ModalContextValue {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

/** 모달 다이얼로그 컴포넌트. Compound 패턴(Modal.Header/Content/Footer) 또는 Flat 패턴(title/footer prop) 지원 */
export interface ModalProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'title'
> {
  /** 모달 표시 여부 */
  open: boolean;
  /** 모달 닫기 콜백 */
  onClose: () => void;
  /** 모달 콘텐츠 */
  children: ReactNode;
  /** 모달 너비 @default 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** 배경 클릭으로 닫기 허용 @default true */
  closeOnBackdropClick?: boolean;
  /** ESC 키로 닫기 허용 @default true */
  closeOnEscape?: boolean;
  /** 제목 요소 ID 참조 (접근성) */
  'aria-labelledby'?: string;
  /** 설명 요소 ID 참조 (접근성) */
  'aria-describedby'?: string;
  /** 스크린 리더용 레이블 */
  'aria-label'?: string;
  /** 추가 CSS 클래스 */
  className?: string;
  /** Flat: 모달 제목 — 자동으로 Header + Title 구조 생성 */
  title?: string;
  /** Flat: 닫기(X) 버튼 표시 (title과 함께 사용) @default false */
  showClose?: boolean;
  /** Flat: 모달 푸터 영역 */
  footer?: ReactNode;
  /** Flat: 푸터 버튼 정렬 @default 'right' */
  footerAlign?: 'left' | 'center' | 'right';
}

const ModalRoot = ({
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
  title,
  showClose = false,
  footer,
  footerAlign = 'left',
  ...props
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (firstFocusable) {
      firstFocusable.focus();
    } else {
      dialog.setAttribute('tabindex', '-1');
      dialog.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';

      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [open, closeOnEscape, onClose]);

  const contextValue = useMemo(() => ({ onClose }), [onClose]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  const isFlat = !!(title || footer);

  const content = isFlat ? (
    <>
      {title && (
        <header className={modalHeaderStyle}>
          <div className={modalHeaderContent}>
            <h2 className={modalTitleStyle}>{title}</h2>
          </div>
          {showClose && (
            <button
              type="button"
              className={modalCloseButton}
              onClick={onClose}
              aria-label="닫기"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </header>
      )}
      <div className={modalContentStyle}>{children}</div>
      {footer && (
        <footer
          className={clsx(modalFooterStyle, footerAlignStyles[footerAlign])}
        >
          {footer}
        </footer>
      )}
    </>
  ) : (
    children
  );

  const modalContentElement = (
    <ModalContext.Provider value={contextValue}>
      <div className={modalContainer}>
        <div
          role="presentation"
          className={backdrop}
          onClick={handleBackdropClick}
          data-backdrop="true"
          aria-hidden="true"
        />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
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
          {content}
        </div>
      </div>
    </ModalContext.Provider>
  );

  return createPortal(modalContentElement, document.body);
};

ModalRoot.displayName = 'Modal';

// ─── Compound 서브 컴포넌트 ──────────────────────────────────────────

// ModalHeader
/** Modal.Header — 모달 헤더 영역 */
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** 헤더 콘텐츠 */
  children: ReactNode;
  /** 닫기(X) 버튼 표시 @default false */
  showClose?: boolean;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, showClose = false, className, ...props }, ref) => {
    const context = useModalContext();

    return (
      <header
        ref={ref}
        className={clsx(modalHeaderStyle, className)}
        {...props}
      >
        <div className={modalHeaderContent}>{children}</div>
        {showClose && (
          <button
            type="button"
            className={modalCloseButton}
            onClick={context?.onClose}
            aria-label="닫기"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </header>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

// ModalTitle
/** Modal.Title — 모달 제목 */
export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** 제목 텍스트 */
  children: ReactNode;
  /** 렌더링할 HTML 헤딩 태그 @default 'h2' */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, as: Component = 'h2', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(modalTitleStyle, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

ModalTitle.displayName = 'ModalTitle';

// ModalContent
/** Modal.Content — 모달 본문 영역 */
export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /** 본문 콘텐츠 */
  children: ReactNode;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(modalContentStyle, className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalContent.displayName = 'ModalContent';

// ModalFooter
/** Modal.Footer — 모달 푸터 영역 (보통 액션 버튼 배치) */
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** 푸터 콘텐츠 */
  children: ReactNode;
  /** 콘텐츠 정렬 @default 'left' */
  align?: 'left' | 'center' | 'right';
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, align = 'left', className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={clsx(modalFooterStyle, footerAlignStyles[align], className)}
        {...props}
      >
        {children}
      </footer>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';

// ─── Modal = ModalRoot + Compound 서브 컴포넌트 ────────────────────────

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Title: ModalTitle,
  Content: ModalContent,
  Footer: ModalFooter,
});
