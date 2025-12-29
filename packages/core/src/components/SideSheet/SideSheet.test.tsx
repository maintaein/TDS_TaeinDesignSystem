import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SideSheet } from './SideSheet'

describe('SideSheet', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    children: 'SideSheet content',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    document.body.style.overflow = ''
  })

  describe('렌더링 테스트', () => {
    it('open이 true일 때 SideSheet가 렌더링된다', () => {
      render(<SideSheet {...defaultProps} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('SideSheet content')).toBeInTheDocument()
    })

    it('open이 false일 때 SideSheet가 렌더링되지 않는다', () => {
      render(<SideSheet {...defaultProps} open={false} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('children이 올바르게 렌더링된다', () => {
      render(
        <SideSheet {...defaultProps}>
          <div>Custom content</div>
        </SideSheet>
      )
      expect(screen.getByText('Custom content')).toBeInTheDocument()
    })

    it('title이 있을 때 렌더링된다', () => {
      render(<SideSheet {...defaultProps} title="Test Title" />)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('title이 없을 때 렌더링되지 않는다', () => {
      render(<SideSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.querySelector('h2')).not.toBeInTheDocument()
    })
  })

  describe('접근성 테스트', () => {
    it('role="dialog"를 가진다', () => {
      render(<SideSheet {...defaultProps} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('aria-modal="true"를 가진다', () => {
      render(<SideSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toHaveAttribute('aria-modal', 'true')
    })

    it('title이 있을 때 aria-labelledby가 설정된다', () => {
      render(<SideSheet {...defaultProps} title="Test Title" />)
      const sheet = screen.getByRole('dialog')
      const labelledby = sheet.getAttribute('aria-labelledby')
      expect(labelledby).toBeTruthy()

      const title = document.getElementById(labelledby!)
      expect(title).toHaveTextContent('Test Title')
    })

    it('aria-label이 있을 때 설정된다', () => {
      render(<SideSheet {...defaultProps} aria-label="Custom Label" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toHaveAttribute('aria-label', 'Custom Label')
    })
  })

  describe('Backdrop 클릭 테스트', () => {
    it('closeOnBackdropClick이 true일 때 backdrop 클릭 시 onClose가 호출된다', async () => {
      render(<SideSheet {...defaultProps} closeOnBackdropClick />)
      const backdrop = document.querySelector('[aria-hidden="true"]')
      expect(backdrop).toBeInTheDocument()

      fireEvent.click(backdrop!)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
      })
    })

    it('closeOnBackdropClick이 false일 때 backdrop 클릭 시 onClose가 호출되지 않는다', () => {
      render(<SideSheet {...defaultProps} closeOnBackdropClick={false} />)
      const backdrop = document.querySelector('[aria-hidden="true"]')
      fireEvent.click(backdrop!)
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })

    it('시트 영역 클릭 시 onClose가 호출되지 않는다', () => {
      render(<SideSheet {...defaultProps} closeOnBackdropClick />)
      const sheet = screen.getByRole('dialog')
      fireEvent.click(sheet)
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })
  })

  describe('ESC 키 테스트', () => {
    it('closeOnEscape이 true일 때 ESC 키로 닫힌다', async () => {
      render(<SideSheet {...defaultProps} closeOnEscape />)
      fireEvent.keyDown(document, { key: 'Escape' })

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
      })
    })

    it('closeOnEscape이 false일 때 ESC 키로 닫히지 않는다', () => {
      render(<SideSheet {...defaultProps} closeOnEscape={false} />)
      fireEvent.keyDown(document, { key: 'Escape' })
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })
  })

  describe('너비 테스트', () => {
    it('기본 너비(md)가 적용된다', () => {
      render(<SideSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toBeInTheDocument()
    })

    it('width="sm" 일 때 작은 너비가 적용된다', () => {
      render(<SideSheet {...defaultProps} width="sm" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('sm')
    })

    it('width="md" 일 때 중간 너비가 적용된다', () => {
      render(<SideSheet {...defaultProps} width="md" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('md')
    })

    it('width="lg" 일 때 큰 너비가 적용된다', () => {
      render(<SideSheet {...defaultProps} width="lg" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('lg')
    })

    it('width="full" 일 때 전체 너비가 적용된다', () => {
      render(<SideSheet {...defaultProps} width="full" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('full')
    })
  })

  describe('위치 테스트', () => {
    it('position="right" (기본값)일 때 우측에서 슬라이드된다', () => {
      render(<SideSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toBeInTheDocument()
    })

    it('position="left" 일 때 좌측에서 슬라이드된다', () => {
      render(<SideSheet {...defaultProps} position="left" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('left')
    })
  })

  describe('닫기 버튼 테스트', () => {
    it('showClose가 true일 때 닫기 버튼이 렌더링된다', () => {
      render(<SideSheet {...defaultProps} showClose title="Title" />)
      const closeButton = screen.getByRole('button', { name: /닫기/i })
      expect(closeButton).toBeInTheDocument()
    })

    it('닫기 버튼 클릭 시 onClose가 호출된다', async () => {
      render(<SideSheet {...defaultProps} showClose title="Title" />)
      const closeButton = screen.getByRole('button', { name: /닫기/i })
      fireEvent.click(closeButton)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
      })
    })

    it('showClose가 false일 때 닫기 버튼이 렌더링되지 않는다', () => {
      render(<SideSheet {...defaultProps} showClose={false} title="Title" />)
      expect(screen.queryByRole('button', { name: /닫기/i })).not.toBeInTheDocument()
    })

    it('title이 없으면 닫기 버튼이 렌더링되지 않는다', () => {
      render(<SideSheet {...defaultProps} showClose />)
      expect(screen.queryByRole('button', { name: /닫기/i })).not.toBeInTheDocument()
    })
  })

  describe('포커스 관리 테스트', () => {
    it('열릴 때 SideSheet로 포커스가 이동한다', async () => {
      render(<SideSheet {...defaultProps} />)
      await waitFor(() => {
        const sheet = screen.getByRole('dialog')
        expect(document.activeElement).toBe(sheet)
      })
    })

    it('닫힐 때 이전 포커스가 복원된다', async () => {
      const button = document.createElement('button')
      document.body.appendChild(button)
      button.focus()

      const { rerender } = render(<SideSheet {...defaultProps} />)

      rerender(<SideSheet {...defaultProps} open={false} />)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(document.activeElement).toBe(button)
      })
      document.body.removeChild(button)
    })

    it('포커스 가능한 요소가 있을 때 첫 번째 요소로 포커스가 이동한다', async () => {
      render(
        <SideSheet {...defaultProps}>
          <button>First Button</button>
          <button>Second Button</button>
        </SideSheet>
      )
      await waitFor(() => {
        const firstButton = screen.getByRole('button', { name: 'First Button' })
        expect(document.activeElement).toBe(firstButton)
      })
    })
  })

  describe('포커스 트랩 테스트', () => {
    it('Tab 키로 마지막 요소에서 첫 요소로 순환한다', async () => {
      render(
        <SideSheet {...defaultProps}>
          <button>First</button>
          <button>Last</button>
        </SideSheet>
      )

      await waitFor(() => {
        const firstButton = screen.getByRole('button', { name: 'First' })
        expect(document.activeElement).toBe(firstButton)
      })

      const firstButton = screen.getByRole('button', { name: 'First' })
      const lastButton = screen.getByRole('button', { name: 'Last' })

      lastButton.focus()
      fireEvent.keyDown(document, { key: 'Tab' })

      expect(document.activeElement).toBe(firstButton)
    })

    it('Shift+Tab 키로 첫 요소에서 마지막 요소로 순환한다', async () => {
      render(
        <SideSheet {...defaultProps}>
          <button>First</button>
          <button>Last</button>
        </SideSheet>
      )

      await waitFor(() => {
        const firstButton = screen.getByRole('button', { name: 'First' })
        expect(document.activeElement).toBe(firstButton)
      })

      const firstButton = screen.getByRole('button', { name: 'First' })
      const lastButton = screen.getByRole('button', { name: 'Last' })

      firstButton.focus()
      fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })

      expect(document.activeElement).toBe(lastButton)
    })
  })

  describe('Body scroll 테스트', () => {
    it('열릴 때 body scroll이 비활성화된다', async () => {
      render(<SideSheet {...defaultProps} />)
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden')
      })
    })

    it('닫힐 때 body scroll이 복원된다', async () => {
      const { rerender } = render(<SideSheet {...defaultProps} />)
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden')
      })

      rerender(<SideSheet {...defaultProps} open={false} />)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(document.body.style.overflow).toBe('')
      })
    })
  })

  describe('className 테스트', () => {
    it('커스텀 className이 적용된다', () => {
      render(<SideSheet {...defaultProps} className="custom-class" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('custom-class')
    })
  })
})
