import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BottomSheet } from './BottomSheet'

describe('BottomSheet', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    children: 'BottomSheet content',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    document.body.style.overflow = ''
  })

  describe('렌더링 테스트', () => {
    it('open이 true일 때 BottomSheet가 렌더링된다', () => {
      render(<BottomSheet {...defaultProps} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('BottomSheet content')).toBeInTheDocument()
    })

    it('open이 false일 때 BottomSheet가 렌더링되지 않는다', () => {
      render(<BottomSheet {...defaultProps} open={false} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('children이 올바르게 렌더링된다', () => {
      render(
        <BottomSheet {...defaultProps}>
          <div>Custom content</div>
        </BottomSheet>
      )
      expect(screen.getByText('Custom content')).toBeInTheDocument()
    })

    it('title이 있을 때 렌더링된다', () => {
      render(<BottomSheet {...defaultProps} title="Test Title" />)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('title이 없을 때 렌더링되지 않는다', () => {
      render(<BottomSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.querySelector('h2')).not.toBeInTheDocument()
    })
  })

  describe('접근성 테스트', () => {
    it('role="dialog"를 가진다', () => {
      render(<BottomSheet {...defaultProps} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('aria-modal="true"를 가진다', () => {
      render(<BottomSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toHaveAttribute('aria-modal', 'true')
    })

    it('title이 있을 때 aria-labelledby가 설정된다', () => {
      render(<BottomSheet {...defaultProps} title="Test Title" />)
      const sheet = screen.getByRole('dialog')
      const labelledby = sheet.getAttribute('aria-labelledby')
      expect(labelledby).toBeTruthy()

      const title = document.getElementById(labelledby!)
      expect(title).toHaveTextContent('Test Title')
    })

    it('aria-label이 있을 때 설정된다', () => {
      render(<BottomSheet {...defaultProps} aria-label="Custom Label" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toHaveAttribute('aria-label', 'Custom Label')
    })
  })

  describe('Backdrop 클릭 테스트', () => {
    it('closeOnBackdropClick이 true일 때 backdrop 클릭 시 onClose가 호출된다', async () => {
      render(<BottomSheet {...defaultProps} closeOnBackdropClick />)
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
      render(<BottomSheet {...defaultProps} closeOnBackdropClick={false} />)
      const backdrop = document.querySelector('[aria-hidden="true"]')
      fireEvent.click(backdrop!)
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })

    it('시트 영역 클릭 시 onClose가 호출되지 않는다', () => {
      render(<BottomSheet {...defaultProps} closeOnBackdropClick />)
      const sheet = screen.getByRole('dialog')
      fireEvent.click(sheet)
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })
  })

  describe('ESC 키 테스트', () => {
    it('closeOnEscape이 true일 때 ESC 키로 닫힌다', async () => {
      render(<BottomSheet {...defaultProps} closeOnEscape />)
      fireEvent.keyDown(document, { key: 'Escape' })

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
      })
    })

    it('closeOnEscape이 false일 때 ESC 키로 닫히지 않는다', () => {
      render(<BottomSheet {...defaultProps} closeOnEscape={false} />)
      fireEvent.keyDown(document, { key: 'Escape' })
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })
  })

  describe('높이 테스트', () => {
    it('기본 높이(auto)가 적용된다', () => {
      render(<BottomSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      expect(sheet).toBeInTheDocument()
    })

    it('height="sm" 일 때 작은 높이가 적용된다', () => {
      render(<BottomSheet {...defaultProps} height="sm" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('sm')
    })

    it('height="md" 일 때 중간 높이가 적용된다', () => {
      render(<BottomSheet {...defaultProps} height="md" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('md')
    })

    it('height="lg" 일 때 큰 높이가 적용된다', () => {
      render(<BottomSheet {...defaultProps} height="lg" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('lg')
    })

    it('height="full" 일 때 전체 높이가 적용된다', () => {
      render(<BottomSheet {...defaultProps} height="full" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('full')
    })
  })

  describe('드래그 핸들 테스트', () => {
    it('showHandle이 true일 때 드래그 핸들이 렌더링된다', () => {
      render(<BottomSheet {...defaultProps} showHandle />)
      const sheet = screen.getByRole('dialog')
      const handle = sheet.querySelector('.BottomSheet_handle__ea669dg')
      expect(handle).toBeInTheDocument()
    })

    it('showHandle이 false일 때 드래그 핸들이 렌더링되지 않는다', () => {
      render(<BottomSheet {...defaultProps} showHandle={false} />)
      const sheet = screen.getByRole('dialog')
      const handle = sheet.querySelector('.BottomSheet_handle__ea669dg')
      expect(handle).not.toBeInTheDocument()
    })

    it('기본값은 showHandle=true이다', () => {
      render(<BottomSheet {...defaultProps} />)
      const sheet = screen.getByRole('dialog')
      const handle = sheet.querySelector('.BottomSheet_handle__ea669dg')
      expect(handle).toBeInTheDocument()
    })
  })

  describe('닫기 버튼 테스트', () => {
    it('showClose가 true일 때 닫기 버튼이 렌더링된다', () => {
      render(<BottomSheet {...defaultProps} showClose title="Title" />)
      const closeButton = screen.getByRole('button', { name: /닫기/i })
      expect(closeButton).toBeInTheDocument()
    })

    it('닫기 버튼 클릭 시 onClose가 호출된다', async () => {
      render(<BottomSheet {...defaultProps} showClose title="Title" />)
      const closeButton = screen.getByRole('button', { name: /닫기/i })
      fireEvent.click(closeButton)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
      })
    })

    it('showClose가 false일 때 닫기 버튼이 렌더링되지 않는다', () => {
      render(<BottomSheet {...defaultProps} showClose={false} title="Title" />)
      expect(screen.queryByRole('button', { name: /닫기/i })).not.toBeInTheDocument()
    })

    it('title이 없으면 닫기 버튼이 렌더링되지 않는다', () => {
      render(<BottomSheet {...defaultProps} showClose />)
      expect(screen.queryByRole('button', { name: /닫기/i })).not.toBeInTheDocument()
    })
  })

  describe('포커스 관리 테스트', () => {
    it('열릴 때 BottomSheet로 포커스가 이동한다', async () => {
      render(<BottomSheet {...defaultProps} />)
      await waitFor(() => {
        const sheet = screen.getByRole('dialog')
        expect(document.activeElement).toBe(sheet)
      })
    })

    it('닫힐 때 이전 포커스가 복원된다', async () => {
      const button = document.createElement('button')
      document.body.appendChild(button)
      button.focus()

      const { rerender } = render(<BottomSheet {...defaultProps} />)

      rerender(<BottomSheet {...defaultProps} open={false} />)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(document.activeElement).toBe(button)
      })
      document.body.removeChild(button)
    })

    it('포커스 가능한 요소가 있을 때 첫 번째 요소로 포커스가 이동한다', async () => {
      render(
        <BottomSheet {...defaultProps}>
          <button>First Button</button>
          <button>Second Button</button>
        </BottomSheet>
      )
      await waitFor(() => {
        const firstButton = screen.getByRole('button', { name: 'First Button' })
        expect(document.activeElement).toBe(firstButton)
      })
    })
  })


  describe('Body scroll 테스트', () => {
    it('열릴 때 body scroll이 비활성화된다', async () => {
      render(<BottomSheet {...defaultProps} />)
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden')
      })
    })

    it('닫힐 때 body scroll이 복원된다', async () => {
      const { rerender } = render(<BottomSheet {...defaultProps} />)
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden')
      })

      rerender(<BottomSheet {...defaultProps} open={false} />)

      const sheet = screen.getByRole('dialog')
      fireEvent.animationEnd(sheet)

      await waitFor(() => {
        expect(document.body.style.overflow).toBe('')
      })
    })
  })

  describe('드래그 동작 테스트', () => {
    it('enableDrag가 true일 때 드래그로 닫을 수 있다', async () => {
      render(<BottomSheet {...defaultProps} enableDrag />)
      const sheet = screen.getByRole('dialog')

      fireEvent.touchStart(sheet, {
        touches: [{ clientY: 100 }],
      })

      fireEvent.touchMove(sheet, {
        touches: [{ clientY: 300 }],
      })

      fireEvent.touchEnd(sheet, {
        changedTouches: [{ clientY: 300 }],
      })

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalled()
      })
    })

    it('enableDrag가 false일 때 드래그로 닫을 수 없다', () => {
      render(<BottomSheet {...defaultProps} enableDrag={false} />)
      const sheet = screen.getByRole('dialog')

      fireEvent.touchStart(sheet, {
        touches: [{ clientY: 100 }],
      })

      fireEvent.touchMove(sheet, {
        touches: [{ clientY: 300 }],
      })

      fireEvent.touchEnd(sheet, {
        changedTouches: [{ clientY: 300 }],
      })

      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })

    it('위로 드래그하면 닫히지 않는다', () => {
      render(<BottomSheet {...defaultProps} enableDrag />)
      const sheet = screen.getByRole('dialog')

      fireEvent.touchStart(sheet, {
        touches: [{ clientY: 300 }],
      })

      fireEvent.touchMove(sheet, {
        touches: [{ clientY: 100 }],
      })

      fireEvent.touchEnd(sheet, {
        changedTouches: [{ clientY: 100 }],
      })

      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })
  })

  describe('className 테스트', () => {
    it('커스텀 className이 적용된다', () => {
      render(<BottomSheet {...defaultProps} className="custom-class" />)
      const sheet = screen.getByRole('dialog')
      expect(sheet.className).toContain('custom-class')
    })
  })
})
