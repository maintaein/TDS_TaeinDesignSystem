import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@designsystem/core'

const meta = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: "",
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated', 'filled'],
      description: '카드 스타일',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: '카드 패딩',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// 기본 예시
export const Default: Story = {
  args: {
    children: '기본 카드 내용입니다.',
  },
}

// Variant 옵션
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card variant="outlined" style={{ width: '200px' }}>
        <h3 style={{ marginTop: 0 }}>Outlined</h3>
        <p>테두리가 있는 카드</p>
      </Card>
      <Card variant="elevated" style={{ width: '200px' }}>
        <h3 style={{ marginTop: 0 }}>Elevated</h3>
        <p>그림자가 있는 카드</p>
      </Card>
      <Card variant="filled" style={{ width: '200px' }}>
        <h3 style={{ marginTop: 0 }}>Filled</h3>
        <p>배경색이 있는 카드</p>
      </Card>
    </div>
  ),
}

// Padding 옵션
export const Paddings: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card padding="none" variant="outlined" style={{ width: '150px' }}>
        <div style={{ padding: '8px', backgroundColor: '#f0f0f0' }}>
          Padding: none
        </div>
      </Card>
      <Card padding="sm" variant="outlined" style={{ width: '150px' }}>
        <div style={{ backgroundColor: '#f0f0f0' }}>
          Padding: sm
        </div>
      </Card>
      <Card padding="md" variant="outlined" style={{ width: '150px' }}>
        <div style={{ backgroundColor: '#f0f0f0' }}>
          Padding: md
        </div>
      </Card>
      <Card padding="lg" variant="outlined" style={{ width: '150px' }}>
        <div style={{ backgroundColor: '#f0f0f0' }}>
          Padding: lg
        </div>
      </Card>
    </div>
  ),
}

// Header와 Footer
export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card
      header={
        <div>
          <h3 style={{ margin: 0 }}>카드 제목</h3>
          <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>부제목</p>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>취소</button>
          <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px' }}>
            확인
          </button>
        </div>
      }
      style={{ width: '400px' }}
    >
      <p>카드 본문 내용입니다. Header와 Footer를 사용하여 카드를 구조화할 수 있습니다.</p>
    </Card>
  ),
}

// 이미지가 있는 카드
export const WithImage: Story = {
  render: () => (
    <Card
      image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400"
      imageAlt="고양이"
      style={{ width: '300px' }}
    >
      <h3 style={{ marginTop: 0 }}>귀여운 고양이</h3>
      <p>이미지와 함께 표시되는 카드입니다.</p>
    </Card>
  ),
}

// 이미지 + Header + Footer
export const CompleteCard: Story = {
  render: () => (
    <Card
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
      imageAlt="산"
      header={
        <div>
          <h3 style={{ margin: 0 }}>자연 풍경</h3>
          <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>아름다운 산</p>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>2024-01-08</span>
          <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px' }}>
            더 보기
          </button>
        </div>
      }
      style={{ width: '350px' }}
    >
      <p>완벽한 구성의 카드입니다. 이미지, 헤더, 본문, 푸터를 모두 포함합니다.</p>
    </Card>
  ),
}

// 클릭 가능한 카드
export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card
        onClick={() => alert('카드 1 클릭!')}
        style={{ width: '200px', cursor: 'pointer' }}
      >
        <h3 style={{ marginTop: 0 }}>클릭 가능 카드 1</h3>
        <p>이 카드를 클릭해보세요!</p>
      </Card>
      <Card
        onClick={() => alert('카드 2 클릭!')}
        variant="outlined"
        style={{ width: '200px', cursor: 'pointer' }}
      >
        <h3 style={{ marginTop: 0 }}>클릭 가능 카드 2</h3>
        <p>호버 효과가 있습니다.</p>
      </Card>
      <Card
        onClick={() => alert('카드 3 클릭!')}
        variant="filled"
        style={{ width: '200px', cursor: 'pointer' }}
      >
        <h3 style={{ marginTop: 0 }}>클릭 가능 카드 3</h3>
        <p>클릭 시 알림이 표시됩니다.</p>
      </Card>
    </div>
  ),
}

