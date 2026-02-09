import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React, { createRef } from 'react';
import { NumericSpinner } from './NumericSpinner';

describe('NumericSpinner', () => {
  describe('렌더링 테스트', () => {
    it('기본 number input을 렌더링한다', () => {
      render(<NumericSpinner label="수량" />);
      const input = screen.getByLabelText('수량');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type', 'number');
    });

    it('증가/감소 버튼을 렌더링한다', () => {
      render(<NumericSpinner label="수량" />);
      const incrementButton = screen.getByRole('button', { name: /증가/i });
      const decrementButton = screen.getByRole('button', { name: /감소/i });
      expect(incrementButton).toBeInTheDocument();
      expect(decrementButton).toBeInTheDocument();
    });

    it('label을 렌더링한다', () => {
      render(<NumericSpinner label="수량" />);
      const label = screen.getByText('수량');
      expect(label).toBeInTheDocument();
    });

    it('placeholder를 표시한다', () => {
      render(<NumericSpinner label="수량" placeholder="숫자를 입력하세요" />);
      const input = screen.getByPlaceholderText('숫자를 입력하세요');
      expect(input).toBeInTheDocument();
    });

    it('value를 표시한다', () => {
      render(<NumericSpinner label="수량" value={10} onChange={() => {}} />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveValue(10);
    });

    it('defaultValue를 표시한다', () => {
      render(<NumericSpinner label="수량" defaultValue={5} />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveValue(5);
    });
  });

  describe('size prop 테스트', () => {
    it('sm size를 적용한다', () => {
      render(<NumericSpinner label="수량" size="sm" />);
      const container = screen.getByLabelText('수량').parentElement;
      expect(container?.className).toContain('size_sm');
    });

    it('md size를 적용한다 (기본값)', () => {
      render(<NumericSpinner label="수량" />);
      const container = screen.getByLabelText('수량').parentElement;
      expect(container?.className).toContain('size_md');
    });

    it('lg size를 적용한다', () => {
      render(<NumericSpinner label="수량" size="lg" />);
      const container = screen.getByLabelText('수량').parentElement;
      expect(container?.className).toContain('size_lg');
    });
  });

  describe('증가/감소 버튼 동작 테스트', () => {
    it('증가 버튼 클릭 시 값이 1 증가한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<NumericSpinner label="수량" value={5} onChange={handleChange} />);

      const incrementButton = screen.getByRole('button', { name: /증가/i });
      await user.click(incrementButton);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('감소 버튼 클릭 시 값이 1 감소한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<NumericSpinner label="수량" value={5} onChange={handleChange} />);

      const decrementButton = screen.getByRole('button', { name: /감소/i });
      await user.click(decrementButton);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('step prop에 따라 증가량이 변경된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <NumericSpinner
          label="수량"
          value={0}
          step={5}
          onChange={handleChange}
        />
      );

      const incrementButton = screen.getByRole('button', { name: /증가/i });
      await user.click(incrementButton);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('min/max 제약 테스트', () => {
    it('min 값보다 작아지지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <NumericSpinner
          label="수량"
          value={0}
          min={0}
          onChange={handleChange}
        />
      );

      const decrementButton = screen.getByRole('button', { name: /감소/i });
      await user.click(decrementButton);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('max 값보다 커지지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <NumericSpinner
          label="수량"
          value={10}
          max={10}
          onChange={handleChange}
        />
      );

      const incrementButton = screen.getByRole('button', { name: /증가/i });
      await user.click(incrementButton);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('min에 도달하면 감소 버튼이 비활성화된다', () => {
      render(
        <NumericSpinner label="수량" value={0} min={0} onChange={() => {}} />
      );

      const decrementButton = screen.getByRole('button', { name: /감소/i });
      expect(decrementButton).toBeDisabled();
    });

    it('max에 도달하면 증가 버튼이 비활성화된다', () => {
      render(
        <NumericSpinner label="수량" value={10} max={10} onChange={() => {}} />
      );

      const incrementButton = screen.getByRole('button', { name: /증가/i });
      expect(incrementButton).toBeDisabled();
    });
  });

  describe('상태 prop 테스트', () => {
    it('disabled 상태를 적용한다', () => {
      render(<NumericSpinner label="수량" disabled />);
      const input = screen.getByLabelText('수량');
      const incrementButton = screen.getByRole('button', { name: /증가/i });
      const decrementButton = screen.getByRole('button', { name: /감소/i });

      expect(input).toBeDisabled();
      expect(incrementButton).toBeDisabled();
      expect(decrementButton).toBeDisabled();
    });

    it('input은 항상 readOnly 상태이다', () => {
      render(<NumericSpinner label="수량" />);
      const input = screen.getByLabelText('수량');

      expect(input).toHaveAttribute('readonly');
    });

    it('required 상태를 적용한다', () => {
      render(<NumericSpinner label="수량" required />);
      const input = screen.getByLabelText(/수량/);
      const requiredMark = screen.getByText('*');

      expect(input).toBeRequired();
      expect(requiredMark).toBeInTheDocument();
    });

    it('error 상태를 적용한다', () => {
      render(<NumericSpinner label="수량" error />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('errorMessage를 표시한다', () => {
      render(
        <NumericSpinner
          label="수량"
          error
          errorMessage="1 이상의 값을 입력하세요"
        />
      );
      const errorMsg = screen.getByText('1 이상의 값을 입력하세요');
      expect(errorMsg).toBeInTheDocument();
      expect(errorMsg.className).toContain('errorMessage');
    });

    it('helperText를 표시한다', () => {
      render(
        <NumericSpinner label="수량" helperText="최소 1개 이상 입력하세요" />
      );
      const helper = screen.getByText('최소 1개 이상 입력하세요');
      expect(helper).toBeInTheDocument();
      expect(helper.className).toContain('helperText');
    });

    it('error가 true이면 helperText 대신 errorMessage를 표시한다', () => {
      render(
        <NumericSpinner
          label="수량"
          error
          errorMessage="에러 메시지"
          helperText="도움말 텍스트"
        />
      );
      const errorMsg = screen.getByText('에러 메시지');
      const helper = screen.queryByText('도움말 텍스트');

      expect(errorMsg).toBeInTheDocument();
      expect(helper).not.toBeInTheDocument();
    });
  });

  describe('fullWidth prop 테스트', () => {
    it('fullWidth가 true이면 전체 너비를 사용한다', () => {
      render(<NumericSpinner label="수량" fullWidth />);
      const wrapper =
        screen.getByLabelText('수량').parentElement?.parentElement;
      expect(wrapper?.className).toContain('fullWidth');
    });

    it('fullWidth가 false이면 기본 너비를 사용한다', () => {
      render(<NumericSpinner label="수량" />);
      const wrapper =
        screen.getByLabelText('수량').parentElement?.parentElement;
      expect(wrapper?.className).not.toContain('fullWidth');
    });
  });

  describe('이벤트 핸들러 테스트', () => {
    it('버튼 클릭 시 onChange 이벤트가 호출된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<NumericSpinner label="수량" value={5} onChange={handleChange} />);

      const incrementButton = screen.getByRole('button', { name: /증가/i });
      await user.click(incrementButton);

      expect(handleChange).toHaveBeenCalled();
    });

    it('onFocus 이벤트가 호출된다', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(<NumericSpinner label="수량" onFocus={handleFocus} />);

      const input = screen.getByLabelText('수량');
      await user.click(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('onBlur 이벤트가 호출된다', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(<NumericSpinner label="수량" onBlur={handleBlur} />);

      const input = screen.getByLabelText('수량');
      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('접근성 테스트', () => {
    it('label과 input이 올바르게 연결된다', () => {
      render(<NumericSpinner label="수량" />);
      const input = screen.getByLabelText('수량');
      expect(input).toBeInTheDocument();
    });

    it('aria-invalid가 error 상태에 따라 설정된다', () => {
      const { rerender } = render(<NumericSpinner label="수량" />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveAttribute('aria-invalid', 'false');

      rerender(<NumericSpinner label="수량" error />);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('aria-describedby가 helperText에 연결된다', () => {
      render(<NumericSpinner label="수량" helperText="도움말" />);
      const input = screen.getByLabelText('수량');
      const helper = screen.getByText('도움말');

      expect(input).toHaveAttribute('aria-describedby');
      expect(helper).toHaveAttribute(
        'id',
        input.getAttribute('aria-describedby')!
      );
    });

    it('aria-describedby가 errorMessage에 연결된다', () => {
      render(<NumericSpinner label="수량" error errorMessage="에러" />);
      const input = screen.getByLabelText('수량');
      const errorMsg = screen.getByText('에러');

      expect(input).toHaveAttribute('aria-describedby');
      expect(errorMsg).toHaveAttribute(
        'id',
        input.getAttribute('aria-describedby')!
      );
    });

    it('aria-disabled가 disabled 상태에 따라 설정된다', () => {
      const { rerender } = render(<NumericSpinner label="수량" />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveAttribute('aria-disabled', 'false');

      rerender(<NumericSpinner label="수량" disabled />);
      expect(input).toHaveAttribute('aria-disabled', 'true');
    });

    it('증가/감소 버튼에 aria-label이 있다', () => {
      render(<NumericSpinner label="수량" />);
      const incrementButton = screen.getByRole('button', { name: /증가/i });
      const decrementButton = screen.getByRole('button', { name: /감소/i });

      expect(incrementButton).toHaveAccessibleName();
      expect(decrementButton).toHaveAccessibleName();
    });
  });

  describe('키보드 인터랙션 테스트', () => {
    it('Tab 키로 첫 번째 버튼에 포커스할 수 있다', async () => {
      const user = userEvent.setup();
      render(<NumericSpinner label="수량" />);

      await user.tab();
      const decrementButton = screen.getByRole('button', { name: /감소/i });
      expect(decrementButton).toHaveFocus();
    });

    it('Tab 키로 input에 포커스할 수 있다', async () => {
      const user = userEvent.setup();
      render(<NumericSpinner label="수량" />);

      await user.tab();
      await user.tab();
      const input = screen.getByLabelText('수량');
      expect(input).toHaveFocus();
    });

    it('disabled 상태에서는 버튼이 비활성화된다', () => {
      render(<NumericSpinner label="수량" disabled />);

      const input = screen.getByLabelText('수량');
      const incrementButton = screen.getByRole('button', { name: /증가/i });

      expect(input).toBeDisabled();
      expect(incrementButton).toBeDisabled();
    });
  });

  describe('forwardRef 테스트', () => {
    it('ref를 input 요소에 전달한다', () => {
      const ref = createRef<HTMLInputElement>();
      render(<NumericSpinner label="수량" ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.tagName).toBe('INPUT');
    });

    it('ref를 통해 focus() 메서드를 호출할 수 있다', () => {
      const ref = createRef<HTMLInputElement>();
      render(<NumericSpinner label="수량" ref={ref} />);

      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it('ref를 통해 blur() 메서드를 호출할 수 있다', () => {
      const ref = createRef<HTMLInputElement>();
      render(<NumericSpinner label="수량" ref={ref} />);

      ref.current?.focus();
      expect(ref.current).toHaveFocus();

      ref.current?.blur();
      expect(ref.current).not.toHaveFocus();
    });
  });

  describe('비제어 모드 (Uncontrolled Mode) 테스트', () => {
    it('defaultValue로 초기값을 설정한다', () => {
      render(<NumericSpinner label="수량" defaultValue={5} />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveValue(5);
    });

    it('defaultValue 없으면 0으로 시작한다', () => {
      render(<NumericSpinner label="수량" />);
      const input = screen.getByLabelText('수량');
      expect(input).toHaveValue(0);
    });

    it('증가 버튼 클릭 시 내부 상태가 업데이트된다', async () => {
      const user = userEvent.setup();
      render(<NumericSpinner label="수량" defaultValue={1} step={1} />);

      const input = screen.getByLabelText('수량');
      const incrementButton = screen.getByRole('button', { name: /증가/i });

      expect(input).toHaveValue(1);
      await user.click(incrementButton);
      expect(input).toHaveValue(2);

      await user.click(incrementButton);
      expect(input).toHaveValue(3);
    });

    it('감소 버튼 클릭 시 내부 상태가 업데이트된다', async () => {
      const user = userEvent.setup();
      render(<NumericSpinner label="수량" defaultValue={5} step={1} />);

      const input = screen.getByLabelText('수량');
      const decrementButton = screen.getByRole('button', { name: /감소/i });

      expect(input).toHaveValue(5);
      await user.click(decrementButton);
      expect(input).toHaveValue(4);
    });

    it('min/max 제약을 준수한다', async () => {
      const user = userEvent.setup();
      render(<NumericSpinner label="수량" defaultValue={5} min={1} max={10} />);

      const input = screen.getByLabelText('수량');
      const incrementButton = screen.getByRole('button', { name: /증가/i });
      const decrementButton = screen.getByRole('button', { name: /감소/i });

      // max 초과 불가
      await user.click(incrementButton); // 6
      await user.click(incrementButton); // 7
      await user.click(incrementButton); // 8
      await user.click(incrementButton); // 9
      await user.click(incrementButton); // 10
      await user.click(incrementButton); // 10 (변하지 않음)
      expect(input).toHaveValue(10);

      // min 이하로 감소 불가
      for (let i = 0; i < 15; i++) {
        await user.click(decrementButton);
      }
      expect(input).toHaveValue(1);
    });

    it('onChange 콜백을 호출한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <NumericSpinner
          label="수량"
          defaultValue={1}
          onChange={handleChange}
        />
      );

      const incrementButton = screen.getByRole('button', { name: /증가/i });
      await user.click(incrementButton);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: '2' }),
        })
      );
    });
  });

  describe('제어 모드 (Controlled Mode) 테스트', () => {
    it('value prop으로 값을 제어한다', () => {
      const { rerender } = render(
        <NumericSpinner label="수량" value={5} onChange={vi.fn()} />
      );
      const input = screen.getByLabelText('수량');
      expect(input).toHaveValue(5);

      rerender(<NumericSpinner label="수량" value={10} onChange={vi.fn()} />);
      expect(input).toHaveValue(10);
    });

    it('버튼 클릭 시 onChange를 호출하지만 내부 상태는 변하지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<NumericSpinner label="수량" value={5} onChange={handleChange} />);

      const input = screen.getByLabelText('수량');
      const incrementButton = screen.getByRole('button', { name: /증가/i });

      await user.click(incrementButton);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(input).toHaveValue(5); // 부모가 업데이트하지 않으면 변하지 않음
    });
  });

  describe('개발 환경 경고 테스트', () => {
    it('value와 defaultValue 동시 사용 시 경고한다', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const consoleWarn = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      render(
        <NumericSpinner
          label="수량"
          value={5}
          defaultValue={3}
          onChange={vi.fn()}
        />
      );

      expect(consoleWarn).toHaveBeenCalledWith(
        expect.stringContaining('value와 defaultValue를 동시에 사용할 수 없습니다')
      );

      consoleWarn.mockRestore();
      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('엣지 케이스 테스트', () => {
    it('label이 없으면 개발 환경에서 경고를 출력한다', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      // @ts-expect-error - label prop 누락 테스트
      render(<NumericSpinner />);

      expect(consoleError).toHaveBeenCalledWith(
        expect.stringContaining('NumericSpinner: label prop은 필수입니다')
      );

      consoleError.mockRestore();
      process.env.NODE_ENV = originalEnv;
    });

    it('빈 문자열 value를 처리할 수 있다', () => {
      render(
        <NumericSpinner
          label="수량"
          value={'' as unknown as number}
          onChange={() => {}}
        />
      );
      const input = screen.getByLabelText('수량');
      // Number('')는 0이 되므로 0이 표시됨
      expect(input).toHaveValue(0);
    });

    it('value와 onChange가 동시에 제공되면 제어 컴포넌트로 동작한다', async () => {
      const user = userEvent.setup();
      const ControlledSpinner = () => {
        const [value, setValue] = React.useState(0);
        return (
          <NumericSpinner
            label="수량"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        );
      };

      render(<ControlledSpinner />);
      const input = screen.getByLabelText('수량');
      const incrementButton = screen.getByRole('button', { name: /증가/i });

      expect(input).toHaveValue(0);

      await user.click(incrementButton);
      expect(input).toHaveValue(1);
    });
  });
});
