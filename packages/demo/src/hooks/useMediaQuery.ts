import { useSyncExternalStore, useCallback } from 'react';

/**
 * 미디어 쿼리 매칭 여부를 반환하는 훅
 * useSyncExternalStore를 사용하여 effect 내 setState 없이 구독
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener('change', callback);
      return () => mediaQuery.removeEventListener('change', callback);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot);
}

// 브레이크포인트 상수
export const breakpoints = {
  /** 1024px 이하: 햄버거 메뉴로 사이드바 관리 */
  compact: '(max-width: 1024px)',
  /** 1025px 이상: 사이드바 항상 표시 */
  desktop: '(min-width: 1025px)',
} as const;
