import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  describe('렌더링 테스트', () => {
    it('기본 Divider가 렌더링된다', () => {
      render(<Divider />)

      const divider = screen.getByRole('separator')
      expect(divider).toBeInTheDocument()
    })

    it('children이 있을 때 텍스트가 렌더링된다', () => {
      render(<Divider>구분선</Divider>)

      expect(screen.getByText('구분선')).toBeInTheDocument()
    })

    it('children이 ReactNode일 때 렌더링된다', () => {
      render(
        <Divider>
          <span data-testid="custom-content">커스텀 콘텐츠</span>
        </Divider>
      )

      expect(screen.getByTestId('custom-content')).toBeInTheDocument()
    })
  })

  describe('orientation prop 테스트', () => {
    it('orientation이 horizontal일 때 수평 스타일이 적용된다', () => {
      render(<Divider orientation="horizontal" />)

      const divider = screen.getByRole('separator')
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal')
      expect(divider.className).toMatch(/orientationStyles_horizontal/)
    })

    it('orientation이 vertical일 때 수직 스타일이 적용된다', () => {
      render(<Divider orientation="vertical" />)

      const divider = screen.getByRole('separator')
      expect(divider).toHaveAttribute('aria-orientation', 'vertical')
      expect(divider.className).toMatch(/orientationStyles_vertical/)
    })

    it('기본 orientation은 horizontal이다', () => {
      render(<Divider />)

      const divider = screen.getByRole('separator')
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal')
    })
  })

  describe('variant prop 테스트', () => {
    it('variant가 solid일 때 실선 스타일이 적용된다', () => {
      render(<Divider variant="solid" />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/variantStyles_solid/)
    })

    it('variant가 dashed일 때 대시 스타일이 적용된다', () => {
      render(<Divider variant="dashed" />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/variantStyles_dashed/)
    })

    it('variant가 dotted일 때 점선 스타일이 적용된다', () => {
      render(<Divider variant="dotted" />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/variantStyles_dotted/)
    })

    it('기본 variant는 solid이다', () => {
      render(<Divider />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/variantStyles_solid/)
    })
  })

  describe('spacing prop 테스트', () => {
    it('spacing이 sm일 때 작은 간격이 적용된다', () => {
      render(<Divider spacing="sm" />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/spacingStyles_sm/)
    })

    it('spacing이 md일 때 중간 간격이 적용된다', () => {
      render(<Divider spacing="md" />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/spacingStyles_md/)
    })

    it('spacing이 lg일 때 큰 간격이 적용된다', () => {
      render(<Divider spacing="lg" />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/spacingStyles_lg/)
    })

    it('기본 spacing은 md이다', () => {
      render(<Divider />)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/spacingStyles_md/)
    })
  })

  describe('textAlign prop 테스트', () => {
    it('textAlign이 left일 때 텍스트가 왼쪽 정렬된다', () => {
      render(<Divider textAlign="left">왼쪽</Divider>)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/textAlignStyles_left/)
    })

    it('textAlign이 center일 때 텍스트가 중앙 정렬된다', () => {
      render(<Divider textAlign="center">중앙</Divider>)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/textAlignStyles_center/)
    })

    it('textAlign이 right일 때 텍스트가 오른쪽 정렬된다', () => {
      render(<Divider textAlign="right">오른쪽</Divider>)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/textAlignStyles_right/)
    })

    it('기본 textAlign은 center이다', () => {
      render(<Divider>텍스트</Divider>)

      const divider = screen.getByRole('separator')
      expect(divider.className).toMatch(/textAlignStyles_center/)
    })
  })

  describe('className prop 테스트', () => {
    it('커스텀 className이 적용된다', () => {
      render(<Divider className="custom-divider" />)

      const divider = screen.getByRole('separator')
      expect(divider).toHaveClass('custom-divider')
    })
  })

  describe('접근성 테스트', () => {
    it('role="separator"가 적용된다', () => {
      render(<Divider />)

      const divider = screen.getByRole('separator')
      expect(divider).toBeInTheDocument()
    })

    it('aria-orientation이 올바르게 설정된다', () => {
      const { rerender } = render(<Divider orientation="horizontal" />)
      expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal')

      rerender(<Divider orientation="vertical" />)
      expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('레이아웃 구조 테스트', () => {
    it('children이 있을 때 3개의 섹션이 렌더링된다', () => {
      const { container } = render(<Divider>텍스트</Divider>)

      const divider = container.querySelector('[role="separator"]')
      const childDivs = divider?.querySelectorAll('div')

      expect(childDivs?.length).toBe(3)
    })

    it('children이 없을 때 단순 선만 렌더링된다', () => {
      const { container } = render(<Divider />)

      const divider = container.querySelector('[role="separator"]')
      const childDivs = divider?.querySelectorAll('div')

      expect(childDivs?.length).toBe(0)
    })
  })

  describe('HTML 속성 전달 테스트', () => {
    it('div 요소의 HTML 속성이 전달된다', () => {
      render(<Divider data-testid="test-divider" />)

      const divider = screen.getByTestId('test-divider')
      expect(divider).toBeInTheDocument()
    })
  })
})
