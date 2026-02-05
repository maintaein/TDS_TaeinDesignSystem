import { useState } from 'react';
import {
  TextField,
  Card,
  List,
  ListItem,
} from '@taein-designsystem/core';
import { LivePreview } from '../../../components/LivePreview';
import { CodeBlock } from '../../../components/CodeBlock';
import { PropsTable } from '../../../components/PropsTable';
import type { PropDefinition } from '../../../components/PropsTable/PropsTable';
import { AccessibilitySection } from '../../../components/AccessibilitySection';
import * as styles from './TextFieldPage.css';

export function TextFieldPage() {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorValue, setErrorValue] = useState('invalid@');

  const propsData: PropDefinition[] = [
    {
      name: 'label',
      type: 'string',
      required: true,
      description: '레이블 텍스트',
    },
    {
      name: 'type',
      type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",
      default: "'text'",
      description: 'Input 타입',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Input 크기',
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
  ];

  return (
    <article className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>TextField</h1>
        <p className={styles.description}>
          사용자로부터 텍스트 입력을 받는 폼 컴포넌트입니다. 다양한 타입과
          크기를 지원하며, 에러 처리와 접근성을 고려한 설계를 제공합니다.
        </p>
      </header>

      {/* Quick Reference */}
      <section className={styles.quickReference}>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Import</h3>
            <CodeBlock
              language="typescript"
              code={`import { TextField } from '@taein-designsystem/core';`}
            />
          </Card.Body>
        </Card>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Basic Usage</h3>
            <CodeBlock
              language="tsx"
              code={`<TextField
  label="이메일"
  type="email"
  placeholder="example@email.com"
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
            다양한 사용 사례와 인터랙티브 예제를 통해 TextField의 기능을
            확인하세요.
          </p>
        </div>

        {/* Basic Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Basic TextField</h3>
          <LivePreview
            title="기본 사용"
            description="가장 기본적인 TextField 사용 예제입니다."
            code={`<TextField
  label="이름"
  placeholder="홍길동"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
          >
            <TextField
              label="이름"
              placeholder="홍길동"
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
  <TextField label="Small" size="sm" placeholder="작은 크기" />
  <TextField label="Medium (기본)" size="md" placeholder="중간 크기" />
  <TextField label="Large" size="lg" placeholder="큰 크기" />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextField label="Small" size="sm" placeholder="작은 크기" />
              <TextField
                label="Medium (기본)"
                size="md"
                placeholder="중간 크기"
              />
              <TextField label="Large" size="lg" placeholder="큰 크기" />
            </div>
          </LivePreview>
        </div>

        {/* Types */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Input Types</h3>
          <LivePreview
            title="다양한 타입"
            description="text, email, password, number, tel, url 타입을 지원합니다."
            code={`<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <TextField
    label="이메일"
    type="email"
    placeholder="example@email.com"
    value={emailValue}
    onChange={(e) => setEmailValue(e.target.value)}
  />
  <TextField
    label="비밀번호"
    type="password"
    placeholder="••••••••"
    value={passwordValue}
    onChange={(e) => setPasswordValue(e.target.value)}
  />
  <TextField
    label="전화번호"
    type="tel"
    placeholder="010-1234-5678"
  />
  <TextField
    label="웹사이트"
    type="url"
    placeholder="https://example.com"
  />
</div>`}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <TextField
                label="이메일"
                type="email"
                placeholder="example@email.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <TextField
                label="비밀번호"
                type="password"
                placeholder="••••••••"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <TextField
                label="전화번호"
                type="tel"
                placeholder="010-1234-5678"
              />
              <TextField
                label="웹사이트"
                type="url"
                placeholder="https://example.com"
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
  <TextField
    label="이메일"
    type="email"
    value={errorValue}
    onChange={(e) => setErrorValue(e.target.value)}
    error
    errorMessage="올바른 이메일 주소를 입력하세요"
  />
  <TextField
    label="비활성화된 입력"
    placeholder="입력할 수 없습니다"
    disabled
  />
  <TextField
    label="필수 입력"
    placeholder="필수 항목입니다"
    required
    helperText="이 항목은 반드시 입력해야 합니다"
  />
</div>`}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <TextField
                label="이메일"
                type="email"
                value={errorValue}
                onChange={(e) => setErrorValue(e.target.value)}
                error
                errorMessage="올바른 이메일 주소를 입력하세요"
              />
              <TextField
                label="비활성화된 입력"
                placeholder="입력할 수 없습니다"
                disabled
              />
              <TextField
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
            code={`<TextField
  label="사용자명"
  placeholder="영문, 숫자 조합 4-20자"
  helperText="영문 소문자와 숫자만 사용 가능합니다"
/>`}
          >
            <TextField
              label="사용자명"
              placeholder="영문, 숫자 조합 4-20자"
              helperText="영문 소문자와 숫자만 사용 가능합니다"
            />
          </LivePreview>
        </div>

        {/* Full Width */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Full Width</h3>
          <LivePreview
            title="전체 너비"
            description="fullWidth prop으로 부모 요소의 전체 너비를 사용합니다."
            code={`<TextField
  label="주소"
  placeholder="서울특별시 강남구..."
  fullWidth
/>`}
          >
            <TextField
              label="주소"
              placeholder="서울특별시 강남구..."
              fullWidth
            />
          </LivePreview>
        </div>
      </section>

      {/* Props API */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Props API</h2>
          <p className={styles.sectionDescription}>
            TextField 컴포넌트의 모든 Props와 타입 정보입니다.
          </p>
        </div>
        <div className={styles.propsTableWrapper}>
          <PropsTable props={propsData} />
        </div>
      </section>

      {/* Accessibility */}
      <AccessibilitySection
        componentName="TextField"
        intro="TextField 컴포넌트는 다음과 같이 기본적인 접근성을 제공해요. 덕분에 별도의 설정 없이도 기본적으로 사용자의 접근성을 고려한 형태의 TextField 컴포넌트를 제공할 수 있어요."
        features={[
          {
            attribute: 'label',
            effect: '스크린 리더에서 입력 필드의 용도를 읽어줘요.',
            description: '레이블이 input과 자동으로 연결되어 사용자가 무엇을 입력해야 하는지 명확히 알 수 있어요.',
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
            title: '명확한 레이블 제공하기',
            description: 'placeholder만으로는 접근성이 충분하지 않아요. 반드시 label prop을 사용해 명확한 레이블을 제공해주세요.',
            examples: [
              {
                code: `// Good ✓
<TextField
  label="이메일 주소"
  placeholder="example@email.com"
/>

// Bad ✗
<TextField
  placeholder="이메일 주소를 입력하세요"
/>`,
                explanation: 'placeholder는 입력 시 사라지기 때문에 레이블 역할을 할 수 없어요.',
              },
            ],
          },
          {
            title: '에러 메시지는 구체적으로',
            description: '에러가 발생했을 때는 무엇이 잘못되었는지 명확하게 알려주세요.',
            examples: [
              {
                code: `// Good ✓
<TextField
  label="이메일"
  error
  errorMessage="올바른 이메일 형식이 아닙니다. (예: user@example.com)"
/>

// Bad ✗
<TextField
  label="이메일"
  error
  errorMessage="잘못된 입력"
/>`,
                explanation: '구체적인 에러 메시지가 사용자의 문제 해결을 도와줘요.',
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
            TextField를 효과적으로 사용하기 위한 권장사항입니다.
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
                <ListItem>적절한 input type 지정 (email, tel 등)</ListItem>
                <ListItem>유용한 placeholder 제공</ListItem>
                <ListItem>에러 발생 시 구체적인 해결 방법 안내</ListItem>
                <ListItem>helperText로 입력 형식 가이드 제공</ListItem>
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
                <ListItem>placeholder만으로 레이블 대체하지 않기</ListItem>
                <ListItem>모호한 에러 메시지 ("잘못된 입력")</ListItem>
                <ListItem>너무 많은 필수 입력 필드 사용</ListItem>
                <ListItem>자동완성 기능 무분별하게 비활성화</ListItem>
                <ListItem>입력 중 실시간 유효성 검사로 방해하지 않기</ListItem>
              </List>
            </Card.Body>
          </Card>
        </div>
      </section>
    </article>
  );
}
