import { useState } from 'react';
import {
  Checkbox,
  Card,
  List,
  ListItem,
} from '@taein-designsystem/core';
import { LivePreview } from '../../../components/LivePreview';
import { CodeBlock } from '../../../components/CodeBlock';
import { PropsTable } from '../../../components/PropsTable';
import type { PropDefinition } from '../../../components/PropsTable/PropsTable';
import { AccessibilitySection } from '../../../components/AccessibilitySection';
import * as styles from './CheckboxPage.css';

export function CheckboxPage() {
  const [basicChecked, setBasicChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [newsChecked, setNewsChecked] = useState(true);
  const [disabledChecked] = useState(true);
  const [errorChecked, setErrorChecked] = useState(false);

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
      description: 'Checkbox 크기',
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
      name: 'indeterminate',
      type: 'boolean',
      default: 'false',
      description: '불확정 상태 (부분 선택)',
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
      name: 'checked',
      type: 'boolean',
      default: 'undefined',
      description: '체크 상태 (controlled)',
    },
    {
      name: 'defaultChecked',
      type: 'boolean',
      default: 'undefined',
      description: '초기 체크 상태 (uncontrolled)',
    },
  ];

  return (
    <article className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Checkbox</h1>
        <p className={styles.description}>
          사용자로부터 예/아니오 선택을 받는 폼 컴포넌트입니다. 다양한 크기, 상태 표시, 불확정 상태를 지원하며, 접근성을 고려한 설계를 제공합니다.
        </p>
      </header>

      {/* Quick Reference */}
      <section className={styles.quickReference}>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Import</h3>
            <CodeBlock
              language="typescript"
              code={`import { Checkbox } from '@taein-designsystem/core';`}
            />
          </Card.Body>
        </Card>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Basic Usage</h3>
            <CodeBlock
              language="tsx"
              code={`<Checkbox
  label="동의합니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
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
            다양한 사용 사례에 맞는 Checkbox 예제입니다.
          </p>
        </div>

        {/* Basic Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Basic Checkbox</h3>
          <LivePreview
            title="기본 사용법"
            description="가장 기본적인 체크박스 사용 예제입니다."
            code={`const [checked, setChecked] = useState(false);

<Checkbox
  label="기본 체크박스"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Checkbox
              label="기본 체크박스"
              checked={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
            />
          </LivePreview>
        </div>

        {/* State Management Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>State</h3>
          <LivePreview
            title="상태"
            description={`Checkbox는 외부 관리와 내부 관리 두 가지 상태 관리 패턴을 지원합니다.
checked를 전달하면 외부에서 상태를 제어하고, defaultChecked를 전달하면 컴포넌트가 자체적으로 상태를 관리합니다.`}
            code={`// Controlled: 외부에서 상태 관리
const [checked, setChecked] = useState(false);

<Checkbox
  label="알림 수신 동의 (Controlled)"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  helperText={\`현재 상태: \${checked ? '동의' : '미동의'}\`}
/>

// Uncontrolled: 컴포넌트 내부에서 상태 관리
<Checkbox
  label="마케팅 수신 동의 (Uncontrolled)"
  defaultChecked={true}
  helperText="초기값 true, 이후 자체 관리"
/>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Checkbox
                label="알림 수신 동의 (Controlled)"
                checked={basicChecked}
                onChange={(e) => setBasicChecked(e.target.checked)}
                helperText={`현재 상태: ${basicChecked ? '동의' : '미동의'}`}
              />
              <Checkbox
                label="마케팅 수신 동의 (Uncontrolled)"
                defaultChecked={true}
                helperText="초기값 true, 이후 자체 관리"
              />
            </div>
          </LivePreview>
        </div>

        {/* Sizes Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Sizes</h3>
          <LivePreview
            title="크기 옵션"
            description="sm, md, lg 세 가지 크기를 제공합니다."
            code={`<Checkbox label="Small Checkbox" size="sm" />
<Checkbox label="Medium Checkbox" size="md" />
<Checkbox label="Large Checkbox" size="lg" />`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Checkbox label="Small Checkbox" size="sm" />
              <Checkbox label="Medium Checkbox" size="md" />
              <Checkbox label="Large Checkbox" size="lg" />
            </div>
          </LivePreview>
        </div>

        {/* Required Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Required</h3>
          <LivePreview
            title="필수 입력 표시"
            description="required prop으로 필수 항목임을 나타냅니다."
            code={`<Checkbox
  label="필수 동의 항목"
  required
  helperText="서비스 이용을 위해 필수로 동의해야 합니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Checkbox
              label="필수 동의 항목"
              required
              helperText="서비스 이용을 위해 필수로 동의해야 합니다"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
            />
          </LivePreview>
        </div>

        {/* Helper Text Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>With Helper Text</h3>
          <LivePreview
            title="도움말 텍스트"
            description="helperText로 추가 설명을 제공할 수 있습니다."
            code={`<Checkbox
  label="뉴스레터 구독"
  helperText="최신 소식과 업데이트를 받아보세요"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Checkbox
              label="뉴스레터 구독"
              helperText="최신 소식과 업데이트를 받아보세요"
              checked={newsChecked}
              onChange={(e) => setNewsChecked(e.target.checked)}
            />
          </LivePreview>
        </div>

        {/* Disabled Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Disabled</h3>
          <LivePreview
            title="비활성화 상태"
            description="disabled prop으로 상호작용을 막을 수 있습니다."
            code={`<Checkbox label="비활성화 (체크 안됨)" disabled />
<Checkbox label="비활성화 (체크됨)" disabled checked />`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Checkbox label="비활성화 (체크 안됨)" disabled />
              <Checkbox label="비활성화 (체크됨)" disabled checked={disabledChecked} />
            </div>
          </LivePreview>
        </div>

        {/* Error State Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Error State</h3>
          <LivePreview
            title="에러 상태"
            description="error와 errorMessage로 유효성 검사 오류를 표시합니다."
            code={`<Checkbox
  label="필수 약관 동의"
  required
  error
  errorMessage="서비스 이용을 위해 필수 항목에 동의해야 합니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Checkbox
              label="필수 약관 동의"
              required
              error
              errorMessage="서비스 이용을 위해 필수 항목에 동의해야 합니다"
              checked={errorChecked}
              onChange={(e) => setErrorChecked(e.target.checked)}
            />
          </LivePreview>
        </div>
      </section>

      {/* Props API */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Props API</h2>
          <p className={styles.sectionDescription}>
            Checkbox 컴포넌트의 모든 Props와 타입 정보입니다.
          </p>
        </div>
        <div className={styles.propsTableWrapper}>
          <PropsTable props={propsData} />
        </div>
      </section>

      {/* Accessibility */}
      <AccessibilitySection
        componentName="Checkbox"
        intro="Checkbox 컴포넌트는 다음과 같이 기본적인 접근성을 제공해요. 덕분에 별도의 설정 없이도 기본적으로 사용자의 접근성을 고려한 형태의 Checkbox 컴포넌트를 제공할 수 있어요."
        features={[
          {
            attribute: 'label',
            effect: '스크린 리더에서 체크박스의 용도를 읽어줘요.',
            description: '레이블이 input[type="checkbox"]와 자동으로 연결되어 사용자가 무엇을 선택하는지 명확히 알 수 있어요.',
          },
          {
            attribute: 'required',
            effect: '필수 선택 항목임을 스크린 리더에 알려줘요.',
            description: 'aria-required="true"가 설정되어 필수 항목이라는 정보를 제공해요.',
          },
          {
            attribute: 'error + errorMessage',
            effect: '에러 메시지를 스크린 리더가 읽어줘요.',
            description: 'aria-describedby로 에러 메시지가 연결되어 사용자가 무엇이 잘못되었는지 알 수 있어요.',
          },
          {
            attribute: 'disabled',
            effect: '비활성화 상태를 스크린 리더에서 알려줘요.',
            description: 'aria-disabled="true"가 설정되어 선택할 수 없는 상태임을 전달해요.',
          },
          {
            attribute: 'checked',
            effect: '현재 선택 상태를 스크린 리더가 읽어줘요.',
            description: 'aria-checked 속성으로 체크 여부를 명확히 전달해요.',
          },
        ]}
      />

      {/* Best Practices */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Best Practices</h2>
          <p className={styles.sectionDescription}>
            Checkbox를 효과적으로 사용하기 위한 권장사항입니다.
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
                <ListItem>명확하고 간결한 레이블 사용</ListItem>
                <ListItem>선택 사항이 2-5개일 때 사용</ListItem>
                <ListItem>독립적인 선택 항목에 사용 (다중 선택 가능)</ListItem>
                <ListItem>필수 항목은 required로 명시</ListItem>
                <ListItem>그룹화된 체크박스는 fieldset 사용</ListItem>
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
                <ListItem>단일 선택이 필요한 경우 사용하지 않기 (Radio 권장)</ListItem>
                <ListItem>레이블 없이 아이콘만 사용하지 않기</ListItem>
                <ListItem>너무 많은 체크박스 나열 (5개 초과 시 다른 패턴 고려)</ListItem>
                <ListItem>체크박스를 버튼처럼 사용하지 않기</ListItem>
                <ListItem>indeterminate를 일반 체크 상태 대신 사용하지 않기</ListItem>
              </List>
            </Card.Body>
          </Card>
        </div>
      </section>
    </article>
  );
}
