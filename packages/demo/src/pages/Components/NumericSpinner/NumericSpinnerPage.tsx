import { useState } from 'react';
import {
  NumericSpinner,
  Card,
  List,
  ListItem,
} from '@taein-designsystem/core';
import { LivePreview } from '../../../components/LivePreview';
import { CodeBlock } from '../../../components/CodeBlock';
import { PropsTable } from '../../../components/PropsTable';
import type { PropDefinition } from '../../../components/PropsTable/PropsTable';
import { AccessibilitySection } from '../../../components/AccessibilitySection';
import * as styles from './NumericSpinnerPage.css';

export function NumericSpinnerPage() {
  const [basicValue, setBasicValue] = useState<number>(1);
  const [sizeSmValue, setSizeSmValue] = useState<number>(1);
  const [sizeMdValue, setSizeMdValue] = useState<number>(1);
  const [sizeLgValue, setSizeLgValue] = useState<number>(1);
  const [quantityValue, setQuantityValue] = useState<number>(1);
  const [priceValue, setPriceValue] = useState<number>(10);
  const [requiredValue, setRequiredValue] = useState<number>(1);
  const [disabledValue1, setDisabledValue1] = useState<number>(5);
  const [disabledValue2, setDisabledValue2] = useState<number>(10);
  const [disabledValue3, setDisabledValue3] = useState<number>(0);
  const [fullWidthValue, setFullWidthValue] = useState<number>(5);
  const [customWidthValue, setCustomWidthValue] = useState<number>(100);
  const [errorValue, setErrorValue] = useState<number>(0);

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
      description: 'NumericSpinner 크기',
    },
    {
      name: 'inputWidth',
      type: 'string',
      default: 'undefined',
      description: "Input 너비 (CSS 단위, 예: '100px', '10rem')",
    },
    {
      name: 'min',
      type: 'number',
      default: 'undefined',
      description: '최소값',
    },
    {
      name: 'max',
      type: 'number',
      default: 'undefined',
      description: '최대값',
    },
    {
      name: 'step',
      type: 'number',
      default: '1',
      description: '증감 단위',
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
      name: 'value',
      type: 'number',
      default: 'undefined',
      description: '현재 값 (controlled)',
    },
  ];

  return (
    <article className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>NumericSpinner</h1>
        <p className={styles.description}>
          사용자로부터 숫자 입력을 받는 폼 컴포넌트입니다. 증가/감소 버튼으로 값을 조정할 수 있으며, 최소/최대값 제한, 증감 단위 설정을 지원합니다.
        </p>
      </header>

      {/* Quick Reference */}
      <section className={styles.quickReference}>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Import</h3>
            <CodeBlock
              language="typescript"
              code={`import { NumericSpinner } from '@taein-designsystem/core';`}
            />
          </Card.Body>
        </Card>
        <Card className={styles.quickRefCard}>
          <Card.Body padding="md">
            <h3 className={styles.quickRefTitle}>Basic Usage</h3>
            <CodeBlock
              language="tsx"
              code={`<NumericSpinner
  label="수량"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={0}
  max={10}
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
            다양한 사용 사례에 맞는 NumericSpinner 예제입니다.
          </p>
        </div>

        {/* Basic Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Basic NumericSpinner</h3>
          <LivePreview
            title="기본 사용법"
            description="가장 기본적인 NumericSpinner 사용 예제입니다."
            code={`const [value, setValue] = useState<number>(1);

<NumericSpinner
  label="수량"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
/>`}
          >
            <NumericSpinner
              label="수량"
              value={basicValue}
              onChange={(e) => setBasicValue(Number(e.target.value))}
            />
          </LivePreview>
        </div>

        {/* State Management Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>State</h3>
          <LivePreview
            title="상태"
            description="NumericSpinner는 외부 관리와 내부 관리 두 가지 상태 관리 패턴을 지원합니다. 
value를 전달하면 외부에서 상태를 제어하고, defaultValue를 전달하면 컴포넌트가 자체적으로 상태를 관리합니다."
            code={`// Controlled: 외부에서 상태 관리
const [value, setValue] = useState<number>(1);

<NumericSpinner
  label="수량 (Controlled)"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={0}
  max={10}
  helperText={\`현재 값: \${value}\`}
/>

// Uncontrolled: 컴포넌트 내부에서 상태 관리
<NumericSpinner
  label="수량 (Uncontrolled)"
  defaultValue={5}
  min={0}
  max={10}
  helperText="초기값 5, 이후 자체 관리"
/>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <NumericSpinner
                label="수량 (Controlled)"
                value={basicValue}
                onChange={(e) => setBasicValue(Number(e.target.value))}
                min={0}
                max={10}
                helperText={`현재 값: ${basicValue}`}
              />
              <NumericSpinner
                label="수량 (Uncontrolled)"
                defaultValue={5}
                min={0}
                max={10}
                helperText="초기값 5, 이후 자체 관리"
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
            code={`const [smValue, setSmValue] = useState<number>(1);
const [mdValue, setMdValue] = useState<number>(1);
const [lgValue, setLgValue] = useState<number>(1);

<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <NumericSpinner
    label="Small"
    size="sm"
    value={smValue}
    onChange={(e) => setSmValue(Number(e.target.value))}
  />
  <NumericSpinner
    label="Medium (기본)"
    size="md"
    value={mdValue}
    onChange={(e) => setMdValue(Number(e.target.value))}
  />
  <NumericSpinner
    label="Large"
    size="lg"
    value={lgValue}
    onChange={(e) => setLgValue(Number(e.target.value))}
  />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <NumericSpinner
                label="Small"
                size="sm"
                value={sizeSmValue}
                onChange={(e) => setSizeSmValue(Number(e.target.value))}
              />
              <NumericSpinner
                label="Medium (기본)"
                size="md"
                value={sizeMdValue}
                onChange={(e) => setSizeMdValue(Number(e.target.value))}
              />
              <NumericSpinner
                label="Large"
                size="lg"
                value={sizeLgValue}
                onChange={(e) => setSizeLgValue(Number(e.target.value))}
              />
            </div>
          </LivePreview>
        </div>

        {/* Min/Max Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Min/Max Values</h3>
          <LivePreview
            title="최소/최대값 설정"
            description="min과 max prop으로 값의 범위를 제한할 수 있습니다."
            code={`const [value, setValue] = useState<number>(1);

<NumericSpinner
  label="수량 선택"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={1}
  max={10}
  helperText="1개에서 10개까지 선택 가능합니다"
/>`}
          >
            <NumericSpinner
              label="수량 선택"
              value={quantityValue}
              onChange={(e) => setQuantityValue(Number(e.target.value))}
              min={1}
              max={10}
              helperText="1개에서 10개까지 선택 가능합니다"
            />
          </LivePreview>
        </div>

        {/* Step Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Custom Step</h3>
          <LivePreview
            title="증감 단위 설정"
            description="step prop으로 버튼 클릭 시 변경되는 값의 단위를 설정할 수 있습니다."
            code={`const [value, setValue] = useState<number>(10);

<NumericSpinner
  label="가격 (원)"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={0}
  max={100}
  step={10}
  helperText="10원 단위로 조정됩니다"
/>`}
          >
            <NumericSpinner
              label="가격 (원)"
              value={priceValue}
              onChange={(e) => setPriceValue(Number(e.target.value))}
              min={0}
              max={100}
              step={10}
              helperText="10원 단위로 조정됩니다"
            />
          </LivePreview>
        </div>

        {/* Required Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Required</h3>
          <LivePreview
            title="필수 입력 표시"
            description="required prop으로 필수 항목임을 나타냅니다."
            code={`const [value, setValue] = useState<number>(1);

<NumericSpinner
  label="참석 인원"
  required
  helperText="최소 1명 이상 입력해야 합니다"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={1}
  max={100}
/>`}
          >
            <NumericSpinner
              label="참석 인원"
              required
              helperText="최소 1명 이상 입력해야 합니다"
              value={requiredValue}
              onChange={(e) => setRequiredValue(Number(e.target.value))}
              min={1}
              max={100}
            />
          </LivePreview>
        </div>

        {/* Disabled Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Disabled</h3>
          <LivePreview
            title="비활성화 상태"
            description="disabled prop으로 상호작용을 막을 수 있습니다. 최대/최소값에 도달하면 해당 버튼이 자동으로 비활성화됩니다."
            code={`const [value1, setValue1] = useState<number>(5);
const [value2, setValue2] = useState<number>(10);
const [value3, setValue3] = useState<number>(0);

<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <NumericSpinner
    label="비활성화된 입력"
    disabled
    value={value1}
    onChange={(e) => setValue1(Number(e.target.value))}
  />
  <NumericSpinner
    label="최대값 도달"
    value={value2}
    onChange={(e) => setValue2(Number(e.target.value))}
    max={10}
  />
  <NumericSpinner
    label="최소값 도달"
    value={value3}
    onChange={(e) => setValue3(Number(e.target.value))}
    min={0}
  />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <NumericSpinner
                label="비활성화된 입력"
                disabled
                value={disabledValue1}
                onChange={(e) => setDisabledValue1(Number(e.target.value))}
              />
              <NumericSpinner
                label="최대값 도달"
                value={disabledValue2}
                onChange={(e) => setDisabledValue2(Number(e.target.value))}
                max={10}
              />
              <NumericSpinner
                label="최소값 도달"
                value={disabledValue3}
                onChange={(e) => setDisabledValue3(Number(e.target.value))}
                min={0}
              />
            </div>
          </LivePreview>
        </div>

        {/* Error State Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Error State</h3>
          <LivePreview
            title="에러 상태"
            description="error와 errorMessage로 유효성 검사 오류를 표시합니다."
            code={`const [value, setValue] = useState<number>(0);

<NumericSpinner
  label="최소 주문 수량"
  required
  error
  errorMessage="최소 1개 이상 주문해야 합니다"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={1}
  max={100}
/>`}
          >
            <NumericSpinner
              label="최소 주문 수량"
              required
              error
              errorMessage="최소 1개 이상 주문해야 합니다"
              value={errorValue}
              onChange={(e) => setErrorValue(Number(e.target.value))}
              min={1}
              max={100}
            />
          </LivePreview>
        </div>

        {/* Full Width Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Full Width</h3>
          <LivePreview
            title="전체 너비"
            description="fullWidth prop으로 부모 요소의 전체 너비를 사용합니다."
            code={`const [value, setValue] = useState<number>(5);

<NumericSpinner
  label="수량"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
  min={1}
  max={100}
  fullWidth
/>`}
          >
            <NumericSpinner
              label="수량"
              value={fullWidthValue}
              onChange={(e) => setFullWidthValue(Number(e.target.value))}
              min={1}
              max={100}
              fullWidth
            />
          </LivePreview>
        </div>

        {/* Custom Width Example */}
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Custom Input Width</h3>
          <LivePreview
            title="커스텀 입력 너비"
            description="inputWidth prop으로 input 필드의 너비를 직접 지정할 수 있습니다."
            code={`const [value, setValue] = useState<number>(100);

<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <NumericSpinner
    label="좁은 너비 (60px)"
    value={value}
    onChange={(e) => setValue(Number(e.target.value))}
    inputWidth="60px"
  />
  <NumericSpinner
    label="넓은 너비 (150px)"
    value={value}
    onChange={(e) => setValue(Number(e.target.value))}
    inputWidth="150px"
  />
</div>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <NumericSpinner
                label="좁은 너비 (60px)"
                value={customWidthValue}
                onChange={(e) => setCustomWidthValue(Number(e.target.value))}
                inputWidth="60px"
              />
              <NumericSpinner
                label="넓은 너비 (150px)"
                value={customWidthValue}
                onChange={(e) => setCustomWidthValue(Number(e.target.value))}
                inputWidth="150px"
              />
            </div>
          </LivePreview>
        </div>
      </section>

      {/* Props API */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Props API</h2>
          <p className={styles.sectionDescription}>
            NumericSpinner 컴포넌트의 모든 Props와 타입 정보입니다.
          </p>
        </div>
        <div className={styles.propsTableWrapper}>
          <PropsTable props={propsData} />
        </div>
      </section>

      {/* Accessibility */}
      <AccessibilitySection
        componentName="NumericSpinner"
        intro="NumericSpinner 컴포넌트는 다음과 같이 기본적인 접근성을 제공해요. 덕분에 별도의 설정 없이도 기본적으로 사용자의 접근성을 고려한 형태의 NumericSpinner 컴포넌트를 제공할 수 있어요."
        features={[
          {
            attribute: 'label',
            effect: '스크린 리더에서 입력 필드의 용도를 읽어줘요.',
            description: '레이블이 input과 자동으로 연결되어 사용자가 무엇을 입력해야 하는지 명확히 알 수 있어요.',
          },
          {
            attribute: 'aria-label (버튼)',
            effect: '증가/감소 버튼의 역할을 스크린 리더에 알려줘요.',
            description: '"값 증가", "값 감소" 레이블이 각 버튼에 설정되어 버튼의 기능을 명확히 전달해요.',
          },
          {
            attribute: 'min + max',
            effect: '입력 가능한 범위를 스크린 리더에서 알려줘요.',
            description: 'min, max 속성으로 값의 범위가 명확히 전달되어 사용자가 유효한 값을 입력할 수 있어요.',
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
        ]}
        additionalGuidance={[
          {
            title: '명확한 레이블 제공하기',
            description: '숫자가 무엇을 의미하는지 명확한 레이블을 제공해주세요.',
            examples: [
              {
                code: `// Good ✓
<NumericSpinner
  label="수량 (개)"
  value={5}
  min={1}
  max={100}
/>

// Bad ✗
<NumericSpinner
  label="값"
  value={5}
/>`,
                explanation: '단위와 의미가 명확한 레이블이 사용자 경험을 개선해요.',
              },
            ],
          },
          {
            title: '적절한 범위 설정하기',
            description: 'min, max를 사용해 유효한 값의 범위를 명확히 제한해주세요.',
            examples: [
              {
                code: `// Good ✓
<NumericSpinner
  label="나이"
  value={25}
  min={0}
  max={150}
  helperText="0세부터 150세까지 입력 가능합니다"
/>

// Bad ✗
<NumericSpinner
  label="나이"
  value={25}
/>`,
                explanation: '범위 제한이 있으면 잘못된 입력을 미리 방지할 수 있어요.',
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
            NumericSpinner를 효과적으로 사용하기 위한 권장사항입니다.
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
                <ListItem>명확한 레이블과 단위 표시 (예: "수량 (개)")</ListItem>
                <ListItem>적절한 min, max, step 설정</ListItem>
                <ListItem>helperText로 입력 범위 가이드 제공</ListItem>
                <ListItem>작은 범위의 숫자 입력에 사용 (0-100 등)</ListItem>
                <ListItem>증감 버튼이 명확히 보이도록 디자인</ListItem>
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
                <ListItem>큰 범위의 숫자 입력에 사용하지 않기 (TextField 권장)</ListItem>
                <ListItem>소수점이 필요한 경우 신중하게 사용</ListItem>
                <ListItem>step 값을 너무 크게 설정하지 않기</ListItem>
                <ListItem>레이블 없이 아이콘만 사용하지 않기</ListItem>
                <ListItem>음수 입력이 필요한 경우 min을 적절히 설정</ListItem>
              </List>
            </Card.Body>
          </Card>
        </div>
      </section>
    </article>
  );
}
