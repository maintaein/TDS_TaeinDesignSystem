import type { Meta, StoryObj } from '@storybook/react'
import { BottomSheet, BottomSheetProps } from '@designsystem/core'
import { useState } from 'react'

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: true,
    onClose: () => { console.log('closed') },
    children: 'BottomSheet 컨텐츠입니다.',
  },
  argTypes: {
    open: { control: 'boolean', description: 'BottomSheet 열림/닫힘 상태' },
    height: {
      control: 'select',
      options: ['auto', 'sm', 'md', 'lg', 'full'],
      description: 'BottomSheet 높이',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Backdrop 클릭 시 닫기',
    },
    closeOnEscape: { control: 'boolean', description: 'ESC 키로 닫기' },
    showHandle: { control: 'boolean', description: '드래그 핸들 표시' },
    showClose: { control: 'boolean', description: '닫기 버튼 표시 (title 필요)' },
    enableDrag: { control: 'boolean', description: '드래그로 닫기 활성화' },
    title: { control: 'text', description: 'BottomSheet 제목' },
  },
} satisfies Meta<typeof BottomSheet>

export default meta
type Story = StoryObj<typeof meta>

const BottomSheetWrapper = ({
  height,
  closeOnBackdropClick,
  closeOnEscape,
  showHandle,
  showClose,
  enableDrag,
  title,
  children,
}: {
  height?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  showHandle?: boolean
  showClose?: boolean
  enableDrag?: boolean
  title?: string
  children?: React.ReactNode
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#0066FF',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        BottomSheet 열기
      </button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        height={height}
        closeOnBackdropClick={closeOnBackdropClick}
        closeOnEscape={closeOnEscape}
        showHandle={showHandle}
        showClose={showClose}
        enableDrag={enableDrag}
        title={title}
      >
        {children}
      </BottomSheet>
    </>
  )
}

export const Default: Story = {
  render: () => (
    <BottomSheetWrapper title="기본 BottomSheet">
      <div style={{ padding: '16px 0' }}>
        <p>기본 BottomSheet입니다.</p>
        <p>드래그 핸들을 아래로 드래그하거나 backdrop을 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.</p>
      </div>
    </BottomSheetWrapper>
  ),
}

export const Heights: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <BottomSheetWrapper height="sm" title="작은 높이 (30vh)">
        <p>작은 높이의 BottomSheet입니다.</p>
      </BottomSheetWrapper>
      <BottomSheetWrapper height="md" title="중간 높이 (50vh)">
        <p>중간 높이의 BottomSheet입니다.</p>
      </BottomSheetWrapper>
      <BottomSheetWrapper height="lg" title="큰 높이 (70vh)">
        <p>큰 높이의 BottomSheet입니다.</p>
      </BottomSheetWrapper>
      <BottomSheetWrapper height="full" title="전체 높이 (100vh)">
        <p>전체 높이의 BottomSheet입니다.</p>
      </BottomSheetWrapper>
    </div>
  ),
}

export const WithCloseButton: Story = {
  render: () => (
    <BottomSheetWrapper showClose title="닫기 버튼 있는 BottomSheet">
      <div style={{ padding: '16px 0' }}>
        <p>우측 상단에 닫기 버튼이 있습니다.</p>
      </div>
    </BottomSheetWrapper>
  ),
}

export const NoHandle: Story = {
  render: () => (
    <BottomSheetWrapper showHandle={false} title="핸들 없는 BottomSheet">
      <div style={{ padding: '16px 0' }}>
        <p>드래그 핸들이 없습니다.</p>
        <p>Backdrop 클릭이나 ESC 키로 닫을 수 있습니다.</p>
      </div>
    </BottomSheetWrapper>
  ),
}

export const NoDrag: Story = {
  render: () => (
    <BottomSheetWrapper enableDrag={false} title="드래그 비활성화">
      <div style={{ padding: '16px 0' }}>
        <p>드래그로 닫을 수 없습니다.</p>
        <p>Backdrop 클릭이나 ESC 키로만 닫을 수 있습니다.</p>
      </div>
    </BottomSheetWrapper>
  ),
}

