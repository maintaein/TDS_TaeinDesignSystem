import { CodeBlock } from '../../components/CodeBlock';
import * as styles from './ShadowsPage.css';

const shadows = [
  {
    name: 'none',
    value: 'none',
    description: '그림자 없음',
    elevation: 0,
  },
  {
    name: 'sm',
    value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    description: '매우 미세한 그림자',
    elevation: 1,
  },
  {
    name: 'base',
    value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    description: '기본 그림자',
    elevation: 2,
  },
  {
    name: 'md',
    value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    description: '중간 그림자',
    elevation: 3,
  },
  {
    name: 'lg',
    value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    description: '큰 그림자',
    elevation: 4,
  },
  {
    name: 'xl',
    value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    description: '매우 큰 그림자',
    elevation: 5,
  },
  {
    name: '2xl',
    value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    description: '최대 그림자',
    elevation: 6,
  },
  {
    name: 'inner',
    value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    description: '내부 그림자',
    elevation: 0,
  },
];

const useCases = [
  {
    component: 'Button',
    shadow: 'sm',
    description: '미세한 깊이감',
    code: 'box-shadow: shadows.sm;',
  },
  {
    component: 'Card',
    shadow: 'base',
    description: '기본 컨테이너',
    code: 'box-shadow: shadows.base;',
  },
  {
    component: 'Dropdown',
    shadow: 'md',
    description: '떠 있는 메뉴',
    code: 'box-shadow: shadows.md;',
  },
  {
    component: 'Modal',
    shadow: 'xl',
    description: '오버레이 다이얼로그',
    code: 'box-shadow: shadows.xl;',
  },
];

export function ShadowsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>그림자</h1>
      <p className={styles.description}>
        TDS의 그림자 시스템은 7단계의 Elevation을 제공하여 UI 요소의 깊이와
        계층을 표현합니다. 자연스러운 빛의 확산을 시뮬레이션합니다.
      </p>

      {/* Shadow Scale */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shadow Scale</h2>
        <p className={styles.sectionDescription}>
          Elevation이 높을수록 요소가 화면에서 더 위에 떠 있는 것처럼
          표현됩니다.
        </p>

        <div className={styles.shadowGrid}>
          {shadows
            .filter((s) => s.name !== 'inner')
            .map((shadow) => (
              <div key={shadow.name} className={styles.shadowCard}>
                <div className={styles.shadowHeader}>
                  <span className={styles.shadowName}>shadows.{shadow.name}</span>
                  <span className={styles.shadowElevation}>
                    Elevation {shadow.elevation}
                  </span>
                </div>
                <div className={styles.shadowVisualContainer}>
                  <div
                    className={styles.shadowVisual}
                    style={{ boxShadow: shadow.value }}
                  />
                </div>
                <p className={styles.shadowDescription}>{shadow.description}</p>
                <CodeBlock
                  code={shadow.value}
                  language="css"
                  showLineNumbers={false}
                />
              </div>
            ))}
        </div>
      </section>

      {/* Inner Shadow */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Inner Shadow</h2>
        <p className={styles.sectionDescription}>
          내부 그림자는 요소가 눌린 것처럼 보이게 하거나, 컨테이너 내부의
          깊이감을 표현합니다.
        </p>

        <div className={styles.innerShadowDemo}>
          <div className={styles.innerShadowCard}>
            <div className={styles.shadowHeader}>
              <span className={styles.shadowName}>shadows.inner</span>
            </div>
            <div className={styles.shadowVisualContainer}>
              <div
                className={styles.shadowVisual}
                style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' }}
              />
            </div>
            <p className={styles.shadowDescription}>
              Input 필드, 눌린 버튼 등에 사용
            </p>
            <CodeBlock
              code="inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
              language="css"
              showLineNumbers={false}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>컴포넌트별 사용 예시</h2>
        <p className={styles.sectionDescription}>
          각 컴포넌트에 권장되는 그림자 레벨입니다.
        </p>

        <div className={styles.useCaseGrid}>
          {useCases.map((useCase) => (
            <div key={useCase.component} className={styles.useCaseCard}>
              <h3 className={styles.useCaseComponent}>{useCase.component}</h3>
              <p className={styles.useCaseDescription}>{useCase.description}</p>
              <div className={styles.useCaseVisual}>
                <div
                  className={styles.useCaseBox}
                  style={{
                    boxShadow: shadows.find((s) => s.name === useCase.shadow)
                      ?.value,
                  }}
                >
                  {useCase.component}
                </div>
              </div>
              <CodeBlock
                code={useCase.code}
                language="css"
                showLineNumbers={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 가이드라인</h2>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>계층 구조</h3>
            <p className={styles.guidelineText}>
              상위 레이어는 하위 레이어보다 큰 그림자를 사용합니다. Modal(xl)은
              Card(base)보다 위에 있습니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>일관성</h3>
            <p className={styles.guidelineText}>
              같은 유형의 컴포넌트는 항상 같은 그림자를 사용합니다. 모든
              Card는 shadows.base를 사용합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>성능</h3>
            <p className={styles.guidelineText}>
              box-shadow는 GPU 가속이 되지 않으므로, 과도한 사용은 피합니다.
              애니메이션 시 opacity 조절을 선호합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
