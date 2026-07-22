import { createContext, useContext } from 'react';

/**
 * 오버레이(Modal/BottomSheet/SideSheet 등)의 Compound 서브 컴포넌트가
 * 부모와 상태(onClose 등)를 공유하기 위한 Context + 가드 훅 쌍을 만든다.
 * Provider 밖에서 훅을 쓰면 개발 환경에서 console.error로 경고한다.
 */
export const createOverlayContext = <T>(componentName: string) => {
  const Context = createContext<T | null>(null);

  const useOverlayContext = (): T | null => {
    const context = useContext(Context);

    if (process.env.NODE_ENV === 'development') {
      if (!context) {
        console.error(
          `${componentName} 서브 컴포넌트는 ${componentName} 내부에서 사용되어야 합니다`
        );
      }
    }

    return context;
  };

  return [Context, useOverlayContext] as const;
};
