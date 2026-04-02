import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useId,
  createContext,
  useContext,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import {
  backdrop,
  backdropEnter,
  backdropExit,
  sideSheetContainer,
  sideSheet as sideSheetStyle,
  positionStyles,
  sideSheetEnterRight,
  sideSheetExitRight,
  sideSheetEnterLeft,
  sideSheetExitLeft,
  widthStyles,
  header,
  title as titleStyle,
  closeButton,
  content,
} from './SideSheet.css';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

interface SideSheetContextValue {
  onClose: () => void;
}

const SideSheetContext = createContext<SideSheetContextValue | null>(null);

const useSideSheetContext = () => {
  const context = useContext(SideSheetContext);
  if (process.env.NODE_ENV === 'development') {
    if (!context) {
      console.error(
        'SideSheet 서브 컴포넌트는 SideSheet 내부에서 사용되어야 합니다'
      );
    }
  }
  return context;
};

/** 화면 좌/우에서 슬라이드되는 시트 컴포넌트. Compound 패턴(SideSheet.Header/Content) 또는 Flat 패턴(title prop) 지원 */
export interface SideSheetProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'title'
> {
  /** 시트 표시 여부 */
  open: boolean;
  /** 시트 닫기 콜백 */
  onClose: () => void;
  /** Flat 모드: 시트 제목 */
  title?: ReactNode;
  /** 시트 콘텐츠 */
  children: ReactNode;
  /** 시트 너비 @default 'md' */
  width?: 'sm' | 'md' | 'lg' | 'full';
  /** 시트 출현 위치 @default 'right' */
  position?: 'left' | 'right';
  /** 배경 클릭으로 닫기 허용 @default true */
  closeOnBackdropClick?: boolean;
  /** ESC 키로 닫기 허용 @default true */
  closeOnEscape?: boolean;
  /** 닫기(X) 버튼 표시 @default true */
  showClose?: boolean;
  className?: string;
}

const SideSheetRoot = ({
  open,
  onClose,
  title,
  children,
  width = 'md',
  position = 'right',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showClose = false,
  className,
  ...props
}: SideSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const [shouldRender, setShouldRender] = useState(open);

  if (open && !shouldRender) {
    setShouldRender(true);
  }

  // 접근성 및 스크롤 제어
  useEffect(() => {
    if (!open) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement;
    const sheet = sheetRef.current;
    if (!sheet) return;

    // 포커스 트랩 설정
    const focusableElements = sheet.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements[0]) {
      focusableElements[0].focus();
    } else {
      sheet.setAttribute('tabindex', '-1');
      sheet.focus();
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

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

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
      previousActiveElementRef.current?.focus();
    };
  }, [open, closeOnEscape, onClose]);

  // 애니메이션 종료 처리
  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.target !== e.currentTarget) return;

    if (!open) {
      setShouldRender(false);
    }
  };

  const contextValue = useMemo(() => ({ onClose }), [onClose]);

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  const getAnimationClass = () => {
    if (position === 'left') {
      return !open ? sideSheetExitLeft : sideSheetEnterLeft;
    }
    return !open ? sideSheetExitRight : sideSheetEnterRight;
  };

  const sheetContent = (
    <SideSheetContext.Provider value={contextValue}>
      <div className={sideSheetContainer}>
        <div
          role="presentation"
          className={clsx(backdrop, !open ? backdropExit : backdropEnter)}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <div
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          onAnimationEnd={handleAnimationEnd}
          className={clsx(
            sideSheetStyle,
            positionStyles[position],
            widthStyles[width],
            getAnimationClass(),
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {title ? (
            <>
              <div className={header}>
                <h2 id={titleId} className={titleStyle}>
                  {title}
                </h2>
                {showClose && (
                  <IconButton
                    variant="dark"
                    buttonStyle="weak"
                    size="sm"
                    onClick={onClose}
                    aria-label="닫기"
                    className={closeButton}
                  >
                    <Icon name="close" size="sm" />
                  </IconButton>
                )}
              </div>
              <div className={content}>{children}</div>
            </>
          ) : (
            children
          )}
        </div>
      </div>
    </SideSheetContext.Provider>
  );

  return createPortal(sheetContent, document.body);
};

SideSheetRoot.displayName = 'SideSheet';

// Compound API 서브 컴포넌트들
/** SideSheet.Header — 시트 헤더 영역 */
export interface SideSheetHeaderProps extends HTMLAttributes<HTMLElement> {
  /** 헤더 콘텐츠 */
  children: ReactNode;
  /** 닫기(X) 버튼 표시 @default false */
  showClose?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const SideSheetHeader = forwardRef<HTMLElement, SideSheetHeaderProps>(
  ({ children, showClose = false, className, ...props }, ref) => {
    const context = useSideSheetContext();

    return (
      <header ref={ref} className={clsx(header, className)} {...props}>
        <div style={{ flex: 1 }}>{children}</div>
        {showClose && context && (
          <IconButton
            variant="dark"
            buttonStyle="weak"
            size="sm"
            onClick={context.onClose}
            aria-label="닫기"
            className={closeButton}
          >
            <Icon name="close" size="sm" />
          </IconButton>
        )}
      </header>
    );
  }
);

SideSheetHeader.displayName = 'SideSheetHeader';

/** SideSheet.Title — 시트 제목 */
export interface SideSheetTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** 제목 텍스트 */
  children: ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const SideSheetTitle = forwardRef<
  HTMLHeadingElement,
  SideSheetTitleProps
>(({ children, className, ...props }, ref) => {
  return (
    <h2 ref={ref} className={clsx(titleStyle, className)} {...props}>
      {children}
    </h2>
  );
});

SideSheetTitle.displayName = 'SideSheetTitle';

/** SideSheet.Content — 시트 본문 영역 */
export interface SideSheetContentProps extends HTMLAttributes<HTMLDivElement> {
  /** 본문 콘텐츠 */
  children: ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const SideSheetContent = forwardRef<
  HTMLDivElement,
  SideSheetContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx(content, className)} {...props}>
      {children}
    </div>
  );
});

SideSheetContent.displayName = 'SideSheetContent';

// ─── SideSheet = SideSheetRoot + Compound 서브 컴포넌트 ────────────────────────

export const SideSheet = Object.assign(SideSheetRoot, {
  Header: SideSheetHeader,
  Title: SideSheetTitle,
  Content: SideSheetContent,
});
