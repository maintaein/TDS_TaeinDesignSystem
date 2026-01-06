import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Card } from './Card'

describe('Card', () => {
  describe('렌더링 테스트', () => {
    it('기본 Card가 렌더링된다', () => {
      const { container } = render(<Card>기본 카드</Card>)

      expect(container.firstChild).toBeInTheDocument()
      expect(screen.getByText('기본 카드')).toBeInTheDocument()
    })

    it('header가 렌더링된다', () => {
      render(
        <Card header={<div>카드 헤더</div>}>
          카드 내용
        </Card>
      )

      expect(screen.getByText('카드 헤더')).toBeInTheDocument()
      expect(screen.getByText('카드 내용')).toBeInTheDocument()
    })

    it('footer가 렌더링된다', () => {
      render(
        <Card footer={<div>카드 푸터</div>}>
          카드 내용
        </Card>
      )

      expect(screen.getByText('카드 푸터')).toBeInTheDocument()
      expect(screen.getByText('카드 내용')).toBeInTheDocument()
    })

    it('header, content, footer가 모두 렌더링된다', () => {
      render(
        <Card
          header={<div>헤더</div>}
          footer={<div>푸터</div>}
        >
          내용
        </Card>
      )

      expect(screen.getByText('헤더')).toBeInTheDocument()
      expect(screen.getByText('내용')).toBeInTheDocument()
      expect(screen.getByText('푸터')).toBeInTheDocument()
    })
  })

  describe('이미지 테스트', () => {
    it('이미지가 렌더링된다', () => {
      render(
        <Card image="https://example.com/image.jpg" imageAlt="테스트 이미지">
          카드 내용
        </Card>
      )

      const img = screen.getByAltText('테스트 이미지')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
    })

    it('이미지는 카드 상단에 렌더링된다', () => {
      const { container } = render(
        <Card image="https://example.com/image.jpg" imageAlt="테스트">
          내용
        </Card>
      )

      const card = container.firstChild as HTMLElement
      const firstChild = card.firstChild as HTMLElement
      const img = firstChild.querySelector('img')
      expect(img).toBeInTheDocument()
    })
  })

  describe('variant prop 테스트', () => {
    it('variant="outlined"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card variant="outlined">내용</Card>)

      expect(container.firstChild).toHaveClass(/variantStyles_outlined/)
    })

    it('variant="elevated"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card variant="elevated">내용</Card>)

      expect(container.firstChild).toHaveClass(/variantStyles_elevated/)
    })

    it('variant="filled"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card variant="filled">내용</Card>)

      expect(container.firstChild).toHaveClass(/variantStyles_filled/)
    })

    it('기본값은 "elevated"이다', () => {
      const { container } = render(<Card>내용</Card>)

      expect(container.firstChild).toHaveClass(/variantStyles_elevated/)
    })
  })

  describe('클릭 기능 테스트', () => {
    it('onClick이 제공되면 클릭할 수 있다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Card onClick={handleClick}>카드 내용</Card>)

      const card = screen.getByRole('button')
      await user.click(card)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('onClick이 없으면 button role이 없다', () => {
      render(<Card>카드 내용</Card>)

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('onClick이 있으면 호버 스타일이 적용된다', () => {
      const { container } = render(<Card onClick={() => {}}>내용</Card>)

      expect(container.firstChild).toHaveClass(/clickable/)
    })
  })

  describe('padding prop 테스트', () => {
    it('padding="none"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card padding="none">내용</Card>)

      const card = container.firstChild as HTMLElement
      const content = card.querySelector('[class*="content"]')
      expect(content).toHaveClass(/paddingStyles_none/)
    })

    it('padding="sm"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card padding="sm">내용</Card>)

      const card = container.firstChild as HTMLElement
      const content = card.querySelector('[class*="content"]')
      expect(content).toHaveClass(/paddingStyles_sm/)
    })

    it('padding="md"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card padding="md">내용</Card>)

      const card = container.firstChild as HTMLElement
      const content = card.querySelector('[class*="content"]')
      expect(content).toHaveClass(/paddingStyles_md/)
    })

    it('padding="lg"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(<Card padding="lg">내용</Card>)

      const card = container.firstChild as HTMLElement
      const content = card.querySelector('[class*="content"]')
      expect(content).toHaveClass(/paddingStyles_lg/)
    })

    it('기본값은 "md"이다', () => {
      const { container } = render(<Card>내용</Card>)

      const card = container.firstChild as HTMLElement
      const content = card.querySelector('[class*="content"]')
      expect(content).toHaveClass(/paddingStyles_md/)
    })
  })

  describe('disabled 상태 테스트', () => {
    it('disabled가 true이면 비활성화 스타일이 적용된다', () => {
      const { container } = render(<Card disabled>내용</Card>)

      expect(container.firstChild).toHaveClass(/disabled/)
    })

    it('disabled일 때 클릭 이벤트가 발생하지 않는다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Card onClick={handleClick} disabled>내용</Card>)

      const card = screen.getByRole('button')
      await user.click(card)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('className prop 테스트', () => {
    it('커스텀 className이 적용된다', () => {
      const { container } = render(<Card className="custom-class">내용</Card>)

      expect(container.firstChild).toHaveClass('custom-class')
    })
  })

  describe('접근성 테스트', () => {
    it('onClick이 있을 때 role="button"이 있다', () => {
      render(<Card onClick={() => {}}>내용</Card>)

      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('onClick이 없을 때는 article로 렌더링된다', () => {
      const { container } = render(<Card>내용</Card>)

      const card = container.firstChild as HTMLElement
      expect(card.nodeName).toBe('ARTICLE')
    })

    it('disabled일 때 aria-disabled가 있다', () => {
      render(<Card onClick={() => {}} disabled>내용</Card>)

      const card = screen.getByRole('button')
      expect(card).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('키보드 인터랙션 테스트', () => {
    it('Enter 키로 클릭할 수 있다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Card onClick={handleClick}>내용</Card>)

      const card = screen.getByRole('button')
      card.focus()
      await user.keyboard('{Enter}')

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('Space 키로 클릭할 수 있다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Card onClick={handleClick}>내용</Card>)

      const card = screen.getByRole('button')
      card.focus()
      await user.keyboard(' ')

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('disabled일 때 키보드 이벤트가 발생하지 않는다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Card onClick={handleClick} disabled>내용</Card>)

      const card = screen.getByRole('button')
      card.focus()
      await user.keyboard('{Enter}')

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('복합 시나리오 테스트', () => {
    it('이미지 + header + footer가 함께 렌더링된다', () => {
      render(
        <Card
          image="https://example.com/image.jpg"
          imageAlt="테스트"
          header={<div>헤더</div>}
          footer={<div>푸터</div>}
        >
          내용
        </Card>
      )

      expect(screen.getByAltText('테스트')).toBeInTheDocument()
      expect(screen.getByText('헤더')).toBeInTheDocument()
      expect(screen.getByText('내용')).toBeInTheDocument()
      expect(screen.getByText('푸터')).toBeInTheDocument()
    })

    it('클릭 가능 + variant + padding 조합이 정상 동작한다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      const { container } = render(
        <Card onClick={handleClick} variant="outlined" padding="lg">
          내용
        </Card>
      )

      expect(container.firstChild).toHaveClass(/variantStyles_outlined/)
      expect(container.firstChild).toHaveClass(/clickable/)

      const card = container.firstChild as HTMLElement
      const content = card.querySelector('[class*="content"]')
      expect(content).toHaveClass(/paddingStyles_lg/)

      const button = screen.getByRole('button')
      await user.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('이미지 + 클릭 가능 카드가 정상 동작한다', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(
        <Card
          image="https://example.com/image.jpg"
          imageAlt="이미지"
          onClick={handleClick}
        >
          내용
        </Card>
      )

      expect(screen.getByAltText('이미지')).toBeInTheDocument()

      const card = screen.getByRole('button')
      await user.click(card)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
