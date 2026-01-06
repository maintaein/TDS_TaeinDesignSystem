import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { IconButton } from './IconButton';

const TestIcon = () => (
  <svg data-testid="test-icon" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe('IconButton', () => {
  describe('렌더링 테스트', () => {
    it('기본적으로 렌더링된다', () => {
      render(
        <IconButton aria-label="테스트 버튼">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button', { name: '테스트 버튼' });
      expect(button).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('aria-label이 필수이다', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      render(
        <IconButton aria-label="">
          <TestIcon />
        </IconButton>
      );

      expect(consoleError).toHaveBeenCalledWith(
        expect.stringContaining(
          'IconButton: aria-label 또는 aria-labelledby가 필요합니다'
        )
      );

      consoleError.mockRestore();
      process.env.NODE_ENV = originalEnv;
    });

    it('aria-labelledby가 제공되면 aria-label 없이도 렌더링된다', () => {
      render(
        <>
          <span id="button-label">삭제</span>
          <IconButton aria-labelledby="button-label">
            <TestIcon />
          </IconButton>
        </>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-labelledby', 'button-label');
    });
  });

  describe('variant prop 테스트', () => {
    it('variant="primary"를 적용한다', () => {
      render(
        <IconButton variant="primary" aria-label="Primary">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('primary');
    });

    it('variant="dark"를 적용한다', () => {
      render(
        <IconButton variant="dark" aria-label="Dark">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('dark');
    });

    it('variant="danger"를 적용한다', () => {
      render(
        <IconButton variant="danger" aria-label="Danger">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('danger');
    });

    it('variant="light"를 적용한다', () => {
      render(
        <IconButton variant="light" aria-label="Light">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('light');
    });
  });

  describe('buttonStyle prop 테스트', () => {
    it('buttonStyle="fill"을 적용한다', () => {
      render(
        <IconButton buttonStyle="fill" aria-label="Fill">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('fill');
    });

    it('buttonStyle="weak"를 적용한다', () => {
      render(
        <IconButton buttonStyle="weak" aria-label="Weak">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('weak');
    });
  });

  describe('size prop 테스트', () => {
    it('size="sm"을 적용한다', () => {
      render(
        <IconButton size="sm" aria-label="Small">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('sm');
    });

    it('size="md"를 기본값으로 적용한다', () => {
      render(
        <IconButton aria-label="Medium">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('md');
    });

    it('size="lg"를 적용한다', () => {
      render(
        <IconButton size="lg" aria-label="Large">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('lg');
    });

    it('size="xl"을 적용한다', () => {
      render(
        <IconButton size="xl" aria-label="Extra Large">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('xl');
    });
  });

  describe('상태 prop 테스트', () => {
    it('disabled 상태를 적용한다', () => {
      render(
        <IconButton disabled aria-label="Disabled">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('loading 상태를 적용한다', () => {
      render(
        <IconButton loading aria-label="Loading">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('loading 상태일 때 아이콘 대신 스피너를 표시한다', () => {
      render(
        <IconButton loading aria-label="Loading">
          <TestIcon />
        </IconButton>
      );

      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });
  });

  describe('이벤트 핸들러 테스트', () => {
    it('onClick 이벤트가 호출된다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} aria-label="Click">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disabled 상태에서는 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} disabled aria-label="Disabled">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('loading 상태에서는 onClick이 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} loading aria-label="Loading">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('onFocus 이벤트가 호출된다', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(
        <IconButton onFocus={handleFocus} aria-label="Focus">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      await user.tab();

      expect(handleFocus).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it('onBlur 이벤트가 호출된다', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(
        <IconButton onBlur={handleBlur} aria-label="Blur">
          <TestIcon />
        </IconButton>
      );

      await user.tab();
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('접근성 테스트', () => {
    it('button role을 가진다', () => {
      render(
        <IconButton aria-label="Accessible">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('aria-label이 올바르게 설정된다', () => {
      render(
        <IconButton aria-label="삭제 버튼">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button', { name: '삭제 버튼' });
      expect(button).toHaveAccessibleName('삭제 버튼');
    });

    it('disabled 상태가 스크린 리더에 전달된다', () => {
      render(
        <IconButton disabled aria-label="Disabled">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('loading 상태가 스크린 리더에 전달된다', () => {
      render(
        <IconButton loading aria-label="Loading">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('아이콘은 스크린 리더에서 숨겨진다', () => {
      render(
        <IconButton aria-label="Icon Hidden">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      const iconWrapper = button.querySelector('[aria-hidden="true"]');
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  describe('키보드 인터랙션 테스트', () => {
    it('Tab 키로 포커스할 수 있다', async () => {
      const user = userEvent.setup();

      render(
        <IconButton aria-label="Focus">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      await user.tab();

      expect(button).toHaveFocus();
    });

    it('Enter 키로 클릭할 수 있다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} aria-label="Enter">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalled();
    });

    it('Space 키로 클릭할 수 있다', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <IconButton onClick={handleClick} aria-label="Space">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');

      expect(handleClick).toHaveBeenCalled();
    });

    it('disabled 상태에서는 포커스할 수 없다', () => {
      render(
        <IconButton disabled aria-label="No Focus">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('forwardRef 테스트', () => {
    it('ref를 button 요소에 전달한다', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <IconButton ref={ref} aria-label="Ref">
          <TestIcon />
        </IconButton>
      );

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('ref를 통해 focus()를 호출할 수 있다', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <IconButton ref={ref} aria-label="Focus Ref">
          <TestIcon />
        </IconButton>
      );

      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it('ref를 통해 blur()를 호출할 수 있다', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <IconButton ref={ref} aria-label="Blur Ref">
          <TestIcon />
        </IconButton>
      );

      ref.current?.focus();
      expect(ref.current).toHaveFocus();

      ref.current?.blur();
      expect(ref.current).not.toHaveFocus();
    });
  });

  describe('추가 HTML 속성 테스트', () => {
    it('type 속성을 전달할 수 있다', () => {
      render(
        <IconButton type="submit" aria-label="Submit">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('className을 추가할 수 있다', () => {
      render(
        <IconButton className="custom-class" aria-label="Custom">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('custom-class');
    });

    it('data 속성을 전달할 수 있다', () => {
      render(
        <IconButton data-testid="custom-button" aria-label="Data">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByTestId('custom-button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('엣지 케이스 테스트', () => {
    it('children이 ReactNode를 렌더링한다', () => {
      render(
        <IconButton aria-label="Complex Icon">
          <div data-testid="complex-icon">
            <span>복잡한 아이콘</span>
          </div>
        </IconButton>
      );

      expect(screen.getByTestId('complex-icon')).toBeInTheDocument();
    });

    it('variant와 buttonStyle을 동시에 적용한다', () => {
      render(
        <IconButton variant="danger" buttonStyle="weak" aria-label="Combined">
          <TestIcon />
        </IconButton>
      );

      const button = screen.getByRole('button');
      expect(button.className).toContain('danger');
      expect(button.className).toContain('weak');
    });

    it('모든 size와 variant 조합이 작동한다', () => {
      const sizes = ['sm', 'md', 'lg', 'xl'] as const;
      const variants = ['primary', 'dark', 'danger', 'light'] as const;

      sizes.forEach((size) => {
        variants.forEach((variant) => {
          const { unmount } = render(
            <IconButton
              size={size}
              variant={variant}
              aria-label={`${size}-${variant}`}
            >
              <TestIcon />
            </IconButton>
          );

          const button = screen.getByRole('button');
          expect(button).toBeInTheDocument();
          unmount();
        });
      });
    });
  });
});
