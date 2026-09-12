import { CodeBlock } from '../../components/CodeBlock';
import * as styles from './TypographyPage.css';

const fontSizes = [
  { name: 'xs', value: '0.75rem', px: '12px' },
  { name: 'sm', value: '0.875rem', px: '14px' },
  { name: 'base', value: '1rem', px: '16px' },
  { name: 'lg', value: '1.125rem', px: '18px' },
  { name: 'xl', value: '1.25rem', px: '20px' },
  { name: '2xl', value: '1.5rem', px: '24px' },
  { name: '3xl', value: '1.875rem', px: '30px' },
  { name: '4xl', value: '2.25rem', px: '36px' },
];

const fontWeights = [
  { name: 'regular', value: '400', description: '일반 텍스트' },
  { name: 'medium', value: '500', description: '강조 텍스트' },
  { name: 'semibold', value: '600', description: '제목, 레이블' },
  { name: 'bold', value: '700', description: '강한 강조' },
];

// 같은 자릿수의 숫자를 세로로 쌓아 정렬이 어긋나는지 눈으로 비교한다.
const numericSamples = ['1,111,111', '8,888,888', '1,010,101', '9,999,999'];

const lineHeights = [
  { name: 'tight', value: '1.25', description: '제목, 헤드라인' },
  { name: 'normal', value: '1.5', description: '본문, 단락' },
  { name: 'relaxed', value: '1.75', description: '긴 텍스트' },
];

