import { CodeBlock } from '../CodeBlock';
import * as styles from './AccessibilitySection.css';

export interface AccessibilityFeature {
  attribute: string;
  effect: string;
  description: string;
}

export interface AdditionalGuidance {
  title: string;
  description: string;
  examples?: Array<{
    code: string;
    explanation: string;
  }>;
}

export interface AccessibilitySectionProps {
  componentName: string;
  intro: string;
  features: AccessibilityFeature[];
  additionalGuidance?: AdditionalGuidance[];
}

export function AccessibilitySection({
  componentName,
  intro,
  features,
  additionalGuidance,
}: AccessibilitySectionProps) {
  return (
    <section className={styles.accessibilitySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>접근성</h2>
        <p className={styles.sectionDescription}>
          {componentName} 컴포넌트의 접근성 지원 사항입니다.
        </p>
      </div>

      {/* 기본 접근성 지원 */}
      <div className={styles.subsection}>
        <div className={styles.subsectionHeader}>
          <h3 className={styles.subsectionTitle}>기본 접근성 지원</h3>
        </div>

        <div className={styles.subsectionIntro}>{intro}</div>

        <table className={styles.accessibilityTable}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableHeaderCell}>속성</th>
              <th className={styles.tableHeaderCell}>접근성 효과</th>
              <th className={styles.tableHeaderCell}>설명</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={`${styles.tableCell} ${styles.attributeCell}`}>
                  <code>{feature.attribute}</code>
                </td>
                <td className={`${styles.tableCell} ${styles.effectCell}`}>
                  {feature.effect}
                </td>
                <td className={styles.tableCell}>{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 추가 접근성 지원 */}
      {additionalGuidance && additionalGuidance.length > 0 && (
        <div className={styles.subsection}>
          <div className={styles.subsectionHeader}>
            <h3 className={styles.subsectionTitle}>추가로 지원해야 하는 접근성</h3>
          </div>

          <div className={styles.additionalSection}>
            <p className={styles.additionalContent}>
              개발자가 접근성을 고려해서 다음 내용을 추가로 작업해야 할 때도 있어요.
              특정 의미를 명확히 전달하기 어려울 때는 컴포넌트에서 제공하는 기본적인
              접근성으로는 충분하지 않아요.
            </p>

            {additionalGuidance.map((guidance, index) => (
              <div key={index} className={styles.guidanceBlock}>
                <h4 className={styles.guidanceTitle}>{guidance.title}</h4>
                <p className={styles.guidanceText}>{guidance.description}</p>

                {guidance.examples?.map((example, exIdx) => (
                  <div key={exIdx}>
                    <p className={styles.guidanceText}>{example.explanation}</p>
                    <div className={styles.codeExample}>
                      <CodeBlock language="tsx" code={example.code} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
