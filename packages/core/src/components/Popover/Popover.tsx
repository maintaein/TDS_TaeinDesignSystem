import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import clsx from 'clsx';
import {
  popoverContainer,
  popover,
  positionStyles,
  arrow as arrowStyle,
  arrowPositionStyles,
} from './Popover.css';

/** 트리거 요소 근처에 떠 있는 콘텐츠를 표시하는 팝오버 컴포넌트. 제어/비제어 모드 지원 */
export interface PopoverProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'content'
> {
  /** 트리거 요소 (클릭 시 팝오버 표시) */
  children: ReactNode;
  /** 팝오버에 표시할 콘텐츠 */
  content: ReactNode;
  /** 제어 모드: 팝오버 표시 여부 */
  open?: boolean;
  /** 제어 모드: 표시 상태 변경 핸들러 */
  onOpenChange?: (open: boolean) => void;
  /** 팝오버 위치 @default 'bottom' */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** 외부 클릭 시 닫기 @default true */
  closeOnOutsideClick?: boolean;
  /** ESC 키로 닫기 @default true */
  closeOnEscape?: boolean;
  /** 화살표 표시 @default true */
  arrow?: boolean;
  /** 팝오버 최대 너비 (CSS 단위) */
  maxWidth?: string;
  /** 비활성화 상태 @default false */
  disabled?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

export const Popover = ({
  children,
  content,
  open: controlledOpen,
  onOpenChange,
  position = 'bottom',
  closeOnOutsideClick = true,
  closeOnEscape = true,
  arrow: showArrow = false,
  maxWidth,
  disabled = false,
  className,
  ...props
}: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  const handleTriggerClick = () => {
    if (disabled) return;
    setOpen(!isOpen);
  };

  // 바깥 클릭 감지
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeOnOutsideClick, setOpen]);

  // ESC 키 감지
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        // 트리거로 포커스 복귀
        const trigger = triggerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        trigger?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeOnEscape, setOpen]);

  // 포커스 관리
  useEffect(() => {
    if (!isOpen) return;

    // 다음 프레임에서 포커스 (렌더링 후)
    requestAnimationFrame(() => {
      const popoverEl = popoverRef.current;
      if (!popoverEl) return;

      const focusable = popoverEl.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) {
        focusable.focus();
      }
    });
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={clsx(popoverContainer, className)}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? popoverId : undefined}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          id={popoverId}
          role="dialog"
          className={clsx(popover, positionStyles[position])}
          style={maxWidth ? { maxWidth } : undefined}
        >
          {content}
          {showArrow && (
            <div
              data-popover-arrow
              className={clsx(arrowStyle, arrowPositionStyles[position])}
            />
          )}
        </div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';
