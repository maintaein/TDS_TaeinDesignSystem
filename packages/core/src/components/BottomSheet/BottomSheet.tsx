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
} from './BottomSheet.css';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

interface BottomSheetContextValue {
  onClose: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextValue | null>(null);

const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (process.env.NODE_ENV === 'development') {
    if (!context) {
      console.error('BottomSheet 서브 컴포넌트는 BottomSheet 내부에서 사용되어야 합니다');
    }
  }
  return context;
};

/** 화면 하단에서 올라오는 시트 컴포넌트. Compound 패턴(BottomSheet.Header/Content) 또는 Flat 패턴(title prop) 지원 */
export interface BottomSheetProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'title'
> {
  /** 시트 표시 여부 */
  open: boolean;
  /** 시트 닫기 콜백 */
  onClose: () => void;
  /** Flat 모드: 시트 제목. 설정 시 자동으로 헤더 생성 */
  title?: ReactNode;
  /** 시트 콘텐츠 */
  children: ReactNode;
  /** 시트 높이 @default 'auto' */
  height?: 'auto' | 'sm' | 'md' | 'lg' | 'full';
  /** 배경 클릭으로 닫기 허용 @default true */
  closeOnBackdropClick?: boolean;
  /** ESC 키로 닫기 허용 @default true */
  closeOnEscape?: boolean;
  /** 상단 드래그 핸들 표시 @default true */
  showHandle?: boolean;
  /** 닫기(X) 버튼 표시 @default false */
  showClose?: boolean;
  /** 드래그로 닫기 허용 @default true */
  enableDrag?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

const BottomSheetRoot = ({
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
  const sheetRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const startYRef = useRef<number>(0);
  const isDraggingRef = useRef(false);

  const [shouldRender, setShouldRender] = useState(open);

  if (open && !shouldRender) {
    setShouldRender(true);
  }

  //접근성 및 스크롤 제어
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

  //드래그 제어 로직
  useEffect(() => {
    if (!enableDrag || !open) return;

    const sheet = sheetRef.current;
    if (!sheet) return;

    const finishDrag = (diff: number) => {
      isDraggingRef.current = false;

      if (diff > 100) {
        sheet.style.transition = 'transform 0.2s ease-out';
        sheet.style.transform = 'translateY(100%)';

        const handleTransitionEnd = () => {
          sheet.removeEventListener('transitionend', handleTransitionEnd);
          sheet.style.transition = '';
          sheet.style.transform = '';
          sheet.style.animation = '';
          // shouldRender를 먼저 false로 만들어 언마운트 후, 다음 프레임에서 onClose 호출
          // 이렇게 해야 onClose → open=false로 인한 exit 애니메이션 재생을 방지
          setShouldRender(false);
          requestAnimationFrame(() => onClose());
        };
        sheet.addEventListener('transitionend', handleTransitionEnd);
      } else {
        sheet.style.transition = 'transform 0.2s ease-out';
        sheet.style.transform = 'translateY(0)';
        const handleTransitionEnd = () => {
          sheet.removeEventListener('transitionend', handleTransitionEnd);
          sheet.style.transition = '';
        };
        sheet.addEventListener('transitionend', handleTransitionEnd);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startYRef.current = e.touches[0].clientY;
      isDraggingRef.current = true;
      sheet.style.transition = '';
      sheet.style.animation = 'none';
      sheet.style.transform = 'translateY(0)';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const diff = e.touches[0].clientY - startYRef.current;
      if (diff > 0) {
        sheet.style.transform = `translateY(${diff}px)`;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const diff = e.changedTouches[0].clientY - startYRef.current;
      finishDrag(diff);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      startYRef.current = e.clientY;
      isDraggingRef.current = true;
      sheet.style.transition = '';
      sheet.style.animation = 'none';
      sheet.style.transform = 'translateY(0)';
    };

    // mousemove/mouseup은 document에 등록 — 마우스가 시트 밖으로 나가도 감지
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const diff = e.clientY - startYRef.current;
      if (diff > 0) {
        sheet.style.transform = `translateY(${diff}px)`;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const diff = e.clientY - startYRef.current;
      finishDrag(diff);
    };

    sheet.addEventListener('touchstart', handleTouchStart, { passive: true });
    sheet.addEventListener('touchmove', handleTouchMove, { passive: true });
    sheet.addEventListener('touchend', handleTouchEnd, { passive: true });
    sheet.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      sheet.removeEventListener('touchstart', handleTouchStart);
      sheet.removeEventListener('touchmove', handleTouchMove);
      sheet.removeEventListener('touchend', handleTouchEnd);
      sheet.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enableDrag, open, onClose]);

  //애니메이션 종료 처리
  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.target !== e.currentTarget) return;

    if (!open) {
      setShouldRender(false);
      // 인라인 스타일 초기화, 다음에 열릴 때 대비!
      if (sheetRef.current) {
        sheetRef.current.style.transform = '';
      }
    }
  };
  const contextValue = useMemo(() => ({ onClose }), [onClose]);

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  const sheetContent = (
    <BottomSheetContext.Provider value={contextValue}>
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
          {showHandle && <div className={handle} data-testid="bottomsheet-handle" />}

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
    </BottomSheetContext.Provider>
  );

  return createPortal(sheetContent, document.body);
};

BottomSheetRoot.displayName = 'BottomSheet';

// Compound API 서브 컴포넌트들
/** BottomSheet 헤더 영역. Compound 패턴에서 사용 */
export interface BottomSheetHeaderProps extends HTMLAttributes<HTMLElement> {
  /** 헤더 콘텐츠 */
  children: ReactNode;
  /** 닫기(X) 버튼 표시 @default false */
  showClose?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const BottomSheetHeader = forwardRef<HTMLElement, BottomSheetHeaderProps>(
  ({ children, showClose = false, className, ...props }, ref) => {
    const context = useBottomSheetContext();

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

BottomSheetHeader.displayName = 'BottomSheetHeader';

/** BottomSheet 제목. Compound 패턴에서 사용 */
export interface BottomSheetTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** 제목 텍스트 */
  children: ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const BottomSheetTitle = forwardRef<HTMLHeadingElement, BottomSheetTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2 ref={ref} className={clsx(titleStyle, className)} {...props}>
        {children}
      </h2>
    );
  }
);

BottomSheetTitle.displayName = 'BottomSheetTitle';

/** BottomSheet 본문 영역. Compound 패턴에서 사용 */
export interface BottomSheetContentProps extends HTMLAttributes<HTMLDivElement> {
  /** 본문 콘텐츠 */
  children: ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const BottomSheetContent = forwardRef<HTMLDivElement, BottomSheetContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(content, className)} {...props}>
        {children}
      </div>
    );
  }
);

BottomSheetContent.displayName = 'BottomSheetContent';


// ─── BottomSheet = BottomSheetRoot + Compound 서브 컴포넌트 ────────────────────────

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Header: BottomSheetHeader,
  Title: BottomSheetTitle,
  Content: BottomSheetContent,
});
