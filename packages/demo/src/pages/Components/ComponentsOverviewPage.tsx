import { useNavigate } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { Card, Divider, Badge, Text } from '@taein-designsystem/core';
import { componentsData, categoryLabels, categoryColors } from '../../data/components';
import type { ComponentInfo } from '../../data/components';
import * as styles from './ComponentsOverviewPage.css';

export function ComponentsOverviewPage() {
  const navigate = useNavigate();

  const groupedComponents = componentsData.reduce<
    Record<ComponentInfo['category'], ComponentInfo[]>
  >((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<ComponentInfo['category'], ComponentInfo[]>);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text variant="h1" className={styles.title}>컴포넌트</Text>
        <p className={styles.description}>
          27개의 프로덕션 레디 컴포넌트. 모두 TypeScript로 작성되었으며, 접근성과 반응형을
          지원합니다.
        </p>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>27</div>
          <div className={styles.statLabel}>컴포넌트</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>6</div>
          <div className={styles.statLabel}>카테고리</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>~23KB</div>
          <div className={styles.statLabel}>번들 크기</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>TypeScript</div>
          <div className={styles.statLabel}>타입 안전성</div>
        </div>
      </div>

      {Object.entries(groupedComponents).map(([category, components]) => (
        <section key={category} className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>
              {categoryLabels[category as ComponentInfo['category']]}
            </h2>
            <Badge
              variant="primary"
              size="md"
              className={styles.categoryBadgeCustom}
              style={{
                '--badge-color': categoryColors[category as ComponentInfo['category']]
              } as CSSProperties}
            >
              {components.length}개
            </Badge>
          </div>

          <div className={styles.componentsGrid}>
            {components.map((component) => (
              <Card
                key={component.name}
                variant="interactive"
                accentColor={categoryColors[component.category]}
                onClick={() => navigate(component.path)}
                className={styles.componentCardCustom}
              >
                <Card.Body padding="lg">
                  <div className={styles.componentIcon}>{component.icon}</div>
                  <h3 className={styles.componentName}>{component.name}</h3>
                  <p className={styles.componentDescription}>{component.description}</p>
                  <div className={styles.componentArrow}>→</div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <Divider variant="solid" spacing="lg" className={styles.ctaSectionDivider} />
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>더 알아보기</h2>
        <div className={styles.ctaGrid}>
          <Card
            variant="interactive"
            accentColor="#2563eb"
            onClick={() => navigate('/design-tokens/colors')}
            className={styles.ctaCardCustom}
          >
            <Card.Body padding="lg">
              <div className={styles.ctaIcon}>🎨</div>
              <h3 className={styles.ctaCardTitle}>디자인 토큰</h3>
              <p className={styles.ctaCardDescription}>
                색상, 타이포그래피, 간격 등의 디자인 토큰을 확인하세요.
              </p>
            </Card.Body>
          </Card>
          <Card
            variant="interactive"
            accentColor="#10b981"
            onClick={() => navigate('/patterns/overview')}
            className={styles.ctaCardCustom}
          >
            <Card.Body padding="lg">
              <div className={styles.ctaIcon}>🧩</div>
              <h3 className={styles.ctaCardTitle}>패턴</h3>
              <p className={styles.ctaCardDescription}>
                실제 사용 사례와 조합 패턴을 확인하세요.
              </p>
            </Card.Body>
          </Card>
          <Card
            variant="interactive"
            accentColor="#8b5cf6"
            onClick={() => navigate('/guidelines/accessibility')}
            className={styles.ctaCardCustom}
          >
            <Card.Body padding="lg">
              <div className={styles.ctaIcon}>♿</div>
              <h3 className={styles.ctaCardTitle}>가이드라인</h3>
              <p className={styles.ctaCardDescription}>
                접근성, 성능, 디자인 원칙을 확인하세요.
              </p>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}
