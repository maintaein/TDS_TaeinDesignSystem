import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BoardRow } from './BoardRow'

describe('BoardRow', () => {
  describe('렌더링 테스트', () => {
    it('기본 BoardRow가 렌더링된다', () => {
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      expect(screen.getByText('제목')).toBeInTheDocument()
      expect(screen.getByText('내용')).toBeInTheDocument()
    })

    it('title이 ReactNode 타입을 지원한다', () => {
      render(
        <BoardRow
          title={
            <div>
              <strong>강조 제목</strong>
            </div>
          }
        >
          내용
        </BoardRow>
      )

      expect(screen.getByText('강조 제목')).toBeInTheDocument()
    })

    it('children이 ReactNode 타입을 지원한다', () => {
      render(
        <BoardRow title="제목">
          <div>
            <p>첫 번째 문단</p>
            <p>두 번째 문단</p>
          </div>
        </BoardRow>
      )

      expect(screen.getByText('첫 번째 문단')).toBeInTheDocument()
      expect(screen.getByText('두 번째 문단')).toBeInTheDocument()
    })
  })

  describe('펼침/접힘 상태 테스트', () => {
    it('기본적으로 접힌 상태로 렌더링된다', () => {
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('defaultExpanded가 true면 펼쳐진 상태로 렌더링된다', () => {
      render(
        <BoardRow title="제목" defaultExpanded>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('제목 클릭 시 펼쳐진다', async () => {
      const user = userEvent.setup()
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'false')

      await user.click(button)

      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('펼쳐진 상태에서 제목 클릭 시 접힌다', async () => {
      const user = userEvent.setup()
      render(
        <BoardRow title="제목" defaultExpanded>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'true')

      await user.click(button)

      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('controlled mode 테스트', () => {
    it('expanded prop이 있으면 controlled mode로 동작한다', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <BoardRow title="제목" expanded={false} onChange={handleChange}>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'false')

      await user.click(button)

      expect(handleChange).toHaveBeenCalledWith(true)
      // controlled mode이므로 상태는 외부에서 관리
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('expanded prop이 변경되면 상태가 업데이트된다', () => {
      const { rerender } = render(
        <BoardRow title="제목" expanded={false}>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'false')

      rerender(
        <BoardRow title="제목" expanded={true}>
          <div>내용</div>
        </BoardRow>
      )

      expect(button).toHaveAttribute('aria-expanded', 'true')
    })
  })

  describe('키보드 인터랙션 테스트', () => {
    it('Enter 키로 펼침/접힘을 토글한다', async () => {
      const user = userEvent.setup()
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      button.focus()

      expect(button).toHaveAttribute('aria-expanded', 'false')

      await user.keyboard('{Enter}')

      expect(button).toHaveAttribute('aria-expanded', 'true')

      await user.keyboard('{Enter}')

      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('Space 키로 펼침/접힘을 토글한다', async () => {
      const user = userEvent.setup()
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      button.focus()

      expect(button).toHaveAttribute('aria-expanded', 'false')

      await user.keyboard(' ')

      expect(button).toHaveAttribute('aria-expanded', 'true')

      await user.keyboard(' ')

      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('접근성 테스트', () => {
    it('제목 버튼에 button role이 있다', () => {
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      expect(screen.getByRole('button', { name: /제목/ })).toBeInTheDocument()
    })

    it('내용 영역에 region role이 있다', () => {
      render(
        <BoardRow title="제목" defaultExpanded>
          <div>내용</div>
        </BoardRow>
      )

      const region = screen.getByRole('region')
      expect(region).toBeInTheDocument()
    })

    it('aria-expanded 속성이 있다', () => {
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded')
    })

    it('aria-controls 속성이 내용 영역 id를 가리킨다', () => {
      render(
        <BoardRow title="제목" defaultExpanded>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      const region = screen.getByRole('region')

      const controlsId = button.getAttribute('aria-controls')
      expect(controlsId).toBeTruthy()
      expect(region).toHaveAttribute('id', controlsId!)
    })

    it('aria-labelledby 속성이 제목 버튼 id를 가리킨다', () => {
      render(
        <BoardRow title="제목" defaultExpanded>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      const region = screen.getByRole('region')

      const buttonId = button.getAttribute('id')
      expect(buttonId).toBeTruthy()
      expect(region).toHaveAttribute('aria-labelledby', buttonId!)
    })
  })

  describe('disabled 상태 테스트', () => {
    it('disabled가 true면 버튼이 비활성화된다', () => {
      render(
        <BoardRow title="제목" disabled>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toBeDisabled()
    })

    it('disabled 상태에서는 클릭해도 펼쳐지지 않는다', async () => {
      const user = userEvent.setup()
      render(
        <BoardRow title="제목" disabled>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button).toHaveAttribute('aria-expanded', 'false')

      await user.click(button)

      // disabled이므로 클릭 이벤트가 발생하지 않음
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('variant prop 테스트', () => {
    it('variant="default"일 때 적절한 클래스가 적용된다', () => {
      render(
        <BoardRow title="제목" variant="default">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button.parentElement).toHaveClass(/variantStyles_default/)
    })

    it('variant="outlined"일 때 적절한 클래스가 적용된다', () => {
      render(
        <BoardRow title="제목" variant="outlined">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button.parentElement).toHaveClass(/variantStyles_outlined/)
    })

    it('variant="filled"일 때 적절한 클래스가 적용된다', () => {
      render(
        <BoardRow title="제목" variant="filled">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button.parentElement).toHaveClass(/variantStyles_filled/)
    })

    it('기본값은 "default"이다', () => {
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button.parentElement).toHaveClass(/variantStyles_default/)
    })
  })

  describe('icon 표시 테스트', () => {
    it('접힌 상태일 때 아이콘이 있다', () => {
      render(
        <BoardRow title="제목">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('펼쳐진 상태일 때 아이콘이 회전한다', () => {
      render(
        <BoardRow title="제목" defaultExpanded>
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      const iconContainer = button.querySelector('svg')?.parentElement
      expect(iconContainer).toHaveClass(/iconExpanded/)
    })
  })

  describe('className prop 테스트', () => {
    it('커스텀 className이 적용된다', () => {
      render(
        <BoardRow title="제목" className="custom-class">
          <div>내용</div>
        </BoardRow>
      )

      const button = screen.getByRole('button', { name: /제목/ })
      expect(button.parentElement).toHaveClass('custom-class')
    })
  })

  describe('HTML 속성 전달 테스트', () => {
    it('data 속성이 전달된다', () => {
      render(
        <BoardRow title="제목" data-testid="board-row">
          <div>내용</div>
        </BoardRow>
      )

      expect(screen.getByTestId('board-row')).toBeInTheDocument()
    })
  })

  describe('복합 시나리오 테스트', () => {
    it('여러 BoardRow를 사용할 수 있다 (FAQ 예시)', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <BoardRow title="질문 1">
            <div>답변 1</div>
          </BoardRow>
          <BoardRow title="질문 2">
            <div>답변 2</div>
          </BoardRow>
          <BoardRow title="질문 3">
            <div>답변 3</div>
          </BoardRow>
        </div>
      )

      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(3)

      // 첫 번째만 펼치기
      await user.click(buttons[0])
      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
      expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')

      // 두 번째도 펼치기 (다중 열림)
      await user.click(buttons[1])
      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')
    })

    it('내용 영역에 복잡한 컨텐츠를 표시할 수 있다', () => {
      render(
        <BoardRow title="상세 정보" defaultExpanded>
          <div>
            <h3>제목</h3>
            <p>설명</p>
            <ul>
              <li>항목 1</li>
              <li>항목 2</li>
            </ul>
            <button>액션 버튼</button>
          </div>
        </BoardRow>
      )

      expect(screen.getByText('제목')).toBeInTheDocument()
      expect(screen.getByText('설명')).toBeInTheDocument()
      expect(screen.getByText('항목 1')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: '액션 버튼' })).toBeInTheDocument()
    })
  })
})
