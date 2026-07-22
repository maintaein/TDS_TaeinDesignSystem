import { describe, it, expect, vi, afterEach } from 'vitest';
import { createElement, type ReactNode } from 'react';
import { renderHook } from '@testing-library/react';
import { createOverlayContext } from './createOverlayContext';

describe('createOverlayContext', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Provider 안에서 사용하면 제공된 값을 반환한다', () => {
    const [TestContext, useTestContext] = createOverlayContext<{
      value: string;
    }>('Test');

    const wrapper = ({ children }: { children: ReactNode }) =>
      createElement(
        TestContext.Provider,
        { value: { value: 'hello' } },
        children
      );

    const { result } = renderHook(() => useTestContext(), { wrapper });

    expect(result.current).toEqual({ value: 'hello' });
  });

  it('Provider 밖에서 사용하면 null을 반환한다', () => {
    const [, useTestContext] = createOverlayContext<{ value: string }>('Test');

    const { result } = renderHook(() => useTestContext());

    expect(result.current).toBeNull();
  });

  it('개발 환경에서 Provider 밖에 쓰이면 console.error로 경고한다', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const [, useTestContext] = createOverlayContext<{ value: string }>('Test');
    renderHook(() => useTestContext());

    expect(consoleError).toHaveBeenCalledWith(
      'Test 서브 컴포넌트는 Test 내부에서 사용되어야 합니다'
    );

    process.env.NODE_ENV = originalEnv;
  });

  it('Provider 안에서는 경고하지 않는다', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const [TestContext, useTestContext] = createOverlayContext<{
      value: string;
    }>('Test');

    const wrapper = ({ children }: { children: ReactNode }) =>
      createElement(
        TestContext.Provider,
        { value: { value: 'hello' } },
        children
      );

    renderHook(() => useTestContext(), { wrapper });

    expect(consoleError).not.toHaveBeenCalled();
  });
});
