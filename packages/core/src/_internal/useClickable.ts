import { useCallback } from 'react';

export interface UseClickableProps {
  /** 클릭 이벤트 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  /** 키보드 이벤트 핸들러 */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** ARIA role (기본값: 'button') */
  role?: string;
}

export interface UseClickableReturn {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
  role: string;
  tabIndex: number;
  'aria-disabled'?: boolean;
}

/**
 * 클릭 가능한 요소(div, span 등)에 버튼과 같은 인터랙션을 추가하는 Hook
 *
 * 주요 기능:
 * - 클릭 이벤트 핸들링
 * - 키보드 인터랙션 (Enter, Space)
 * - 접근성 속성 (role, tabIndex, aria-disabled)
 * - disabled 상태 관리
 *
 * @example
 * ```tsx
 * const MyClickableDiv = ({ onClick, disabled }) => {
 *   const clickableProps = useClickable({ onClick, disabled });
 *   return <div {...clickableProps}>클릭 가능한 영역</div>;
 * }
 * ```
 */
export const useClickable = ({
  onClick,
  onKeyDown,
  disabled = false,
  role = 'button',
}: UseClickableProps): UseClickableReturn => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }
      onClick?.(event);
    },
    [onClick, disabled]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      // 사용자 정의 onKeyDown이 있으면 먼저 호출
      onKeyDown?.(event);

      if (disabled) {
        return;
      }

      // Enter 또는 Space 키 입력 시 onClick 호출
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Space 키의 기본 스크롤 동작 방지
        onClick?.(event);
      }
    },
    [onClick, onKeyDown, disabled]
  );

  return {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role,
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled ? true : undefined,
  };
};
