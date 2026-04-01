import {
  useState,
  useRef,
  useEffect,
  useId,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import clsx from 'clsx';
import {
  tooltipContainer,
  tooltip,
  positionStyles,
  arrow,
  arrowPositionStyles,
} from './Tooltip.css';

/** 호버/포커스 시 추가 정보를 표시하는 툴팁 컴포넌트. 제어/비제어 모드 지원 */
export interface TooltipProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'content'
> {
  /** 트리거 요소 (호버/포커스 시 툴팁 표시) */
  children: ReactNode;
  /** 툴팁에 표시할 내용 */
  content: ReactNode;

  // 제어 모드
  /** 제어 모드: 툴팁 표시 여부 */
  open?: boolean;
  /** 제어 모드: 툴팁 표시 상태 변경 핸들러 */
  onOpenChange?: (open: boolean) => void;

  // 공통 props
  /** 툴팁 위치 @default 'top' */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** 표시 지연 시간(ms) @default 200 */
  delay?: number;
  /** 비활성화 상태 @default false */
  disabled?: boolean;
  /** 화살표 표시 @default true */
  arrow?: boolean;
  className?: string;
}

export const Tooltip = ({
  children,
  content,
  open: controlledOpen,
  onOpenChange,
  position = 'top',
  delay = 200,
  disabled = false,
  arrow: showArrow = true,
  className,
  ...props
}: TooltipProps) => {
  // 비제어 모드용 내부 상태
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipId = useId();

  // 제어/비제어 판단
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  // 개발 환경 경고 - useEffect 밖으로 이동하면 매 렌더마다 실행됨
  // React Hook 규칙을 지키기 위해 컴포넌트 최상위에 배치

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const setOpen = (newOpen: boolean) => {
    // 비제어 모드: 내부 상태 업데이트
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }

    // onOpenChange 호출 (있는 경우)
    onOpenChange?.(newOpen);
  };

  const handleShow = () => {
    if (disabled) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (delay === 0) {
      setOpen(true);
    } else {
      timerRef.current = setTimeout(() => {
        setOpen(true);
      }, delay);
    }
  };

  const handleHide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setOpen(false);
  };

  return (
    <div
      className={clsx(tooltipContainer, className)}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
      aria-describedby={isOpen ? tooltipId : undefined}
      {...props}
    >
      {children}
      {isOpen && (
        <div
          id={tooltipId}
          role="tooltip"
          className={clsx(tooltip, positionStyles[position])}
        >
          {content}
          {showArrow && (
            <div className={clsx(arrow, arrowPositionStyles[position])} />
          )}
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
