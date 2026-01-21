import { Button } from '@taein-designsystem/core';
import { CodeBlock } from '../../components/CodeBlock';
import { LivePreview } from '../../components/LivePreview';
import { ColorPalette, type ColorItem } from '../../components/ColorPalette';
import { PropsTable, type PropDefinition } from '../../components/PropsTable';
import { Search, type SearchItem } from '../../components/Search';
import * as styles from './ComponentTestPage.css';

// 샘플 데이터
const sampleColors: ColorItem[] = [
  { name: 'Primary 500', hex: '#2563eb', description: '메인 브랜드 색상' },
  { name: 'Gray 500', hex: '#6b7280', description: '중립 회색' },
  { name: 'Success 500', hex: '#10b981', description: '성공 상태' },
  { name: 'Error 500', hex: '#ef4444', description: '에러 상태' },
  { name: 'Warning 500', hex: '#f59e0b', description: '경고 상태' },
];

const sampleProps: PropDefinition[] = [
  {
    name: 'variant',
    type: "'primary' | 'dark' | 'danger' | 'light'",
    default: "'primary'",
    description: '버튼의 시각적 스타일을 지정합니다.',
    required: false,
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: '버튼의 크기를 지정합니다.',
    required: false,
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '로딩 상태를 표시합니다.',
    required: false,
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '버튼을 비활성화합니다.',
    required: false,
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: '버튼 내부에 표시할 콘텐츠입니다.',
    required: true,
  },
];

const searchItems: SearchItem[] = [
  { id: '1', label: 'Button', path: '/components/button', category: '입력' },
  { id: '2', label: 'TextField', path: '/components/textfield', category: '입력' },
  { id: '3', label: 'Modal', path: '/components/modal', category: '오버레이' },
  { id: '4', label: 'Card', path: '/components/card', category: '레이아웃' },
  { id: '5', label: 'Badge', path: '/components/badge', category: '표시' },
];

const sampleCode = `import { Button } from '@taein-designsystem/core';

function Example() {
  return (
    <Button variant="primary" size="md">
      Click Me
    </Button>
  );
}`;

export function ComponentTestPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>유틸리티 컴포넌트 테스트</h1>
      <p className={styles.description}>
        데모 앱에서 사용할 5개의 유틸리티 컴포넌트를 테스트합니다.
      </p>

      {/* Search 컴포넌트 테스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Search 컴포넌트</h2>
        <p className={styles.sectionDescription}>
          실시간 컴포넌트 검색 기능을 제공합니다. 키보드 네비게이션 (Arrow Up/Down, Enter, Escape)을 지원합니다.
        </p>
        <div className={styles.demo}>
          <Search items={searchItems} placeholder="컴포넌트 검색..." maxResults={5} />
        </div>
      </section>

      {/* CodeBlock 컴포넌트 테스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. CodeBlock 컴포넌트</h2>
        <p className={styles.sectionDescription}>
          코드 구문 강조 및 복사 기능을 제공합니다. 다크모드 자동 전환을 지원합니다.
        </p>
        <div className={styles.demo}>
          <CodeBlock
            code={sampleCode}
            language="tsx"
            showLineNumbers={true}
            fileName="Example.tsx"
          />
        </div>
      </section>

      {/* LivePreview 컴포넌트 테스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. LivePreview 컴포넌트</h2>
        <p className={styles.sectionDescription}>
          실시간 컴포넌트 미리보기와 코드를 함께 표시합니다.
        </p>
        <div className={styles.demo}>
          <LivePreview
            code={`<Button variant="primary">Primary</Button>
<Button variant="dark">Dark</Button>
<Button variant="danger">Danger</Button>
<Button variant="light">Light</Button>`}
            language="tsx"
            title="Button Variants"
            description="4가지 variant를 제공합니다."
            centered={true}
            padding="md"
          >
            <Button variant="primary">Primary</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="light">Light</Button>
          </LivePreview>
        </div>
      </section>

      {/* ColorPalette 컴포넌트 테스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. ColorPalette 컴포넌트</h2>
        <p className={styles.sectionDescription}>
          색상 팔레트를 시각화하고 클릭하여 HEX 코드를 복사할 수 있습니다.
        </p>
        <div className={styles.demo}>
          <ColorPalette colors={sampleColors} columns={5} showNames={true} />
        </div>
      </section>

      {/* PropsTable 컴포넌트 테스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. PropsTable 컴포넌트</h2>
        <p className={styles.sectionDescription}>
          컴포넌트의 Props API 문서를 표 형태로 보여줍니다.
        </p>
        <div className={styles.demo}>
          <PropsTable props={sampleProps} />
        </div>
      </section>

      {/* 종합 테스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. 종합 예시</h2>
        <p className={styles.sectionDescription}>
          여러 컴포넌트를 조합한 실제 사용 예시입니다.
        </p>
        <div className={styles.demo}>
          <LivePreview
            code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="xl">Extra Large</Button>`}
            language="tsx"
            title="Button Sizes"
            description="4가지 크기를 제공합니다."
            centered={true}
            padding="lg"
          >
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" size="xl">
              Extra Large
            </Button>
          </LivePreview>
        </div>
      </section>

      {/* 다크모드 테스트 안내 */}
      <section className={styles.section}>
        <div className={styles.notice}>
          <h3 className={styles.noticeTitle}>💡 다크모드 테스트</h3>
          <p className={styles.noticeText}>
            헤더의 테마 토글 버튼을 클릭하여 다크모드를 전환하고 모든 컴포넌트의 다크모드 스타일을 확인해보세요.
          </p>
        </div>
      </section>
    </div>
  );
}