export const NoBackdropClose: Story = {
  render: () => (
    <BottomSheetWrapper closeOnBackdropClick={false} showClose title="Backdrop 클릭 비활성화">
      <div style={{ padding: '16px 0' }}>
        <p>Backdrop을 클릭해도 닫히지 않습니다.</p>
        <p>닫기 버튼이나 ESC 키로 닫을 수 있습니다.</p>
      </div>
    </BottomSheetWrapper>
  ),
}

export const NoEscapeClose: Story = {
  render: () => (
    <BottomSheetWrapper closeOnEscape={false} showClose title="ESC 키 비활성화">
      <div style={{ padding: '16px 0' }}>
        <p>ESC 키로 닫을 수 없습니다.</p>
        <p>닫기 버튼이나 Backdrop 클릭으로 닫을 수 있습니다.</p>
      </div>
    </BottomSheetWrapper>
  ),
}

export const WithList: Story = {
  render: () => (
    <BottomSheetWrapper title="리스트 선택" showClose>
      <div>
        {[
          '사과',
          '바나나',
          '체리',
          '딸기',
          '수박',
          '포도',
          '오렌지',
          '키위',
          '망고',
          '파인애플',
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: '16px',
              borderBottom: '1px solid #eee',
              cursor: 'pointer',
            }}
            onClick={() => console.log(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </BottomSheetWrapper>
  ),
}

export const WithForm: Story = {
  render: () => {
    const FormSheet = () => {
      const [open, setOpen] = useState(false)
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')

      const handleSubmit = () => {
        console.log('Form submitted:', { name, email })
        setOpen(false)
        setName('')
        setEmail('')
      }

      return (
        <>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#0066FF',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            BottomSheet 열기
          </button>
          <BottomSheet
            open={open}
            onClose={() => setOpen(false)}
            title="회원가입"
            showClose
            height="md"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'medium' }}
                >
                  이름
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력하세요"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'medium' }}
                >
                  이메일
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#0066FF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                }}
              >
                가입하기
              </button>
            </form>
          </BottomSheet>
        </>
      )
    }

    return <FormSheet />
  },
}

export const ScrollableContent: Story = {
  render: () => (
    <BottomSheetWrapper title="스크롤 가능한 컨텐츠" showClose height="md">
      <div>
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '16px',
              borderBottom: '1px solid #eee',
            }}
          >
            스크롤 가능한 항목 {i + 1}
          </div>
        ))}
      </div>
    </BottomSheetWrapper>
  ),
}

export const MobileMenu: Story = {
  render: () => (
    <BottomSheetWrapper title="메뉴" showClose>
      <div>
        {[
          { icon: '🏠', label: '홈' },
          { icon: '🔍', label: '검색' },
          { icon: '💬', label: '메시지' },
          { icon: '🔔', label: '알림' },
          { icon: '⚙️', label: '설정' },
          { icon: '👤', label: '프로필' },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              borderBottom: '1px solid #eee',
              cursor: 'pointer',
            }}
            onClick={() => console.log(item.label)}
          >
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <span style={{ fontSize: '16px' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </BottomSheetWrapper>
  ),
}

const InteractiveComponent = (args: BottomSheetProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#0066FF',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        BottomSheet 열기
      </button>
      <BottomSheet {...args} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const Interactive: Story = {
  args: {
    open: false,
    height: 'auto',
    closeOnBackdropClick: true,
    closeOnEscape: true,
    showHandle: true,
    showClose: false,
    enableDrag: true,
    title: '인터랙티브 BottomSheet',
    children: (
      <div style={{ padding: '16px 0' }}>
        <p>Controls를 사용하여 BottomSheet를 제어해보세요.</p>
      </div>
    ),
  },
  render: (args) => <InteractiveComponent {...args} />,
}
