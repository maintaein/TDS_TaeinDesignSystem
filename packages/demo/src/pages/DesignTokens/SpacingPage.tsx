import { CodeBlock } from '../../components/CodeBlock';
import * as styles from './SpacingPage.css';

const spacings = [
  { name: '0', value: '0', px: '0px' },
  { name: '1', value: '0.25rem', px: '4px' },
  { name: '2', value: '0.5rem', px: '8px' },
  { name: '3', value: '0.75rem', px: '12px' },
  { name: '4', value: '1rem', px: '16px' },
  { name: '5', value: '1.25rem', px: '20px' },
  { name: '6', value: '1.5rem', px: '24px' },
  { name: '8', value: '2rem', px: '32px' },
  { name: '10', value: '2.5rem', px: '40px' },
  { name: '12', value: '3rem', px: '48px' },
  { name: '16', value: '4rem', px: '64px' },
  { name: '20', value: '5rem', px: '80px' },
];

const borderRadii = [
  { name: 'none', value: '0', description: '각진 모서리' },
  { name: 'sm', value: '0.25rem (4px)', description: '작은 라운드' },
  { name: 'base', value: '0.5rem (8px)', description: '기본 라운드' },
  { name: 'md', value: '0.75rem (12px)', description: '중간 라운드' },
  { name: 'lg', value: '1rem (16px)', description: '큰 라운드' },
  { name: 'xl', value: '1.5rem (24px)', description: '매우 큰 라운드' },
  { name: 'full', value: '9999px', description: '완전한 원형' },
];

export function SpacingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>간격</h1>
      <p className={styles.description}>
        TDS는 8pt Grid System을 기반으로 4px 단위의 일관된 간격 체계를
        사용합니다. 이를 통해 시각적 리듬과 정렬을 유지합니다.
      </p>

      {/* Spacing Scale */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Spacing Scale</h2>
        <p className={styles.sectionDescription}>
          4px 기본 단위로 시작하여 8의 배수로 증가하는 간격 체계입니다.
        </p>

        <div className={styles.spacingScale}>
          {spacings.map((spacing) => (
            <div key={spacing.name} className={styles.spacingRow}>
              <div className={styles.spacingLabel}>
                <span className={styles.spacingName}>spacing.{spacing.name}</span>
                <span className={styles.spacingValue}>
                  {spacing.value} ({spacing.px})
                </span>
              </div>
              <div className={styles.spacingVisual}>
                <div
                  className={styles.spacingBar}
                  style={{ width: spacing.value }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>8pt Grid System</h3>
          <p className={styles.infoText}>
            8pt Grid는 디자인 일관성을 위한 업계 표준입니다. 4px를 기본
            단위로 하여 8의 배수로 증가하면 모든 요소가 정확하게 정렬됩니다.
            이는 다양한 화면 밀도에서도 선명하게 렌더링되는 이점이 있습니다.
          </p>
        </div>
      </section>

      {/* Border Radius */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius</h2>
        <p className={styles.sectionDescription}>
          다양한 크기의 모서리 라운드를 제공하여 요소의 성격을 표현합니다.
        </p>

        <div className={styles.radiusGrid}>
          {borderRadii.map((radius) => (
            <div key={radius.name} className={styles.radiusCard}>
              <div className={styles.radiusHeader}>
                <span className={styles.radiusName}>borderRadius.{radius.name}</span>
                <span className={styles.radiusValue}>{radius.value}</span>
              </div>
              <div className={styles.radiusVisualContainer}>
                <div
                  className={styles.radiusVisual}
                  style={{
                    borderRadius:
                      radius.name === 'none'
                        ? '0'
                        : radius.name === 'sm'
                        ? '0.25rem'
                        : radius.name === 'base'
                        ? '0.5rem'
                        : radius.name === 'md'
                        ? '0.75rem'
                        : radius.name === 'lg'
                        ? '1rem'
                        : radius.name === 'xl'
                        ? '1.5rem'
                        : '9999px',
                  }}
                />
              </div>
              <p className={styles.radiusDescription}>{radius.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 예시</h2>
        <p className={styles.sectionDescription}>
          Spacing과 Border Radius를 조합하여 UI 요소를 구성합니다.
        </p>

        <div className={styles.exampleGrid}>
          <div className={styles.exampleCard}>
            <h3 className={styles.exampleTitle}>Button</h3>
            <CodeBlock
              code={`padding: spacing[2] spacing[4];
border-radius: borderRadius.base;`}
              language="css"
              showLineNumbers={false}
            />
            <div className={styles.exampleVisual}>
              <button
                className={styles.exampleButton}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                }}
              >
                Click me
              </button>
            </div>
          </div>

          <div className={styles.exampleCard}>
            <h3 className={styles.exampleTitle}>Card</h3>
            <CodeBlock
              code={`padding: spacing[6];
border-radius: borderRadius.lg;
gap: spacing[4];`}
              language="css"
              showLineNumbers={false}
            />
            <div className={styles.exampleVisual}>
              <div
                className={styles.exampleCardVisual}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div className={styles.exampleCardTitle}>Card Title</div>
                <div className={styles.exampleCardContent}>Card content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 가이드라인</h2>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>일관성</h3>
            <p className={styles.guidelineText}>
              항상 정의된 spacing 값을 사용합니다. 임의의 값(예: 13px, 27px)은
              피합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>시각적 밀도</h3>
            <p className={styles.guidelineText}>
              밀도가 높은 UI는 작은 간격(2, 3, 4)을, 여유 있는 UI는 큰
              간격(8, 10, 12)을 사용합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>계층 구조</h3>
            <p className={styles.guidelineText}>
              관련된 요소는 가까이(spacing 2-4), 다른 그룹은 멀리(spacing
              8-12) 배치합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>터치 타겟</h3>
            <p className={styles.guidelineText}>
              모바일 터치 타겟은 최소 44x44px (spacing 11)을 확보하여
              접근성을 보장합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
