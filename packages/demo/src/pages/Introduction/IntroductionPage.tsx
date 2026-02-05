import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Card, Text, List, ListItem } from '@taein-designsystem/core';
import { LivePreview } from '../../components/LivePreview';
import * as styles from './IntroductionPage.css';

export function IntroductionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg'>('md');
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <Text variant="h1" as="span" className={styles.heroTitleMain}>TDS</Text>
            <span className={styles.heroTitleSub}>Taein Design System</span>
          </h1>
          <p className={styles.heroDescription}>
            React 기반의 포괄적인 디자인 시스템입니다. <br />
            일관성, 접근성, 개발자 경험을 최우선으로 설계되었습니다.
          </p>
          <div className={styles.heroActions}>
            <Button variant="primary" size="lg" onClick={() => navigate('/getting-started')}>
              시작하기
            </Button>
            <Button variant="light" size="lg" onClick={() => navigate('/components')}>
              컴포넌트 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>핵심 가치</Text>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🎯</div>
            <h3 className={styles.valueTitle}>일관성</h3>
            <p className={styles.valueDescription}>
              Atomic Design 원칙에 따라 체계적으로 구성된 컴포넌트로 일관된 사용자 경험을 제공합니다.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♿</div>
            <h3 className={styles.valueTitle}>접근성</h3>
            <p className={styles.valueDescription}>
              WCAG 2.2 AA 기준을 준수하며, 키보드 네비게이션과 스크린 리더를 완벽하게 지원합니다.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⚡</div>
            <h3 className={styles.valueTitle}>개발자 경험</h3>
            <p className={styles.valueDescription}>
              TypeScript 완전 지원, 직관적인 API, 풍부한 문서로 빠르고 즐거운 개발 경험을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>주요 특징</Text>
        <List spacing="none" divider={false} className={styles.featuresList}>
          <ListItem className={styles.featuresListItem}>
            <h3 className={styles.featureTitle}>27개 컴포넌트</h3>
            <p className={styles.featureDescription}>
              Button부터 Modal까지, 실무에 필요한 모든 컴포넌트를 제공합니다.
            </p>
          </ListItem>
          <ListItem className={styles.featuresListItem}>
            <h3 className={styles.featureTitle}>924 Tests</h3>
            <p className={styles.featureDescription}>
              99% 테스트 커버리지로 안정성과 신뢰성을 보장합니다.
            </p>
          </ListItem>
          <ListItem className={styles.featuresListItem}>
            <h3 className={styles.featureTitle}>~23KB 번들</h3>
            <p className={styles.featureDescription}>
              Tree-shaking 지원으로 가벼운 번들 크기를 유지합니다.
            </p>
          </ListItem>
          <ListItem className={styles.featuresListItem}>
            <h3 className={styles.featureTitle}>TypeScript</h3>
            <p className={styles.featureDescription}>
              완벽한 타입 정의로 타입 안전성과 자동완성을 제공합니다.
            </p>
          </ListItem>
          <ListItem className={styles.featuresListItem}>
            <h3 className={styles.featureTitle}>다크모드</h3>
            <p className={styles.featureDescription}>
              내장된 테마 시스템으로 라이트/다크 모드를 쉽게 전환할 수 있습니다.
            </p>
          </ListItem>
          <ListItem className={styles.featuresListItem}>
            <h3 className={styles.featureTitle}>반응형</h3>
            <p className={styles.featureDescription}>
              모바일부터 데스크톱까지 모든 화면 크기를 완벽 지원합니다.
            </p>
          </ListItem>
        </List>
      </section>

      {/* Interactive Preview */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>빠른 미리보기</Text>
        <p className={styles.sectionDescription}>
          TDS 컴포넌트를 직접 체험해보세요. 다양한 크기와 옵션을 가진 모달을 확인할 수 있습니다.
        </p>
        <div className={styles.preview}>
          <LivePreview
            code={`import { Button, Modal } from '@taein-designsystem/core';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button onClick={() => { setSize('sm'); setIsOpen(true); }}>
          Small 모달
        </Button>
        <Button variant="light" onClick={() => { setSize('md'); setIsOpen(true); }}>
          Medium 모달
        </Button>
        <Button variant="primary" onClick={() => { setSize('lg'); setIsOpen(true); }}>
          Large 모달 (이미지)
        </Button>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        size={size}
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        {size === 'lg' ? (
          <div>
            <img
              src="/images/tds-hero.jpg"
              alt="TDS Design System"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div style={{ padding: '2rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>TDS 디자인 시스템</h2>
              <p style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
                일관성, 접근성, 개발자 경험을 최우선으로 설계되었습니다.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#6b7280' }}>
                큰 크기의 모달입니다. 이미지와 함께 풍부한 콘텐츠를 표시할 수 있습니다.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="primary" onClick={() => setIsOpen(false)}>확인</Button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>TDS 디자인 시스템</h2>
            <p style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
              일관성, 접근성, 개발자 경험을 최우선으로 설계되었습니다.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#6b7280' }}>
              {size === 'sm' ? '작은 크기의 모달입니다.' : '중간 크기의 모달입니다.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" onClick={() => setIsOpen(false)}>확인</Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}`}
            language="tsx"
            title="인터랙티브 모달 예시"
            description="다양한 크기와 이미지를 포함한 모달 컴포넌트"
            centered={true}
            padding="lg"
          >
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                size="md"
                onClick={() => {
                  setModalSize('sm');
                  setIsModalOpen(true);
                }}
              >
                Small 모달
              </Button>
              <Button
                variant="light"
                size="md"
                onClick={() => {
                  setModalSize('md');
                  setIsModalOpen(true);
                }}
              >
                Medium 모달
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setModalSize('lg');
                  setIsModalOpen(true);
                }}
              >
                Large 모달 (이미지)
              </Button>
            </div>
            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              size={modalSize}
              closeOnBackdropClick={true}
              closeOnEscape={true}
              aria-label="TDS 디자인 시스템"
            >
              {modalSize === 'lg' ? (
                <div>
                  <img
                    src="/images/tds-hero.jpg"
                    alt="TDS Design System"
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.75rem', fontWeight: 600 }}>
                      TDS 디자인 시스템
                    </h2>
                    <p style={{ marginBottom: '0.75rem', lineHeight: 1.6, fontSize: '1rem' }}>
                      일관성, 접근성, 개발자 경험을 최우선으로 설계되었습니다.
                    </p>
                    <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#6b7280' }}>
                      큰 크기의 모달입니다. 이미지와 함께 풍부한 콘텐츠를 표시할 수 있습니다. React
                      기반의 포괄적인 디자인 시스템으로 27개의 컴포넌트와 924개의 테스트를
                      제공합니다.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                        확인
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '2rem' }}>
                  <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600 }}>
                    TDS 디자인 시스템
                  </h2>
                  <p style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>
                    일관성, 접근성, 개발자 경험을 최우선으로 설계되었습니다.
                  </p>
                  <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#6b7280' }}>
                    {modalSize === 'sm'
                      ? '작은 크기의 모달입니다. 간단한 알림이나 확인 메시지에 적합합니다.'
                      : '중간 크기의 모달입니다. 일반적인 콘텐츠 표시에 적합합니다.'}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                      확인
                    </Button>
                  </div>
                </div>
              )}
            </Modal>
          </LivePreview>
        </div>
      </section>

      {/* Statistics */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>한눈에 보는 TDS</Text>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>27</div>
            <div className={styles.statLabel}>Components</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>924</div>
            <div className={styles.statLabel}>Tests</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>99%</div>
            <div className={styles.statLabel}>Coverage</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>~23KB</div>
            <div className={styles.statLabel}>Bundle Size</div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.section}>
        <Text variant="h2" className={styles.sectionTitle}>다음 단계</Text>
        <div className={styles.nextStepsGrid}>
          <Card
            variant="interactive"
            accentColor="#2563eb"
            onClick={() => navigate('/getting-started')}
            className={styles.nextStepCard}
          >
            <Card.Body padding="lg">
              <div className={styles.nextStepIcon}>🚀</div>
              <h3 className={styles.nextStepTitle}>시작하기</h3>
              <p className={styles.nextStepDescription}>
                TDS를 프로젝트에 설치하고 사용하는 방법을 알아보세요.
              </p>
              <div className={styles.nextStepArrow}>→</div>
            </Card.Body>
          </Card>
          <Card
            variant="interactive"
            accentColor="#10b981"
            onClick={() => navigate('/design-tokens/colors')}
            className={styles.nextStepCard}
          >
            <Card.Body padding="lg">
              <div className={styles.nextStepIcon}>🎨</div>
              <h3 className={styles.nextStepTitle}>디자인 토큰</h3>
              <p className={styles.nextStepDescription}>
                색상, 타이포그래피, 간격 등 디자인 시스템의 기본 요소를 살펴보세요.
              </p>
              <div className={styles.nextStepArrow}>→</div>
            </Card.Body>
          </Card>
          <Card
            variant="interactive"
            accentColor="#8b5cf6"
            onClick={() => navigate('/components')}
            className={styles.nextStepCard}
          >
            <Card.Body padding="lg">
              <div className={styles.nextStepIcon}>🧩</div>
              <h3 className={styles.nextStepTitle}>컴포넌트</h3>
              <p className={styles.nextStepDescription}>
                27개의 검증된 컴포넌트와 사용 예시를 확인하세요.
              </p>
              <div className={styles.nextStepArrow}>→</div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}
