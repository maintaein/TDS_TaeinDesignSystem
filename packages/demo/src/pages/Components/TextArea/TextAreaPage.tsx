import { useState } from 'react';
import {
  TextArea,
  Card,
  List,
  ListItem,
} from '@taein-designsystem/core';
import { LivePreview } from '../../../components/LivePreview';
import { CodeBlock } from '../../../components/CodeBlock';
import { PropsTable } from '../../../components/PropsTable';
import type { PropDefinition } from '../../../components/PropsTable/PropsTable';
import { AccessibilitySection } from '../../../components/AccessibilitySection';
import * as styles from './TextAreaPage.css';

export function TextAreaPage() {
  const [basicValue, setBasicValue] = useState('');
  const [autoResizeValue, setAutoResizeValue] = useState('');
  const [errorValue, setErrorValue] = useState('내용이 너무 짧습니다');

  const propsData: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      required: true,
      description: '레이블 텍스트',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'TextArea 크기',
    },
    {
      name: 'autoResize',
      type: 'boolean',
      default: 'false',
      description: '높이 자동 조정',
    },
    {
      name: 'height',
      type: 'string | number',
      default: '120',
      description: '최소 높이 (px 또는 문자열)',
    },
    {
      name: 'error',
      type: 'boolean',
      default: 'false',
      description: '에러 상태',
    },
    {
      name: 'errorMessage',
      type: 'string',
      default: 'undefined',
      description: '에러 메시지',
    },
    {
      name: 'helperText',
      type: 'string',
      default: 'undefined',
      description: '도움말 텍스트',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: '전체 너비 사용',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: '비활성화 상태',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: '필수 입력 여부',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: 'undefined',
      description: 'Placeholder 텍스트',
    },
    {
      name: 'rows',
      type: 'number',
      default: 'undefined',
      description: '기본 행 수',
    },
    {
      name: 'maxLength',
      type: 'number',
      default: 'undefined',
      description: '최대 문자 수',
    },
  ];

  return (
    <article className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>TextArea</h1>
        <p className={styles.description}>
          여러 줄의 텍스트 입력을 받는 폼 컴포넌트입니다. 자동 높이 조정, 다양한 크기, 에러 처리와 접근성을 지원합니다.
        </p>
      </header>

      {/* Quick Reference */}
      <section className={styles.quickReference}>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Import</h3>
            <CodeBlock
              language="typescript"
              code={`import { TextArea } from '@taein-designsystem/core';`}
            />
          </Card.Body>
        </Card>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Basic Usage</h3>
            <CodeBlock
              language="tsx"
              code={`<TextArea
  label="설명"
  placeholder="내용을 입력하세요"
/>`}
            />
          </Card.Body>
        </Card>
      </section>

      {/* Examples Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Examples</h2>
          <p className={styles.sectionDescription}>
            다양한 사용 사례와 인터랙티브 예제를 통해 TextArea의 기능을 확인하세요.
          </p>
        </div>

        {/* Basic Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Basic TextArea</h3>
          <LivePreview
            title="기본 사용"
            description="가장 기본적인 TextArea 사용 예제입니다."
            code={`<TextArea
  label="설명"
  placeholder="내용을 입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
          >
            <TextArea
              label="설명"
              placeholder="내용을 입력하세요"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            />
          </LivePreview>
        </div>

        {/* Sizes */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Sizes</h3>
          <LivePreview
            title="크기 옵션"
            description="sm, md, lg 세 가지 크기를 제공합니다."
            code={`<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <TextArea label="Small" size="sm" placeholder="작은 크기" />
  <TextArea label="Medium (기본)" size="md" placeholder="중간 크기" />
  <TextArea label="Large" size="lg" placeholder="큰 크기" />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextArea label="Small" size="sm" placeholder="작은 크기" />
              <TextArea label="Medium (기본)" size="md" placeholder="중간 크기" />
              <TextArea label="Large" size="lg" placeholder="큰 크기" />
            </div>
          </LivePreview>
        </div>

        {/* Auto Resize */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Auto Resize</h3>
          <LivePreview
            title="자동 높이 조정"
            description="autoResize prop으로 내용에 맞춰 높이가 자동으로 조정됩니다."
            code={`<TextArea
  label="자동 높이 조정"
  placeholder="텍스트를 입력하면 높이가 자동으로 늘어납니다"
  autoResize
  value={autoResizeValue}
  onChange={(e) => setAutoResizeValue(e.target.value)}
/>`}
          >
            <TextArea
              label="자동 높이 조정"
              placeholder="텍스트를 입력하면 높이가 자동으로 늘어납니다"
              autoResize
              value={autoResizeValue}
              onChange={(e) => setAutoResizeValue(e.target.value)}
            />
          </LivePreview>
        </div>

        {/* Height */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Custom Height</h3>
          <LivePreview
            title="높이 조정"
            description="height prop으로 최소 높이를 설정할 수 있습니다."
            code={`<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <TextArea
    label="기본 높이 (120px)"
    placeholder="기본 높이"
  />
  <TextArea
    label="커스텀 높이 (200px)"
    placeholder="높은 TextArea"
    height={200}
  />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextArea
                label="기본 높이 (120px)"
                placeholder="기본 높이"
              />
              <TextArea
                label="커스텀 높이 (200px)"
                placeholder="높은 TextArea"
                height={200}
              />
            </div>
          </LivePreview>
        </div>

        {/* States */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>States</h3>
          <LivePreview
            title="상태 표시"
            description="에러, 비활성화, 필수 입력 등의 상태를 표현합니다."
            code={`<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <TextArea
    label="에러 상태"
    value={errorValue}
    onChange={(e) => setErrorValue(e.target.value)}
    error
    errorMessage="최소 10자 이상 입력해주세요"
  />
  <TextArea
    label="비활성화된 입력"
    placeholder="입력할 수 없습니다"
    disabled
  />
  <TextArea
    label="필수 입력"
    placeholder="필수 항목입니다"
    required
    helperText="이 항목은 반드시 입력해야 합니다"
  />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextArea
                label="에러 상태"
                value={errorValue}
                onChange={(e) => setErrorValue(e.target.value)}
                error
                errorMessage="최소 10자 이상 입력해주세요"
              />
              <TextArea
                label="비활성화된 입력"
                placeholder="입력할 수 없습니다"
                disabled
              />
              <TextArea
                label="필수 입력"
                placeholder="필수 항목입니다"
                required
                helperText="이 항목은 반드시 입력해야 합니다"
              />
            </div>
          </LivePreview>
        </div>

        {/* Helper Text */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Helper Text</h3>
          <LivePreview
            title="도움말 텍스트"
            description="입력 필드 아래에 도움말을 표시할 수 있습니다."
            code={`<TextArea
  label="피드백"
  placeholder="의견을 작성해주세요"
  helperText="최소 50자 이상 작성해주시면 감사하겠습니다"
  height={150}
/>`}
          >
            <TextArea
              label="피드백"
              placeholder="의견을 작성해주세요"
              helperText="최소 50자 이상 작성해주시면 감사하겠습니다"
              height={150}
            />
          </LivePreview>
        </div>

        {/* Full Width */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Full Width</h3>
          <LivePreview
            title="전체 너비"
            description="fullWidth prop으로 부모 요소의 전체 너비를 사용합니다."
            code={`<TextArea
  label="상세 설명"
  placeholder="상세한 설명을 입력하세요"
  fullWidth
  height={150}
/>`}
          >
            <TextArea
              label="상세 설명"
              placeholder="상세한 설명을 입력하세요"
              fullWidth
              height={150}
            />
          </LivePreview>
        </div>

        {/* Max Length */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Max Length</h3>
          <LivePreview
            title="최대 문자 수"
            description="maxLength prop으로 입력 가능한 최대 문자 수를 제한합니다."
            code={`<TextArea
  label="짧은 메모"
  placeholder="최대 100자까지 입력 가능"
  maxLength={100}
  helperText="100자 이내로 작성해주세요"
/>`}
          >
            <TextArea
              label="짧은 메모"
              placeholder="최대 100자까지 입력 가능"
              maxLength={100}
              helperText="100자 이내로 작성해주세요"
            />
          </LivePreview>
        </div>
      </section>

      {/* Props API */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Props API</h2>
          <p className={styles.sectionDescription}>
            TextArea 컴포넌트의 모든 Props와 타입 정보입니다.
          </p>
        </div>
        <div className={styles.propsTableWrapper}>
          <PropsTable props={propsData} />
        </div>
      </section>

      {/* Accessibility */}
      <AccessibilitySection
        componentName="TextArea"
        intro="TextArea 컴포넌트는 다음과 같이 기본적인 접근성을 제공해요. 덕분에 별도의 설정 없이도 기본적으로 사용자의 접근성을 고려한 형태의 TextArea 컴포넌트를 제공할 수 있어요."
        features={[
          {
            attribute: 'label',
            effect: '스크린 리더에서 입력 영역의 용도를 읽어줘요.',
            description: '레이블이 textarea와 자동으로 연결되어 사용자가 무엇을 입력해야 하는지 명확히 알 수 있어요.',
          },
          {
            attribute: 'required',
            effect: '필수 입력 항목임을 스크린 리더에 알려줘요.',
            description: 'aria-required="true"가 설정되어 필수 입력 필드라는 정보를 제공해요.',
          },
          {
            attribute: 'error + errorMessage',
            effect: '에러 메시지를 스크린 리더가 읽어줘요.',
            description: 'aria-describedby로 에러 메시지가 연결되어 사용자가 무엇이 잘못되었는지 알 수 있어요.',
          },
          {
            attribute: 'disabled',
            effect: '비활성화 상태를 스크린 리더에서 알려줘요.',
            description: 'aria-disabled="true"가 설정되어 입력할 수 없는 상태임을 전달해요.',
          },
          {
            attribute: 'helperText',
            effect: '추가 설명을 스크린 리더가 읽어줘요.',
            description: 'aria-describedby로 도움말이 연결되어 입력에 대한 가이드를 제공해요.',
          },
        ]}
        additionalGuidance={[
          {
            title: 'placeholder는 레이블이 아니에요',
            description: 'placeholder만으로는 접근성이 충분하지 않아요. 반드시 label prop을 사용해 명확한 레이블을 제공해주세요.',
            examples: [
              {
                code: `// Good ✓
<TextArea
  label="의견 작성"
  placeholder="자유롭게 의견을 작성해주세요"
/>

// Bad ✗
<TextArea
  placeholder="의견을 작성하세요"
/>`,
                explanation: 'placeholder는 입력 시 사라지기 때문에 레이블 역할을 할 수 없어요.',
              },
            ],
          },
          {
            title: '글자 수 제한은 명확하게',
            description: 'maxLength를 사용할 때는 helperText로 제한을 명확히 안내해주세요.',
            examples: [
              {
                code: `// Good ✓
<TextArea
  label="소개"
  maxLength={500}
  helperText="최대 500자까지 입력 가능합니다"
/>

// Bad ✗
<TextArea
  label="소개"
  maxLength={500}
/>`,
                explanation: '글자 수 제한을 미리 알려주면 사용자가 더 쉽게 입력할 수 있어요.',
              },
            ],
          },
        ]}
      />

      {/* Best Practices */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Best Practices</h2>
          <p className={styles.sectionDescription}>
            TextArea를 효과적으로 사용하기 위한 권장사항입니다.
          </p>
        </div>

        <div className={styles.practicesGrid}>
          <Card>
            <Card.Body padding="lg">
              <div className={styles.practiceHeader}>
                <span className={styles.practiceIcon}>✓</span>
                <h3 className={styles.practiceTitle}>Do</h3>
              </div>
              <List spacing="sm" className={styles.practiceList}>
                <ListItem>명확하고 구체적인 레이블 사용</ListItem>
                <ListItem>적절한 최소 높이 설정 (내용에 맞게)</ListItem>
                <ListItem>긴 텍스트 입력 시 autoResize 활용</ListItem>
                <ListItem>maxLength와 helperText로 입력 가이드 제공</ListItem>
                <ListItem>에러 발생 시 구체적인 해결 방법 안내</ListItem>
              </List>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body padding="lg">
              <div className={styles.practiceHeader}>
                <span className={styles.practiceIconError}>✗</span>
                <h3 className={styles.practiceTitle}>Don't</h3>
              </div>
              <List spacing="sm" className={styles.practiceList}>
                <ListItem>짧은 입력에 TextArea 사용하지 않기 (TextField 권장)</ListItem>
                <ListItem>placeholder만으로 레이블 대체하지 않기</ListItem>
                <ListItem>너무 작은 높이 설정 (최소 120px 권장)</ListItem>
                <ListItem>모호한 에러 메시지 ("잘못된 입력")</ListItem>
                <ListItem>resize 속성 무분별하게 제한하지 않기</ListItem>
              </List>
            </Card.Body>
          </Card>
        </div>
      </section>
    </article>
  );
}
