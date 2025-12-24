import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loader } from './Loader'

describe('Loader', () => {
  describe('렌더링 테스트', () => {
    it('기본적으로 렌더링된다', () => {
      render(<Loader />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('spinner 타입을 렌더링한다', () => {
      render(<Loader type="spinner" />)
      const loader = screen.getByRole('status')
      expect(loader).toBeInTheDocument()
      expect(loader.className).toContain('spinner')
    })

    it('dots 타입을 렌더링한다', () => {
      render(<Loader type="dots" />)
      const loader = screen.getByRole('status')
      expect(loader).toBeInTheDocument()
      expect(loader.className).toContain('dots')
    })

    it('bar 타입을 렌더링한다', () => {
      render(<Loader type="bar" />)
      const loader = screen.getByRole('status')
      expect(loader).toBeInTheDocument()
      expect(loader.className).toContain('bar')
    })

    it('기본 타입은 spinner이다', () => {
      render(<Loader />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('spinner')
    })
  })

  describe('size prop 테스트', () => {
    it('sm 크기를 렌더링한다', () => {
      render(<Loader size="sm" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('sm')
    })

    it('md 크기를 렌더링한다', () => {
      render(<Loader size="md" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('md')
    })

    it('lg 크기를 렌더링한다', () => {
      render(<Loader size="lg" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('lg')
    })

    it('xl 크기를 렌더링한다', () => {
      render(<Loader size="xl" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('xl')
    })

    it('기본 크기는 md이다', () => {
      render(<Loader />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('md')
    })
  })

  describe('color prop 테스트', () => {
    it('primary 색상을 렌더링한다', () => {
      render(<Loader color="primary" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('primary')
    })

    it('secondary 색상을 렌더링한다', () => {
      render(<Loader color="secondary" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('secondary')
    })

    it('white 색상을 렌더링한다', () => {
      render(<Loader color="white" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('white')
    })

    it('기본 색상은 primary이다', () => {
      render(<Loader />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('primary')
    })
  })

  describe('접근성 테스트', () => {
    it('role="status"를 가진다', () => {
      render(<Loader />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('aria-live="polite"를 가진다', () => {
      render(<Loader />)
      const loader = screen.getByRole('status')
      expect(loader).toHaveAttribute('aria-live', 'polite')
    })

    it('aria-label을 설정할 수 있다', () => {
      render(<Loader aria-label="데이터 로딩 중" />)
      const loader = screen.getByRole('status')
      expect(loader).toHaveAttribute('aria-label', '데이터 로딩 중')
    })

    it('기본 aria-label을 가진다', () => {
      render(<Loader />)
      const loader = screen.getByRole('status')
      expect(loader).toHaveAttribute('aria-label')
    })

    it('aria-busy="true"를 가진다', () => {
      render(<Loader />)
      const loader = screen.getByRole('status')
      expect(loader).toHaveAttribute('aria-busy', 'true')
    })
  })

  describe('label prop 테스트', () => {
    it('label 텍스트를 렌더링한다', () => {
      render(<Loader label="로딩 중..." />)
      expect(screen.getByText('로딩 중...')).toBeInTheDocument()
    })

    it('label 없이도 렌더링된다', () => {
      render(<Loader />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('label이 있을 때 적절한 레이아웃을 가진다', () => {
      const { container } = render(<Loader label="로딩 중..." />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper.className).toContain('loaderContainer')
    })
  })

  describe('fullScreen prop 테스트', () => {
    it('fullScreen 모드를 렌더링한다', () => {
      const { container } = render(<Loader fullScreen />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper.className).toContain('fullScreen')
    })

    it('fullScreen이 아닐 때는 일반 레이아웃이다', () => {
      const { container } = render(<Loader />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper.className).not.toContain('fullScreen')
    })
  })

  describe('className prop 테스트', () => {
    it('커스텀 className을 적용한다', () => {
      const { container } = render(<Loader className="custom-loader" />)
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('custom-loader')
    })
  })

  describe('타입별 렌더링 테스트', () => {
    it('spinner 타입은 회전 애니메이션을 가진다', () => {
      render(<Loader type="spinner" />)
      const loader = screen.getByRole('status')
      expect(loader).toBeInTheDocument()
    })

    it('dots 타입은 여러 점을 렌더링한다', () => {
      const { container } = render(<Loader type="dots" />)
      const dots = container.querySelectorAll('[class*="dot"]')
      expect(dots.length).toBeGreaterThan(0)
    })

    it('bar 타입은 진행 바를 렌더링한다', () => {
      render(<Loader type="bar" />)
      const loader = screen.getByRole('status')
      expect(loader.className).toContain('bar')
    })
  })

  describe('overlay prop 테스트', () => {
    it('overlay 모드를 렌더링한다', () => {
      const { container } = render(<Loader overlay />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper.className).toContain('overlay')
    })

    it('overlay가 아닐 때는 일반 렌더링이다', () => {
      const { container } = render(<Loader />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper.className).not.toContain('overlay')
    })
  })
})
