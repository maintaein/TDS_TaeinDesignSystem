import { useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react';
import clsx from 'clsx';
import {
  snackbar,
  severityStyles,
  positionStyles,
  content,
  message as messageClass,
  actions,
  closeButton,
} from './Snackbar.css';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

/** 화면 모서리에 일시적으로 표시되는 알림 컴포넌트 */
export interface SnackbarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'content'
> {
  /** 스낵바 표시 여부 */
  open: boolean;
  /** 알림 메시지 */
  message: ReactNode;
  /** 알림 유형 (색상 및 아이콘 결정) @default 'info' */
  severity?: 'success' | 'error' | 'warning' | 'info';
  /** 화면 내 표시 위치 @default 'bottom-center' */
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  /** 자동 닫힘 시간(ms). null이면 자동 닫힘 비활성화 @default 5000 */
  autoHideDuration?: number | null;
  /** 닫기 콜백 */
  onClose?: () => void;
  /** 메시지 옆 액션 영역 (버튼 등) */
  action?: ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!open) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    if (autoHideDuration !== null && onClose) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, autoHideDuration);

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) {
    return null;
  }

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className={clsx(
        snackbar,
        severityStyles[severity],
        positionStyles[position],
        className
      )}
      {...props}
    >
      <div className={content}>
        <span className={messageClass}>{message}</span>
        <div className={actions}>
          {action}
          <IconButton
            variant="dark"
            buttonStyle="weak"
            size="sm"
            onClick={handleClose}
            aria-label="닫기"
            className={closeButton}
          >
            <Icon name="close" size="sm" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

Snackbar.displayName = 'Snackbar';