export function TypographyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>타이포그래피</h1>
      <p className={styles.description}>
        TDS의 타이포그래피 시스템은 가독성과 계층 구조를 명확하게 전달합니다.
        8pt Grid 기반으로 일관된 리듬을 제공합니다.
      </p>

      {/* Font Family */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Font Family</h2>
        <p className={styles.sectionDescription}>
          기본 폰트로 Pretendard를 사용하며, 폰트가 로드되지 않은 환경에서는
          시스템 폰트로 자연스럽게 대체됩니다.
        </p>

        <div className={styles.fontFamilyGrid}>
          <div className={styles.fontFamilyCard}>
            <h3 className={styles.fontFamilyTitle}>Sans-serif (Default)</h3>
            <p className={styles.fontFamilySample}>
              The quick brown fox jumps over the lazy dog
            </p>
            <p className={styles.fontFamilyKorean}>
              가나다라마바사아자차카타파하
            </p>
            <CodeBlock
              code={`"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`}
              language="css"
              showLineNumbers={false}
            />
          </div>

          <div className={styles.fontFamilyCard}>
            <h3 className={styles.fontFamilyTitle}>Monospace (Code)</h3>
            <p
              className={styles.fontFamilySample}
              style={{ fontFamily: 'monospace' }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
            <p
              className={styles.fontFamilyKorean}
              style={{ fontFamily: 'monospace' }}
            >
              가나다라마바사아자차카타파하
            </p>
            <CodeBlock
              code="'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace"
              language="css"
              showLineNumbers={false}
            />
          </div>
        </div>
      </section>

      {/* Font Size Scale */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Font Size Scale</h2>
        <p className={styles.sectionDescription}>
          8pt Grid 기반의 타입 스케일로 일관된 시각적 리듬을 만듭니다.
        </p>

        <div className={styles.sizeScale}>
          {fontSizes.map((size) => (
            <div key={size.name} className={styles.sizeRow}>
              <div className={styles.sizeLabel}>
                <span className={styles.sizeName}>{size.name}</span>
                <span className={styles.sizeValue}>
                  {size.value} ({size.px})
                </span>
              </div>
              <div
                className={styles.sizeSample}
                style={{ fontSize: size.value }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weight */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Font Weight</h2>
        <p className={styles.sectionDescription}>
          4단계 Font Weight로 명확한 시각적 계층을 구성합니다.
        </p>

        <div className={styles.weightGrid}>
          {fontWeights.map((weight) => (
            <div key={weight.name} className={styles.weightCard}>
              <div className={styles.weightHeader}>
                <span className={styles.weightName}>{weight.name}</span>
                <span className={styles.weightValue}>{weight.value}</span>
              </div>
              <p
                className={styles.weightSample}
                style={{ fontWeight: Number(weight.value) }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <p className={styles.weightDescription}>{weight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Line Height */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Line Height</h2>
        <p className={styles.sectionDescription}>
          콘텐츠 유형에 따라 적절한 행간을 사용하여 가독성을 최적화합니다.
        </p>

        <div className={styles.lineHeightGrid}>
          {lineHeights.map((lh) => (
            <div key={lh.name} className={styles.lineHeightCard}>
              <div className={styles.lineHeightHeader}>
                <span className={styles.lineHeightName}>{lh.name}</span>
                <span className={styles.lineHeightValue}>{lh.value}</span>
              </div>
              <p
                className={styles.lineHeightSample}
                style={{ lineHeight: lh.value }}
              >
                TDS는 React 기반의 포괄적인 디자인 시스템입니다. 일관성, 접근성,
                개발자 경험을 최우선으로 설계되었습니다. 30개의 컴포넌트
                패밀리를 제공합니다.
              </p>
              <p className={styles.lineHeightDescription}>{lh.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Numeric Variant */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Numeric Variant</h2>
        <p className={styles.sectionDescription}>
          비례 폰트에서는 1이 8보다 좁습니다. 그래서 숫자를 세로로 쌓으면 행마다
          자릿수가 조금씩 어긋나고, 표를 위아래로 훑을 때 금액 비교가
          어려워집니다. tabular는 모든 숫자 글리프에 같은 폭을 줘서 자릿수를
          세로로 맞춥니다. 표, 금액, 지표처럼 숫자를 세로로 비교하는 자리에는
          tabular를 사용하세요.
        </p>

        <div className={styles.numericGrid}>
          <div className={styles.numericCard}>
            <div className={styles.numericHeader}>
              <span className={styles.numericName}>variantNumeric.normal</span>
              <span className={styles.numericValue}>normal</span>
            </div>
            <ul
              className={styles.numericList}
              style={{ fontVariantNumeric: 'normal' }}
            >
              {numericSamples.map((sample) => (
                <li key={sample} className={styles.numericItem}>
                  {sample}
                </li>
              ))}
            </ul>
            <p className={styles.numericDescription}>
              문장 안에 섞여 흐르는 숫자에 적합합니다. 기본값입니다.
            </p>
          </div>

          <div className={styles.numericCard}>
            <div className={styles.numericHeader}>
              <span className={styles.numericName}>variantNumeric.tabular</span>
              <span className={styles.numericValue}>tabular-nums</span>
            </div>
            <ul
              className={styles.numericList}
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {numericSamples.map((sample) => (
                <li key={sample} className={styles.numericItem}>
                  {sample}
                </li>
              ))}
            </ul>
            <p className={styles.numericDescription}>
              쉼표와 자릿수가 행마다 같은 위치에 옵니다. 표의 숫자 열, 합계,
              카운터에 사용합니다.
            </p>
          </div>
        </div>

        <CodeBlock
          code={`import { style } from '@vanilla-extract/css';
import { themeContract } from '@taein-designsystem/core';

// 표의 금액 열: 자릿수를 세로로 맞춘다
export const amountCell = style({
  fontVariantNumeric: themeContract.font.variantNumeric.tabular,
  textAlign: 'right',
});`}
          language="typescript"
          showLineNumbers={false}
        />
      </section>

      {/* Usage Guidelines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 가이드라인</h2>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>제목 계층</h3>
            <p className={styles.guidelineText}>
              h1 (4xl), h2 (3xl), h3 (2xl), h4 (xl), h5 (lg), h6 (base)를
              사용하여 명확한 계층을 만듭니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>본문 크기</h3>
            <p className={styles.guidelineText}>
              본문 텍스트는 base (16px)를 기본으로 하며, 작은 텍스트는 sm
              (14px)을 사용합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>최대 너비</h3>
            <p className={styles.guidelineText}>
              본문 단락은 65-75자(약 600-700px) 이내로 제한하여 가독성을
              높입니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>대비 비율</h3>
            <p className={styles.guidelineText}>
              텍스트와 배경의 대비는 웹 접근성 표준을 준수합니다. (일반 텍스트
              4.5:1, 큰 텍스트 3:1)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
