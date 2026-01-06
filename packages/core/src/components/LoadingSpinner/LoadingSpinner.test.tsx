import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from './LoadingSpinner'

describe('LoadingSpinner', () => {
  describe('타입 변형', () => {
    it('기본 타입은 spinner여야 한다', () => {
      render(<LoadingSpinner />)
      const spinner = screen.getByRole('status')
      expect(spinner).toBeInTheDocument()
    })

    it('spinner 타입을 렌더링해야 한다', () => {
      render(<LoadingSpinner type="spinner" />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('data-type', 'spinner')
    })

    it('dots 타입을 렌더링해야 한다', () => {
      render(<LoadingSpinner type="dots" />)
      const dots = screen.getByRole('status')
      expect(dots).toHaveAttribute('data-type', 'dots')
    })
  })

  describe('크기 변형', () => {
    it('기본 크기는 md여야 한다', () => {
      render(<LoadingSpinner />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('data-size', 'md')
    })

    it('sm 크기를 적용해야 한다', () => {
      render(<LoadingSpinner size="sm" />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('data-size', 'sm')
    })

    it('md 크기를 적용해야 한다', () => {
      render(<LoadingSpinner size="md" />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('data-size', 'md')
    })

    it('lg 크기를 적용해야 한다', () => {
      render(<LoadingSpinner size="lg" />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('data-size', 'lg')
    })

    it('xl 크기를 적용해야 한다', () => {
      render(<LoadingSpinner size="xl" />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('data-size', 'xl')
    })
  })

  describe('색상 커스터마이징', () => {
    it('기본 색상으로 primary를 사용해야 한다', () => {
      const { container } = render(<LoadingSpinner />)
      const spinner = container.firstChild as HTMLElement
      expect(spinner.style.getPropertyValue('--spinner-color')).toBeTruthy()
    })

    it('사용자 정의 색상을 적용해야 한다', () => {
      const { container } = render(<LoadingSpinner color="#FF0000" />)
      const spinner = container.firstChild as HTMLElement
      expect(spinner).toHaveStyle({ '--spinner-color': '#FF0000' })
    })
  })

  describe('접근성', () => {
    it('role="status" 속성을 가져야 한다', () => {
      render(<LoadingSpinner />)
      const spinner = screen.getByRole('status')
      expect(spinner).toBeInTheDocument()
    })

    it('aria-live="polite" 속성을 가져야 한다', () => {
      render(<LoadingSpinner />)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('aria-live', 'polite')
    })

    it('기본 aria-label은 "로딩 중"이어야 한다', () => {
      render(<LoadingSpinner />)
      const spinner = screen.getByLabelText('로딩 중')
      expect(spinner).toBeInTheDocument()
    })

    it('사용자 정의 aria-label을 적용해야 한다', () => {
      render(<LoadingSpinner aria-label="데이터 불러오는 중" />)
      const spinner = screen.getByLabelText('데이터 불러오는 중')
      expect(spinner).toBeInTheDocument()
    })
  })

  describe('애니메이션', () => {
    it('spinner 타입은 회전 애니메이션을 가져야 한다', () => {
      const { container } = render(<LoadingSpinner type="spinner" />)
      const spinnerElement = container.querySelector('[data-spinner]')
      expect(spinnerElement).toBeInTheDocument()
    })

    it('dots 타입은 3개의 점을 렌더링해야 한다', () => {
      const { container } = render(<LoadingSpinner type="dots" />)
      const dots = container.querySelectorAll('[data-dot]')
      expect(dots).toHaveLength(3)
    })

    it('dots 타입의 각 점은 다른 애니메이션 딜레이를 가져야 한다', () => {
      const { container } = render(<LoadingSpinner type="dots" />)
      const dots = container.querySelectorAll('[data-dot]')

      expect(dots[0]).toHaveAttribute('data-delay', 'first')
      expect(dots[1]).toHaveAttribute('data-delay', 'second')
      expect(dots[2]).toHaveAttribute('data-delay', 'third')
    })
  })

  describe('className', () => {
    it('사용자 정의 className을 적용해야 한다', () => {
      const { container } = render(<LoadingSpinner className="custom-class" />)
      const spinner = container.firstChild as HTMLElement
      expect(spinner).toHaveClass('custom-class')
    })
  })
})
