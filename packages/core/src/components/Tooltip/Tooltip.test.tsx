import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  describe('렌더링 테스트', () => {
    it('children을 렌더링한다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      expect(screen.getByRole('button', { name: '호버하세요' })).toBeInTheDocument()
    })

    it('기본적으로 툴팁이 숨겨져 있다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  describe('호버 인터랙션 테스트', () => {
    it('마우스 호버 시 툴팁이 표시된다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      expect(screen.getByText('툴팁 내용')).toBeInTheDocument()
    })

    it('마우스 아웃 시 툴팁이 사라진다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      expect(screen.getByRole('tooltip')).toBeInTheDocument()

      fireEvent.mouseLeave(button)

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  describe('포커스 인터랙션 테스트', () => {
    it('포커스 시 툴팁이 표시된다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>포커스하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.focus(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('블러 시 툴팁이 사라진다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>포커스하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.focus(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      expect(screen.getByRole('tooltip')).toBeInTheDocument()

      fireEvent.blur(button)

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  describe('position prop 테스트', () => {
    it('top 위치를 렌더링한다', () => {
      render(
        <Tooltip content="툴팁 내용" position="top">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      expect(tooltip.className).toContain('top')
    })

    it('bottom 위치를 렌더링한다', () => {
      render(
        <Tooltip content="툴팁 내용" position="bottom">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      expect(tooltip.className).toContain('bottom')
    })

    it('left 위치를 렌더링한다', () => {
      render(
        <Tooltip content="툴팁 내용" position="left">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      expect(tooltip.className).toContain('left')
    })

    it('right 위치를 렌더링한다', () => {
      render(
        <Tooltip content="툴팁 내용" position="right">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      expect(tooltip.className).toContain('right')
    })
  })

  describe('delay prop 테스트', () => {
    it('delay 후에 툴팁이 표시된다', () => {
      render(
        <Tooltip content="툴팁 내용" delay={500}>
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('delay=0이면 즉시 표시된다', () => {
      render(
        <Tooltip content="툴팁 내용" delay={0}>
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  describe('접근성 테스트', () => {
    it('role="tooltip"을 가진다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('aria-describedby로 툴팁이 연결된다', () => {
      const { container } = render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      const tooltipId = tooltip.getAttribute('id')
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper.getAttribute('aria-describedby')).toBe(tooltipId)
    })
  })

  describe('disabled prop 테스트', () => {
    it('disabled=true이면 툴팁이 표시되지 않는다', () => {
      render(
        <Tooltip content="툴팁 내용" disabled>
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(1000)
      })

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  describe('화살표 테스트', () => {
    it('기본적으로 화살표를 표시한다', () => {
      render(
        <Tooltip content="툴팁 내용">
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      const arrow = tooltip.querySelector('[class*="arrow"]')
      expect(arrow).toBeInTheDocument()
    })

    it('arrow=false이면 화살표를 표시하지 않는다', () => {
      render(
        <Tooltip content="툴팁 내용" arrow={false}>
          <button>호버하세요</button>
        </Tooltip>
      )

      const button = screen.getByRole('button')
      fireEvent.mouseEnter(button)

      act(() => {
        vi.advanceTimersByTime(200)
      })

      const tooltip = screen.getByRole('tooltip')
      const arrow = tooltip.querySelector('[class*="arrow"]')
      expect(arrow).not.toBeInTheDocument()
    })
  })
})
