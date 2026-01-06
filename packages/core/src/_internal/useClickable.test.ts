import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useClickable } from './useClickable';

describe('useClickable', () => {
  describe('기본 동작', () => {
    it('onClick 핸들러를 반환해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      expect(result.current.onClick).toBeDefined();
      expect(typeof result.current.onClick).toBe('function');
    });

    it('onKeyDown 핸들러를 반환해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      expect(result.current.onKeyDown).toBeDefined();
      expect(typeof result.current.onKeyDown).toBe('function');
    });

    it('role을 반환해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      expect(result.current.role).toBe('button');
    });

    it('tabIndex를 반환해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      expect(result.current.tabIndex).toBe(0);
    });
  });

  describe('onClick 핸들러', () => {
    it('클릭 시 onClick이 호출되어야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      const mockEvent = {
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLElement>;

      result.current.onClick(mockEvent);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith(mockEvent);
    });

    it('disabled가 true일 때 onClick이 호출되지 않아야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, disabled: true }));

      const mockEvent = {
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLElement>;

      result.current.onClick(mockEvent);

      expect(onClick).not.toHaveBeenCalled();
    });

    it('onClick이 제공되지 않았을 때 에러가 발생하지 않아야 한다', () => {
      const { result } = renderHook(() => useClickable({}));

      const mockEvent = {
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLElement>;

      expect(() => result.current.onClick(mockEvent)).not.toThrow();
    });
  });

  describe('키보드 인터랙션', () => {
    it('Enter 키 입력 시 onClick이 호출되어야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      const mockEvent = {
        key: 'Enter',
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLElement>;

      result.current.onKeyDown(mockEvent);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('Space 키 입력 시 onClick이 호출되어야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      const mockEvent = {
        key: ' ',
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLElement>;

      result.current.onKeyDown(mockEvent);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('다른 키 입력 시 onClick이 호출되지 않아야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      const mockEvent = {
        key: 'Escape',
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLElement>;

      result.current.onKeyDown(mockEvent);

      expect(onClick).not.toHaveBeenCalled();
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });

    it('disabled가 true일 때 키보드 입력으로 onClick이 호출되지 않아야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, disabled: true }));

      const mockEvent = {
        key: 'Enter',
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLElement>;

      result.current.onKeyDown(mockEvent);

      expect(onClick).not.toHaveBeenCalled();
    });

    it('onKeyDown이 제공되었을 때 함께 호출되어야 한다', () => {
      const onClick = vi.fn();
      const onKeyDown = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, onKeyDown }));

      const mockEvent = {
        key: 'Enter',
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLElement>;

      result.current.onKeyDown(mockEvent);

      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Space 키 입력 시 기본 동작(스크롤)을 방지해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      const mockEvent = {
        key: ' ',
        currentTarget: document.createElement('div'),
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLElement>;

      result.current.onKeyDown(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe('disabled 상태', () => {
    it('disabled가 true일 때 tabIndex가 -1이어야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, disabled: true }));

      expect(result.current.tabIndex).toBe(-1);
    });

    it('disabled가 true일 때 aria-disabled가 true여야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, disabled: true }));

      expect(result.current['aria-disabled']).toBe(true);
    });

    it('disabled가 false일 때 aria-disabled가 undefined여야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, disabled: false }));

      expect(result.current['aria-disabled']).toBeUndefined();
    });
  });

  describe('커스텀 role', () => {
    it('role이 제공되었을 때 해당 role을 사용해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick, role: 'link' }));

      expect(result.current.role).toBe('link');
    });

    it('role이 제공되지 않았을 때 기본값 "button"을 사용해야 한다', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() => useClickable({ onClick }));

      expect(result.current.role).toBe('button');
    });
  });

  describe('useCallback 메모이제이션', () => {
    it('onClick 핸들러가 메모이제이션되어야 한다', () => {
      const onClick = vi.fn();
      const { result, rerender } = renderHook(() => useClickable({ onClick }));

      const firstOnClick = result.current.onClick;
      rerender();
      const secondOnClick = result.current.onClick;

      expect(firstOnClick).toBe(secondOnClick);
    });

    it('onKeyDown 핸들러가 메모이제이션되어야 한다', () => {
      const onClick = vi.fn();
      const { result, rerender } = renderHook(() => useClickable({ onClick }));

      const firstOnKeyDown = result.current.onKeyDown;
      rerender();
      const secondOnKeyDown = result.current.onKeyDown;

      expect(firstOnKeyDown).toBe(secondOnKeyDown);
    });

    it('onClick prop이 변경되면 핸들러가 재생성되어야 한다', () => {
      const onClick1 = vi.fn();
      const onClick2 = vi.fn();
      const { result, rerender } = renderHook(
        ({ onClick }) => useClickable({ onClick }),
        { initialProps: { onClick: onClick1 } }
      );

      const firstOnClick = result.current.onClick;

      rerender({ onClick: onClick2 });

      const secondOnClick = result.current.onClick;

      expect(firstOnClick).not.toBe(secondOnClick);
    });
  });
});
