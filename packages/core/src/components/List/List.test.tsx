import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { List, ListItem } from './List'

describe('List', () => {
  describe('렌더링 테스트', () => {
    it('기본 List가 렌더링된다', () => {
      render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      expect(screen.getByText('이름')).toBeInTheDocument()
      expect(screen.getByText('홍길동')).toBeInTheDocument()
    })

    it('여러 ListItem을 렌더링한다', () => {
      render(
        <List>
          <ListItem label="이름" value="홍길동" />
          <ListItem label="이메일" value="hong@example.com" />
          <ListItem label="전화번호" value="010-1234-5678" />
        </List>
      )
      expect(screen.getByText('이름')).toBeInTheDocument()
      expect(screen.getByText('이메일')).toBeInTheDocument()
      expect(screen.getByText('전화번호')).toBeInTheDocument()
    })

    it('ReactNode 타입의 value를 렌더링한다', () => {
      render(
        <List>
          <ListItem label="상태" value={<span>활성</span>} />
        </List>
      )
      expect(screen.getByText('상태')).toBeInTheDocument()
      expect(screen.getByText('활성')).toBeInTheDocument()
    })
  })

  describe('spacing prop 테스트', () => {
    it('spacing="none"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List spacing="none">
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass(/spacingStyles_none/)
    })

    it('spacing="sm"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List spacing="sm">
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass(/spacingStyles_sm/)
    })

    it('spacing="md"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List spacing="md">
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass(/spacingStyles_md/)
    })

    it('spacing="lg"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List spacing="lg">
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass(/spacingStyles_lg/)
    })

    it('spacing 기본값은 "md"이다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass(/spacingStyles_md/)
    })
  })

  describe('divider prop 테스트', () => {
    it('divider={true}일 때 구분선 클래스가 적용된다', () => {
      const { container } = render(
        <List divider>
          <ListItem label="이름" value="홍길동" />
          <ListItem label="이메일" value="hong@example.com" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass(/withDivider/)
    })

    it('divider={false}일 때 구분선 클래스가 적용되지 않는다', () => {
      const { container } = render(
        <List divider={false}>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).not.toHaveClass(/withDivider/)
    })

    it('divider 기본값은 false이다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).not.toHaveClass(/withDivider/)
    })
  })

  describe('ListItem layout prop 테스트', () => {
    it('layout="horizontal"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" layout="horizontal" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/layoutStyles_horizontal/)
    })

    it('layout="vertical"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" layout="vertical" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/layoutStyles_vertical/)
    })

    it('layout 기본값은 "horizontal"이다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/layoutStyles_horizontal/)
    })
  })

  describe('ListItem align prop 테스트', () => {
    it('align="start"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" align="start" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/alignStyles_start/)
    })

    it('align="center"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" align="center" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/alignStyles_center/)
    })

    it('align="end"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" align="end" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/alignStyles_end/)
    })

    it('align="baseline"일 때 적절한 클래스가 적용된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" align="baseline" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/alignStyles_baseline/)
    })

    it('align 기본값은 "center"이다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass(/alignStyles_center/)
    })
  })

  describe('ListItem labelWidth prop 테스트', () => {
    it('labelWidth를 지정하면 label에 해당 width가 적용된다', () => {
      render(
        <List>
          <ListItem label="이름" value="홍길동" labelWidth="100px" />
        </List>
      )
      const label = screen.getByText('이름')
      expect(label).toHaveStyle({ width: '100px' })
    })

    it('labelWidth를 지정하지 않으면 auto이다', () => {
      render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const label = screen.getByText('이름')
      // width가 명시적으로 설정되지 않음
      expect(label).not.toHaveStyle({ width: '100px' })
    })
  })

  describe('className prop 테스트', () => {
    it('List에 커스텀 className을 추가할 수 있다', () => {
      const { container } = render(
        <List className="custom-list">
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('custom-list')
    })

    it('ListItem에 커스텀 className을 추가할 수 있다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" className="custom-item" />
        </List>
      )
      const listItem = container.querySelector('li')
      expect(listItem).toHaveClass('custom-item')
    })
  })

  describe('접근성 테스트', () => {
    it('List는 <ul> 요소로 렌더링된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      expect(container.querySelector('ul')).toBeInTheDocument()
    })

    it('ListItem은 <li> 요소로 렌더링된다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      expect(container.querySelector('li')).toBeInTheDocument()
    })
  })

  describe('HTML 속성 전달 테스트', () => {
    it('List에 data-* 속성을 전달할 수 있다', () => {
      const { container } = render(
        <List data-testid="custom-list">
          <ListItem label="이름" value="홍길동" />
        </List>
      )
      expect(container.querySelector('ul')).toHaveAttribute('data-testid', 'custom-list')
    })

    it('ListItem에 data-* 속성을 전달할 수 있다', () => {
      const { container } = render(
        <List>
          <ListItem label="이름" value="홍길동" data-testid="custom-item" />
        </List>
      )
      expect(container.querySelector('li')).toHaveAttribute('data-testid', 'custom-item')
    })
  })

  describe('복합 시나리오 테스트', () => {
    it('다양한 layout과 align 조합을 지원한다', () => {
      render(
        <List divider spacing="lg">
          <ListItem label="이름" value="홍길동" layout="horizontal" align="start" />
          <ListItem label="소개" value="안녕하세요" layout="vertical" align="start" />
          <ListItem label="점수" value="95점" layout="horizontal" align="end" />
        </List>
      )
      expect(screen.getByText('이름')).toBeInTheDocument()
      expect(screen.getByText('소개')).toBeInTheDocument()
      expect(screen.getByText('점수')).toBeInTheDocument()
    })

    it('labelWidth를 통일하여 정렬된 리스트를 만들 수 있다', () => {
      render(
        <List>
          <ListItem label="이름" value="홍길동" labelWidth="80px" />
          <ListItem label="이메일" value="hong@example.com" labelWidth="80px" />
          <ListItem label="전화번호" value="010-1234-5678" labelWidth="80px" />
        </List>
      )
      const labels = screen.getAllByText(/이름|이메일|전화번호/)
      labels.forEach(label => {
        expect(label).toHaveStyle({ width: '80px' })
      })
    })
  })
})