// 비활성화된 카드
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card disabled style={{ width: '200px' }}>
        <h3 style={{ marginTop: 0 }}>비활성화 카드</h3>
        <p>이 카드는 비활성화 상태입니다.</p>
      </Card>
      <Card onClick={() => {}} disabled style={{ width: '200px' }}>
        <h3 style={{ marginTop: 0 }}>클릭 불가</h3>
        <p>클릭할 수 없습니다.</p>
      </Card>
    </div>
  ),
}

// 사용 예시: 제품 카드
export const ProductCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px', backgroundColor: '#f5f5f5' }}>
      {[
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
          title: '무선 헤드폰',
          price: '₩129,000',
          rating: '4.5',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
          title: '스마트 워치',
          price: '₩299,000',
          rating: '4.8',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
          title: '선글라스',
          price: '₩89,000',
          rating: '4.3',
        },
      ].map((product) => (
        <Card
          key={product.id}
          image={product.image}
          imageAlt={product.title}
          onClick={() => alert(`${product.title} 상세 보기`)}
          style={{ width: '280px' }}
          padding="none"
        >
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px' }}>{product.title}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1976d2' }}>
                {product.price}
              </span>
              <span style={{ fontSize: '14px', color: '#666' }}>⭐ {product.rating}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  ),
}

// 사용 예시: 블로그 카드
export const BlogCards: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', backgroundColor: '#f5f5f5', maxWidth: '600px' }}>
      {[
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
          title: 'React 18의 새로운 기능',
          excerpt: 'React 18에서 도입된 동시성 렌더링과 자동 배칭에 대해 알아봅니다.',
          date: '2024-01-05',
          readTime: '5분',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
          title: 'TypeScript 실전 가이드',
          excerpt: '타입스크립트를 실무에서 효과적으로 활용하는 방법을 소개합니다.',
          date: '2024-01-03',
          readTime: '8분',
        },
      ].map((post) => (
        <Card
          key={post.id}
          image={post.image}
          imageAlt={post.title}
          onClick={() => alert(`${post.title} 읽기`)}
          variant="outlined"
          padding="none"
        >
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px' }}>{post.title}</h3>
            <p style={{ margin: '0 0 12px', color: '#666' }}>{post.excerpt}</p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#999' }}>
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  ),
}

// 사용 예시: 프로필 카드
export const ProfileCard: Story = {
  render: () => (
    <Card
      header={
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="프로필"
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '8px' }}
          />
          <h3 style={{ margin: '0' }}>홍길동</h3>
          <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>프론트엔드 개발자</p>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ flex: 1, padding: '8px', cursor: 'pointer', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
            메시지
          </button>
          <button style={{ flex: 1, padding: '8px', cursor: 'pointer', border: 'none', borderRadius: '4px', backgroundColor: '#1976d2', color: 'white' }}>
            팔로우
          </button>
        </div>
      }
      style={{ width: '300px' }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 16px', color: '#666' }}>
          웹 개발을 사랑하는 개발자입니다. React와 TypeScript를 주로 사용합니다.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '16px', borderTop: '1px solid #eee' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>1.2K</div>
            <div style={{ fontSize: '12px', color: '#666' }}>팔로워</div>
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>345</div>
            <div style={{ fontSize: '12px', color: '#666' }}>팔로잉</div>
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>89</div>
            <div style={{ fontSize: '12px', color: '#666' }}>게시물</div>
          </div>
        </div>
      </div>
    </Card>
  ),
}

// Interactive Playground
export const Interactive: Story = {
  args: {
    children: '인터랙티브 카드 내용입니다. 옵션을 조정해보세요!',
    variant: 'elevated',
    padding: 'md',
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Card {...args} />
    </div>
  ),
}
