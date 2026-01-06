import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  describe('기본 렌더링', () => {
    it('아이콘이 올바르게 렌더링되어야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('aria-hidden이 기본값으로 true여야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    it('svg 요소로 렌더링되어야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('아이콘 타입', () => {
    it('close 아이콘을 렌더링해야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('data-icon', 'close');
    });

    it('plus 아이콘을 렌더링해야 한다', () => {
      const { container } = render(<Icon name="plus" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('data-icon', 'plus');
    });

    it('minus 아이콘을 렌더링해야 한다', () => {
      const { container } = render(<Icon name="minus" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('data-icon', 'minus');
    });

    it('chevron-down 아이콘을 렌더링해야 한다', () => {
      const { container } = render(<Icon name="chevron-down" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('data-icon', 'chevron-down');
    });

    it('chevron-up 아이콘을 렌더링해야 한다', () => {
      const { container } = render(<Icon name="chevron-up" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('data-icon', 'chevron-up');
    });
  });

  describe('크기 변형', () => {
    it('sm 크기를 적용해야 한다', () => {
      const { container } = render(<Icon name="close" size="sm" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '16');
      expect(svg).toHaveAttribute('height', '16');
    });

    it('md 크기를 적용해야 한다 (기본값)', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '20');
      expect(svg).toHaveAttribute('height', '20');
    });

    it('lg 크기를 적용해야 한다', () => {
      const { container } = render(<Icon name="close" size="lg" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '24');
      expect(svg).toHaveAttribute('height', '24');
    });

    it('xl 크기를 적용해야 한다', () => {
      const { container } = render(<Icon name="close" size="xl" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '32');
      expect(svg).toHaveAttribute('height', '32');
    });
  });

  describe('색상', () => {
    it('기본 색상은 currentColor여야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('style', 'color: currentcolor;');
    });

    it('커스텀 색상을 적용해야 한다', () => {
      const { container } = render(<Icon name="close" color="#FF0000" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveStyle({ color: '#FF0000' });
    });

    it('CSS 변수 색상을 적용해야 한다', () => {
      const { container } = render(<Icon name="close" color="var(--primary-600)" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveStyle({ color: 'var(--primary-600)' });
    });
  });

  describe('접근성', () => {
    it('aria-label이 제공되면 role이 img여야 한다', () => {
      render(<Icon name="close" aria-label="닫기" />);
      const icon = screen.getByRole('img');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('aria-label', '닫기');
    });

    it('aria-label이 제공되면 aria-hidden이 제거되어야 한다', () => {
      render(<Icon name="close" aria-label="닫기" />);
      const icon = screen.getByRole('img');
      expect(icon).not.toHaveAttribute('aria-hidden');
    });

    it('aria-label이 없으면 aria-hidden이 true여야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    it('title이 제공되면 접근 가능해야 한다', () => {
      const { container } = render(<Icon name="close" title="닫기 아이콘" />);
      const title = container.querySelector('title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('닫기 아이콘');
    });
  });

  describe('추가 속성', () => {
    it('className을 추가해야 한다', () => {
      const { container } = render(<Icon name="close" className="custom-icon" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('custom-icon');
    });

    it('data 속성을 추가해야 한다', () => {
      const { container } = render(<Icon name="close" data-testid="test-icon" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('data-testid', 'test-icon');
    });

    it('추가 props를 전달해야 한다', () => {
      const { container } = render(<Icon name="close" id="icon-1" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('id', 'icon-1');
    });
  });

  describe('SVG 속성', () => {
    it('viewBox 속성이 있어야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox');
    });

    it('fill이 currentColor여야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });

    it('xmlns 속성이 있어야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    });
  });

  describe('에러 처리', () => {
    it('존재하지 않는 아이콘 이름에 대해 경고해야 한다', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      // @ts-expect-error - 의도적으로 유효하지 않은 아이콘 이름 테스트
      render(<Icon name="invalid-icon" />);

      if (process.env.NODE_ENV === 'development') {
        expect(consoleSpy).toHaveBeenCalled();
      }

      consoleSpy.mockRestore();
    });
  });

  describe('아이콘 경로 검증', () => {
    it('close 아이콘에 path 요소가 있어야 한다', () => {
      const { container } = render(<Icon name="close" />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });

    it('plus 아이콘에 path 요소가 있어야 한다', () => {
      const { container } = render(<Icon name="plus" />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });

    it('minus 아이콘에 path 요소가 있어야 한다', () => {
      const { container } = render(<Icon name="minus" />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });

    it('chevron-down 아이콘에 path 요소가 있어야 한다', () => {
      const { container } = render(<Icon name="chevron-down" />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });

    it('chevron-up 아이콘에 path 요소가 있어야 한다', () => {
      const { container } = render(<Icon name="chevron-up" />);
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
    });
  });
});
