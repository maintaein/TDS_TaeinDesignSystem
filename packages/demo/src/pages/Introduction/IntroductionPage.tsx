import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Card,
  Text,
  Badge,
  Switch,
  Chip,
} from '@taein-designsystem/core';
import { LivePreview } from '../../components/LivePreview';
import * as styles from './IntroductionPage.css';

export function IntroductionPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <Text variant="h1" as="span" className={styles.heroTitleMain}>
              TDS
            </Text>
            <span className={styles.heroTitleSub}>Taein Design System</span>
          </h1>
          <p className={styles.heroDescription}>
            일관된 UI와 효율적인 개발을 위해 만든 React 기반 디자인
            시스템입니다.
            <br />
            가볍고, 배우기 쉽고, AI 친화적인 라이브러리를 지향합니다.
          </p>
          <div className={styles.heroActions}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/getting-started')}
            >
              시작하기
            </Button>
            <Button
              variant="light"
              size="lg"
              onClick={() => navigate('/components')}
            >
              컴포넌트 보기
            </Button>
          </div>
        </div>
      </section>

      {/* TDS goal */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>
          TDS의 목표
        </Text>
        <div className={styles.goalList}>
          {/* 일관성과 효율 */}
          <div className={styles.goalRow}>
            <div className={styles.goalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <rect width="48" height="48" rx="12" fill="#eff6ff" />
                <path
                  d="M14 24h20M24 14v20"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.goalContent}>
              <h3 className={styles.goalTitle}>일관성과 효율</h3>
              <p className={styles.goalDescription}>
                디자인 토큰과 통일된 API 패턴으로 학습 비용을 줄이고 일관된 UI를
                보장합니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  모든 컴포넌트가 동일한 API 패턴(variant, size, disabled)을
                  따릅니다
                </li>
                <li className={styles.goalDetailItem}>
                  색상, 간격, 타이포그래피를 디자인 토큰으로 통합 관리합니다
                </li>
                <li className={styles.goalDetailItem}>
                  Compound Component 패턴으로 유연한 조합이 가능합니다
                </li>
              </ul>
            </div>
          </div>

          {/* 초심자 친화 */}
          <div className={styles.goalRow}>
            <div className={styles.goalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <rect width="48" height="48" rx="12" fill="#f0fdf4" />
                <path
                  d="M16 24l5 5 10-10"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.goalContent}>
              <h3 className={styles.goalTitle}>초심자 친화</h3>
              <p className={styles.goalDescription}>
                처음 디자인 시스템을 접하는 개발자도 바로 사용할 수 있도록
                문서와 예제를 제공합니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  모든 컴포넌트 페이지에 사용법, Props 설명, 접근성 가이드를
                  제공합니다
                </li>
                <li className={styles.goalDetailItem}>
                  Best Practices와 주의사항을 함께 안내합니다
                </li>
                <li className={styles.goalDetailItem}>
                  라이브 프리뷰로 코드와 결과를 동시에 확인할 수 있습니다
                </li>
              </ul>
            </div>
          </div>

          {/* AI 친화 */}
          <div className={styles.goalRow}>
            <div className={styles.goalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <rect width="48" height="48" rx="12" fill="#faf5ff" />
                <circle
                  cx="24"
                  cy="21"
                  r="6"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />
                <path
                  d="M19 31c0-2.8 2.2-5 5-5s5 2.2 5 5"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.goalContent}>
              <h3 className={styles.goalTitle}>AI 친화</h3>
              <p className={styles.goalDescription}>
                생성형 AI가 컴포넌트를 정확히 이해하고 코드를 생성할 수 있도록
                설계했습니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  <strong>llms.txt</strong> — AI 도구(Cursor, Context7 등)가
                  읽을 수 있는 구조화된 API 문서를 제공합니다. Cursor의 @Docs나
                  Context7 인덱싱을 통해 AI가 컴포넌트 사용법을 정확히
                  참조합니다
                </li>
                <li className={styles.goalDetailItem}>
                  <strong>JSDoc 주석</strong> — 모든 Props 인터페이스에 JSDoc을
                  작성하여, npm 설치 후 .d.ts 파일을 통해 AI가 자동으로 타입과
                  설명을 읽을 수 있습니다
                </li>
                <li className={styles.goalDetailItem}>
                  <strong>일관된 API</strong> — 30개 컴포넌트 모두 동일한
                  패턴(variant, size, disabled)을 따르므로 AI가 하나의
                  컴포넌트를 학습하면 나머지도 예측할 수 있습니다
                </li>
                <li className={styles.goalDetailItem}>
                  <strong>엄격한 TypeScript</strong> — any 타입 없이 모든
                  Props가 정확히 타이핑되어 AI 코드 생성의 정확도가 높아집니다
                </li>
              </ul>
            </div>
          </div>

          {/* 경량 번들 */}
          <div className={styles.goalRow}>
            <div className={styles.goalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <rect width="48" height="48" rx="12" fill="#fefce8" />
                <path
                  d="M24 14l8 12H16l8-12z"
                  stroke="#ca8a04"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <line
                  x1="24"
                  y1="29"
                  x2="24"
                  y2="34"
                  stroke="#ca8a04"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.goalContent}>
              <h3 className={styles.goalTitle}>경량 번들</h3>
              <p className={styles.goalDescription}>
                전체 라이브러리가 ~23KB(gzip)로, 성능 부담 없이 사용할 수
                있습니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  런타임 의존성은 React, React-DOM 단 2개뿐입니다
                </li>
                <li className={styles.goalDetailItem}>
                  Vanilla Extract의 Zero-runtime CSS로 런타임 스타일 연산이
                  없습니다
                </li>
                <li className={styles.goalDetailItem}>
                  Tree-shaking을 지원하여 사용하는 컴포넌트만 번들에 포함됩니다
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>
          빠른 미리보기
        </Text>
        <p className={styles.sectionDescription}>
          TDS 컴포넌트를 직접 체험해보세요. 다양한 컴포넌트를 조합하여 UI를
          구성할 수 있습니다.
        </p>
        <div className={styles.preview}>
          <LivePreview
            code={`import { Button, TextField, Card, Badge, Switch, Chip } from '@taein-designsystem/core';

function Example() {
  const [email, setEmail] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="light">Light</Button>
        <Badge variant="primary">New</Badge>
        <Chip label="React" />
      </div>

      <TextField
        label="이메일"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Switch label="알림 받기" />
      </div>
    </div>
  );
}`}
            language="tsx"
            title="컴포넌트 조합 예시"
            description="Button, TextField, Badge, Switch 등을 조합한 간단한 UI"
            padding="lg"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                <Button variant="primary">Primary</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="light">Light</Button>
                <Badge variant="primary">New</Badge>
                <Chip label="React" />
              </div>

              <TextField
                label="이메일"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <Switch label="알림 받기" />
              </div>
            </div>
          </LivePreview>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>
          다음 단계
        </Text>
        <div className={styles.nextStepsGrid}>
          <Card
            variant="interactive"
            accentColor="#2563eb"
            onClick={() => navigate('/getting-started')}
            className={styles.nextStepCard}
          >
            <Card.Body padding="lg">
              <div className={styles.nextStepIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 16h16M18 10l6 6-6 6"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.nextStepTitle}>시작하기</h3>
              <p className={styles.nextStepDescription}>
                TDS를 프로젝트에 설치하고 사용하는 방법을 알아보세요.
              </p>
              <div className={styles.nextStepArrow}>&rarr;</div>
            </Card.Body>
          </Card>
          <Card
            variant="interactive"
            accentColor="#2563eb"
            onClick={() => navigate('/design-tokens/colors')}
            className={styles.nextStepCard}
          >
            <Card.Body padding="lg">
              <div className={styles.nextStepIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="8"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                  />
                  <circle cx="16" cy="16" r="3" fill="#2563eb" />
                </svg>
              </div>
              <h3 className={styles.nextStepTitle}>디자인 토큰</h3>
              <p className={styles.nextStepDescription}>
                색상, 타이포그래피, 간격 등 디자인 시스템의 기본 요소를
                살펴보세요.
              </p>
              <div className={styles.nextStepArrow}>&rarr;</div>
            </Card.Body>
          </Card>
          <Card
            variant="interactive"
            accentColor="#8b5cf6"
            onClick={() => navigate('/components/overview')}
            className={styles.nextStepCard}
          >
            <Card.Body padding="lg">
              <div className={styles.nextStepIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="6"
                    y="6"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />
                  <rect
                    x="18"
                    y="6"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />
                  <rect
                    x="6"
                    y="18"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />
                  <rect
                    x="18"
                    y="18"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className={styles.nextStepTitle}>컴포넌트</h3>
              <p className={styles.nextStepDescription}>
                30개의 검증된 컴포넌트와 사용 예시를 확인하세요.
              </p>
              <div className={styles.nextStepArrow}>&rarr;</div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}
