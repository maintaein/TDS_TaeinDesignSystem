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
              onClick={() => navigate('/components/overview')}
            >
              컴포넌트 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image
      <div className={styles.heroImageWrapper}>
        <img
          src="/images/TDS.png"
          alt="TDS Taein Design System"
          className={styles.heroImage}
        />
      </div> */}

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
              <h3 className={styles.goalTitle}>작고 예측 가능한 API</h3>
              <p className={styles.goalDescription}>
                빠르게 같은 방식으로 UI를 만들 수 있도록 컴포넌트 표면적을 작고
                일관되게 유지합니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  주요 컴포넌트에서 variant, size, disabled 같은 공통 네이밍을
                  일관되게 사용합니다
                </li>
                <li className={styles.goalDetailItem}>
                  색상, 간격, 타이포그래피를 디자인 토큰으로 통합 관리합니다
                </li>
                <li className={styles.goalDetailItem}>
                  단순한 사용은 Flat API로, 세밀한 조합은 Compound API로 확장할
                  수 있습니다
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
              <h3 className={styles.goalTitle}>낮은 학습 비용</h3>
              <p className={styles.goalDescription}>
                거대한 범용 UI 프레임워크보다 좁은 범위에 집중해 처음 접하는
                개발자도 빠르게 사용법을 익힐 수 있도록 합니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  컴포넌트 문서에서 사용법, Props 설명, 접근성 고려사항을 함께
                  확인할 수 있습니다
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
                작은 API 범위와 구조화된 문서로 생성형 AI가 컴포넌트 사용법을 더
                안정적으로 참조할 수 있게 합니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  <strong>llms.txt</strong> — AI 도구(Cursor, Context7 등)가
                  읽을 수 있는 구조화된 API 문서를 제공합니다
                </li>
                <li className={styles.goalDetailItem}>
                  <strong>JSDoc 주석</strong> — Props 인터페이스에 설명을
                  제공하여 타입 정보와 사용 의도를 함께 전달합니다
                </li>
                <li className={styles.goalDetailItem}>
                  <strong>일관된 API</strong> — 주요 컴포넌트가 공통 네이밍과
                  조합 패턴을 공유하므로 AI가 API 구조를 더 쉽게 예측할 수
                  있습니다
                </li>
                <li className={styles.goalDetailItem}>
                  <strong>TypeScript 기반</strong> — Props 타입을 명확히 제공해
                  잘못된 조합을 줄이고 자동완성 경험을 개선합니다
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
              <h3 className={styles.goalTitle}>정적 CSS와 분리된 모듈</h3>
              <p className={styles.goalDescription}>
                런타임 스타일 엔진보다 단순한 배포 구조를 지향하며, 스타일은
                빌드 시점에 CSS 파일로 제공합니다.
              </p>
              <ul className={styles.goalDetails}>
                <li className={styles.goalDetailItem}>
                  peer dependency는 React와 ReactDOM이며, 런타임 유틸 의존성은
                  clsx입니다.
                </li>
                <li className={styles.goalDetailItem}>
                  Vanilla Extract로 컴포넌트 스타일을 정적 CSS로 생성합니다
                </li>
                <li className={styles.goalDetailItem}>
                  JS 모듈은 컴포넌트 단위로 분리되어 소비자 번들러의
                  tree-shaking에 유리합니다
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
