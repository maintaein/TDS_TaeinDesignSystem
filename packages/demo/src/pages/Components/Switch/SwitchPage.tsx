import { useState } from 'react';
import {
  Switch,
  Card,
  List,
  ListItem,
} from '@taein-designsystem/core';
import { LivePreview } from '../../../components/LivePreview';
import { CodeBlock } from '../../../components/CodeBlock';
import { PropsTable } from '../../../components/PropsTable';
import type { PropDefinition } from '../../../components/PropsTable/PropsTable';
import { AccessibilitySection } from '../../../components/AccessibilitySection';
import * as styles from './SwitchPage.css';

export function SwitchPage() {
  const [basicChecked, setBasicChecked] = useState(false);
  const [notificationsChecked, setNotificationsChecked] = useState(true);
  const [darkModeChecked, setDarkModeChecked] = useState(false);
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
      description: 'Switch 크기',
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
        <h1 className={styles.title}>Switch</h1>
        <p className={styles.description}>
          사용자로부터 On/Off 상태를 전환받는 토글 컴포넌트입니다. 다양한 크기, 상태 표시를 지원하며, 접근성을 고려한 설계를 제공합니다.
        </p>
      </header>

      {/* Quick Reference */}
      <section className={styles.quickReference}>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Import</h3>
            <CodeBlock
              language="typescript"
              code={`import { Switch } from '@taein-designsystem/core';`}
            />
          </Card.Body>
        </Card>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Basic Usage</h3>
            <CodeBlock
              language="tsx"
              code={`<Switch
  label="알림 받기"
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
            다양한 사용 사례에 맞는 Switch 예제입니다.
          </p>
        </div>

        {/* Basic Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Basic Switch</h3>
          <LivePreview
            title="기본 사용법"
            description="가장 기본적인 스위치 사용 예제입니다."
            code={`const [checked, setChecked] = useState(false);

<Switch
  label="기본 스위치"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Switch
              label="기본 스위치"
              checked={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
            />
          </LivePreview>
        </div>

        {/* Sizes Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Sizes</h3>
          <LivePreview
            title="크기 옵션"
            description="sm, md, lg 세 가지 크기를 제공합니다."
            code={`<Switch label="Small Switch" size="sm" />
<Switch label="Medium Switch" size="md" />
<Switch label="Large Switch" size="lg" />`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Switch label="Small Switch" size="sm" />
              <Switch label="Medium Switch" size="md" />
              <Switch label="Large Switch" size="lg" />
            </div>
          </LivePreview>
        </div>

        {/* Required Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Required</h3>
          <LivePreview
            title="필수 입력 표시"
            description="required prop으로 필수 항목임을 나타냅니다."
            code={`<Switch
  label="필수 설정 항목"
  required
  helperText="이 설정은 필수로 활성화해야 합니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Switch
              label="필수 설정 항목"
              required
              helperText="이 설정은 필수로 활성화해야 합니다"
              checked={notificationsChecked}
              onChange={(e) => setNotificationsChecked(e.target.checked)}
            />
          </LivePreview>
        </div>

        {/* Helper Text Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>With Helper Text</h3>
          <LivePreview
            title="도움말 텍스트"
            description="helperText로 추가 설명을 제공할 수 있습니다."
            code={`<Switch
  label="다크 모드"
  helperText="화면을 어두운 테마로 변경합니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Switch
              label="다크 모드"
              helperText="화면을 어두운 테마로 변경합니다"
              checked={darkModeChecked}
              onChange={(e) => setDarkModeChecked(e.target.checked)}
            />
          </LivePreview>
        </div>

        {/* Disabled Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Disabled</h3>
          <LivePreview
            title="비활성화 상태"
            description="disabled prop으로 상호작용을 막을 수 있습니다."
            code={`<Switch label="비활성화 (꺼짐)" disabled />
<Switch label="비활성화 (켜짐)" disabled checked />`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Switch label="비활성화 (꺼짐)" disabled />
              <Switch label="비활성화 (켜짐)" disabled checked={disabledChecked} />
            </div>
          </LivePreview>
        </div>

        {/* Error State Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Error State</h3>
          <LivePreview
            title="에러 상태"
            description="error와 errorMessage로 유효성 검사 오류를 표시합니다."
            code={`<Switch
  label="필수 설정"
  required
  error
  errorMessage="이 설정을 활성화해야 계속 진행할 수 있습니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          >
            <Switch
              label="필수 설정"
              required
              error
              errorMessage="이 설정을 활성화해야 계속 진행할 수 있습니다"
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
            Switch 컴포넌트의 모든 Props와 타입 정보입니다.
          </p>
        </div>
        <div className={styles.propsTableWrapper}>
          <PropsTable props={propsData} />
        </div>
      </section>

      {/* Accessibility */}
      <AccessibilitySection
        componentName="Switch"
        intro="Switch 컴포넌트는 다음과 같이 기본적인 접근성을 제공해요. 덕분에 별도의 설정 없이도 기본적으로 사용자의 접근성을 고려한 형태의 Switch 컴포넌트를 제공할 수 있어요."
        features={[
          {
            attribute: 'label',
            effect: '스크린 리더에서 스위치의 용도를 읽어줘요.',
            description: '레이블이 자동으로 연결되어 사용자가 무엇을 켜고 끄는지 명확히 알 수 있어요.',
          },
          {
            attribute: 'role="switch"',
            effect: '스크린 리더에서 "스위치"로 인식해요.',
            description: 'role="switch"와 aria-checked로 토글 상태를 명확히 전달해요.',
          },
          {
            attribute: 'required',
            effect: '필수 설정 항목임을 스크린 리더에 알려줘요.',
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
            description: 'aria-disabled="true"가 설정되어 토글할 수 없는 상태임을 전달해요.',
          },
        ]}
      />

      {/* Best Practices */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Best Practices</h2>
          <p className={styles.sectionDescription}>
            Switch를 효과적으로 사용하기 위한 권장사항입니다.
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
                <ListItem>즉시 효과가 적용되는 설정에 사용</ListItem>
                <ListItem>On/Off 상태가 명확한 기능에 사용</ListItem>
                <ListItem>레이블은 동사형으로 작성 (예: "알림 받기")</ListItem>
                <ListItem>상태 변경 시 즉각적인 피드백 제공</ListItem>
                <ListItem>관련 설정들은 그룹화하여 제공</ListItem>
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
                <ListItem>제출이 필요한 폼 입력에 사용하지 않기 (Checkbox 권장)</ListItem>
                <ListItem>여러 옵션 중 하나를 선택하는 경우 사용하지 않기 (Radio 권장)</ListItem>
                <ListItem>레이블 없이 아이콘만 사용하지 않기</ListItem>
                <ListItem>상태 변경이 즉시 반영되지 않는 경우 사용하지 않기</ListItem>
                <ListItem>너무 많은 스위치를 한 화면에 나열하지 않기</ListItem>
              </List>
            </Card.Body>
          </Card>
        </div>
      </section>
    </article>
  );
}
