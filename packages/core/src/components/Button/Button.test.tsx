import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import { Button } from './Button';
import * as styles from './Button.css'; // 클래스명 검증을 위해 스타일 임포트

describe('Button', () => {
  describe('렌더링 및 기본 설정', () => {
    it('children으로 전달된 텍스트를 렌더링한다', () => {
      render(<Button>클릭하세요</Button>);
      expect(screen.getByText('클릭하세요')).toBeInTheDocument();
    });

    it('기본 HTML type은 "button"이다', () => {
      render(<Button>버튼</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('ref가 button 엘리먼트를 올바르게 참조한다', () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Ref 버튼</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('스타일 및 Variant 테스트', () => {
    it('기본 스타일(fill + primary + md) 클래스가 적용된다', () => {
      render(<Button>기본</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles.buttonBase);
      expect(button).toHaveClass(styles.fillVariants.primary);
      expect(button).toHaveClass(styles.sizeVariants.md);
    });

    it('buttonStyle="weak"일 때 weakVariants 클래스가 적용된다', () => {
      render(
        <Button buttonStyle="weak" variant="danger">
          삭제
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles.weakVariants.danger);
    });

    it('모든 사이즈(sm, md, lg, xl) 클래스가 올바르게 적용된다', () => {
      const sizes = ['sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach((size) => {
        const { unmount } = render(<Button size={size}>{size}</Button>);
        expect(screen.getByRole('button')).toHaveClass(
          styles.sizeVariants[size]
        );
        unmount();
      });
    });

    it('fullWidth가 true일 때 해당 스타일이 적용된다', () => {
      render(<Button fullWidth>꽉 찬 버튼</Button>);
      expect(screen.getByRole('button')).toHaveClass(styles.fullWidth);
    });
  });

  describe('상태(Disabled, Loading) 테스트', () => {
    it('disabled 속성이 true일 때 버튼이 비활성화된다', () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          비활성
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');

      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('loading 속성이 true일 때 로딩 애니메이션을 보여주고 텍스트를 숨긴다', () => {
      render(<Button loading>저장 중</Button>);

      const button = screen.getByRole('button');
      // aria-busy 확인
      expect(button).toHaveAttribute('aria-busy', 'true');
      // LoadingSpinner가 렌더링되는지 확인 (role="status"로 찾기)
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByLabelText('로딩 중')).toBeInTheDocument();
      // 구현상 !loading && children 이므로 텍스트는 없어야 함
      expect(screen.queryByText('저장 중')).not.toBeInTheDocument();
    });

    it('loading 속성이 true일 때 버튼이 비활성화된다', () => {
      const handleClick = vi.fn();
      render(
        <Button loading onClick={handleClick}>
          로딩
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('아이콘 테스트', () => {
    it('leftIcon과 rightIcon을 렌더링한다', () => {
      render(
        <Button
          leftIcon={<span data-testid="left">L</span>}
          rightIcon={<span data-testid="right">R</span>}
        >
          아이콘
        </Button>
      );

      expect(screen.getByTestId('left')).toBeInTheDocument();
      expect(screen.getByTestId('right')).toBeInTheDocument();
      expect(screen.getByText('아이콘')).toBeInTheDocument();
    });

    it('로딩 중에는 아이콘을 렌더링하지 않는다', () => {
      render(
        <Button loading leftIcon={<span data-testid="left">L</span>}>
          텍스트
        </Button>
      );

      expect(screen.queryByTestId('left')).not.toBeInTheDocument();
    });
  });

  describe('이벤트 및 키보드 인터랙션', () => {
    it('클릭 이벤트를 정상적으로 호출한다', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>클릭</Button>);

      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('Enter 키 입력 시 동작한다', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>키보드</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('엣지 케이스 및 접근성', () => {
    it('custom className이 주어지면 기본 클래스와 함께 적용된다', () => {
      render(<Button className="custom-class">커스텀</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles.buttonBase);
      expect(button).toHaveClass('custom-class');
    });

    it('아이콘에는 aria-hidden="true"가 적용되어야 한다 (접근성)', () => {
      render(<Button leftIcon={<span>Icon</span>}>아이콘</Button>);
      // leftIcon을 감싸는 span에 aria-hidden이 있는지 확인
      const iconWrapper = screen.getByText('Icon').parentElement;
      expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
    });

    it('추가적인 HTML 속성(...props)이 버튼에 전달된다', () => {
      render(
        <Button name="submit-btn" data-info="test">
          속성
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('name', 'submit-btn');
      expect(button).toHaveAttribute('data-info', 'test');
    });
  });
});
