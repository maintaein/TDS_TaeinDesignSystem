import * as styles from './DesignPrinciplesPage.css';

export function DesignPrinciplesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>디자인 원칙</h1>
      <p className={styles.description}>
        TDS는 초보 개발자부터 숙련된 엔지니어까지, 누구나 빠르고 일관되게 UI를 만들 수 있도록 설계되었습니다.
        다음 6가지 원칙이 모든 컴포넌트와 토큰의 설계 기준입니다.
      </p>

      {/* 핵심 원칙 카드 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>핵심 원칙</h2>
        <p className={styles.sectionDescription}>
          TDS의 모든 결정은 이 원칙들을 기반으로 이루어집니다.
        </p>

        <div className={styles.principleGrid}>
          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>&#x1F3AF;</div>
            <h3 className={styles.principleTitle}>일관성</h3>
            <p className={styles.principleDescription}>
              같은 패턴은 항상 같은 방식으로 동작합니다.
              버튼의 크기가 sm이면 다른 폼 컴포넌트의 sm도 같은 높이입니다.
              색상, 간격, 타이포그래피 모두 토큰으로 관리되어 한 곳을 바꾸면 전체가 업데이트됩니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>&#x1F4A1;</div>
            <h3 className={styles.principleTitle}>명확성</h3>
            <p className={styles.principleDescription}>
              컴포넌트의 이름과 Props를 보면 기능을 바로 알 수 있어야 합니다.
              추측할 필요 없이 의도가 드러나도록 설계합니다.
              예를 들어 variant=&quot;danger&quot;가 아닌 variant=&quot;error&quot;를 사용하여 상태를 정확히 전달합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>&#x26A1;</div>
            <h3 className={styles.principleTitle}>효율성</h3>
            <p className={styles.principleDescription}>
              복잡한 UI도 적은 코드로 만들 수 있어야 합니다.
              Compound Component 패턴으로 세밀한 제어가 필요하면 조합하고,
              빠르게 만들고 싶다면 Props만으로 동일한 결과를 얻을 수 있습니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>&#x267F;</div>
            <h3 className={styles.principleTitle}>모두를 위한 설계</h3>
            <p className={styles.principleDescription}>
              키보드, 마우스, 터치, 스크린 리더 등 어떤 방식으로든 동등하게 사용할 수 있어야 합니다.
              모든 컴포넌트에 기본으로 포커스 관리, ARIA 속성, 색상 대비가 적용되어 있습니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>&#x1F3D7;&#xFE0F;</div>
            <h3 className={styles.principleTitle}>유연한 구조</h3>
            <p className={styles.principleDescription}>
              디자인 시스템은 제약이 아니라 도구입니다.
              토큰을 바꾸면 전체 테마가 변경되고, 컴포넌트는 확장 가능하며,
              필요에 따라 커스텀 색상이나 스타일을 주입할 수 있습니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>&#x1F6E1;&#xFE0F;</div>
            <h3 className={styles.principleTitle}>타입 안전성</h3>
            <p className={styles.principleDescription}>
              모든 Props는 TypeScript로 정의되어 있어 잘못된 값이 전달되면 컴파일 단계에서 알려줍니다.
              IDE 자동완성을 통해 사용 가능한 옵션을 바로 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>


      {/* 토큰 기반 설계 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>토큰 기반 설계</h2>
        <p className={styles.sectionDescription}>
          색상, 간격, 타이포그래피, 그림자, 애니메이션 모두 디자인 토큰으로 관리됩니다.
          하드코딩된 값 대신 토큰을 사용하면 일관성이 보장되고, 테마 변경이 한 번에 적용됩니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>색상</h3>
            <p className={styles.guidelineText}>
              Primary(브랜드), Gray(중립), Semantic(성공/경고/오류/정보)으로 분류됩니다.
              50~900 스케일로 명도를 세분화하여 다양한 상황에 대응합니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>간격</h3>
            <p className={styles.guidelineText}>
              4px 단위(0.25rem) 기반으로 일관된 여백과 패딩을 제공합니다.
              xs(4px)부터 5xl(80px)까지 정해진 단계를 사용하세요.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>타이포그래피</h3>
            <p className={styles.guidelineText}>
              h1~h6, body1~body3 총 9가지 variant를 제공합니다.
              Pretendard Variable 폰트를 사용하여 다양한 굵기를 하나의 파일로 처리합니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>그림자</h3>
            <p className={styles.guidelineText}>
              sm부터 xl까지 5단계 깊이(elevation)를 제공합니다.
              카드는 sm, 드롭다운은 md, 모달은 lg처럼 컴포넌트의 층위에 따라 사용합니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>애니메이션</h3>
            <p className={styles.guidelineText}>
              fast(150ms), base(200ms), slow(300ms) 세 가지 속도를 제공합니다.
              호버 효과는 fast, 모달 전환은 base, 페이지 전환은 slow를 사용합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 접근성 설계 원칙 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>접근성 설계 원칙</h2>
        <p className={styles.sectionDescription}>
          접근성은 나중에 추가하는 기능이 아니라, 처음부터 포함되는 기본 품질입니다.
          TDS는 모든 컴포넌트에 다음 기준을 적용합니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>시맨틱 HTML</h3>
            <p className={styles.guidelineText}>
              버튼은{' '}<span className={styles.codeSnippet}>{'<button>'}</span>,
              입력은{' '}<span className={styles.codeSnippet}>{'<input>'}</span>,
              모달은{' '}<span className={styles.codeSnippet}>role=&quot;dialog&quot;</span>처럼
              올바른 HTML 요소와 역할을 사용합니다.
              보조 기술이 요소의 목적을 자동으로 인식할 수 있습니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>키보드 지원</h3>
            <p className={styles.guidelineText}>
              모든 인터랙티브 요소는 Tab으로 이동, Enter/Space로 실행, Escape로 닫기가 가능합니다.
              포커스가 어디에 있는지 항상 눈에 보이는 3px 아웃라인으로 표시됩니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>색상 대비</h3>
            <p className={styles.guidelineText}>
              일반 텍스트는 배경 대비 4.5:1 이상, 큰 텍스트와 UI 요소는 3:1 이상을 유지합니다.
              색상만으로 정보를 전달하지 않고 아이콘이나 텍스트를 함께 사용합니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>포커스 관리</h3>
            <p className={styles.guidelineText}>
              모달이 열리면 포커스가 모달 안으로 제한(포커스 트랩)되고,
              닫히면 원래 위치로 돌아갑니다.
              오버레이 컴포넌트(Modal, BottomSheet, SideSheet)에 모두 적용됩니다.
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>터치 영역</h3>
            <p className={styles.guidelineText}>
              버튼, 체크박스, 스위치 등 터치 대상은 최소 44x44px 이상의 영역을 확보합니다.
              모바일에서 손가락으로 정확하게 누를 수 있도록 보장합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 이렇게 사용하세요 / 피해야 할 것 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>이렇게 사용하세요</h2>
        <p className={styles.sectionDescription}>
          TDS를 사용할 때 지키면 좋은 것과 피해야 할 것들입니다.
        </p>

        <div className={styles.dosDontsGrid}>
          <div className={styles.dosCard}>
            <h3 className={styles.dosTitle}>이렇게 하세요</h3>
            <ul className={styles.dosDontsList}>
              <li className={styles.dosItem}>
                디자인 토큰에 정의된 색상, 간격, 타이포그래피를 사용하세요
              </li>
              <li className={styles.dosItem}>
                컴포넌트의 variant Props를 활용해 시각적 차이를 만드세요
              </li>
              <li className={styles.dosItem}>
                아이콘 버튼에는 항상{' '}
                <span className={styles.codeSnippet}>aria-label</span>을 지정하세요
              </li>
              <li className={styles.dosItem}>
                폼 입력 필드에{' '}
                <span className={styles.codeSnippet}>label</span> 또는{' '}
                <span className={styles.codeSnippet}>aria-label</span>을 연결하세요
              </li>
              <li className={styles.dosItem}>
                에러 상태는 색상 + 아이콘 + 텍스트를 함께 표시하세요
              </li>
              <li className={styles.dosItem}>
                반응형을 고려해 모바일에서 먼저 확인하세요
              </li>
            </ul>
          </div>

          <div className={styles.dontsCard}>
            <h3 className={styles.dontsTitle}>이렇게 하지 마세요</h3>
            <ul className={styles.dosDontsList}>
              <li className={styles.dontsItem}>
                토큰 대신 하드코딩된 색상값(#ff0000 등)을 직접 사용하지 마세요
              </li>
              <li className={styles.dontsItem}>
                같은 의미에 서로 다른 컴포넌트를 혼용하지 마세요
              </li>
              <li className={styles.dontsItem}>
                컴포넌트의 내부 DOM 구조에 의존하는 CSS 선택자를 쓰지 마세요
              </li>
              <li className={styles.dontsItem}>
                <span className={styles.codeSnippet}>div</span>에{' '}
                <span className={styles.codeSnippet}>onClick</span>을 다는 대신{' '}
                <span className={styles.codeSnippet}>{'<Button>'}</span>을 사용하세요
              </li>
              <li className={styles.dontsItem}>
                색상만으로 성공/실패 상태를 전달하지 마세요
              </li>
              <li className={styles.dontsItem}>
                포커스 아웃라인을{' '}
                <span className={styles.codeSnippet}>outline: none</span>으로 제거하지 마세요
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 네이밍 규칙 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>네이밍 규칙</h2>
        <p className={styles.sectionDescription}>
          일관된 이름 규칙은 학습 비용을 줄이고 코드의 예측 가능성을 높입니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>컴포넌트 이름</h3>
            <p className={styles.guidelineText}>
              PascalCase를 사용합니다.
              기능을 명확히 드러내는 이름을 사용하세요.
              예:{' '}<span className={styles.codeSnippet}>Button</span>,{' '}
              <span className={styles.codeSnippet}>TextField</span>,{' '}
              <span className={styles.codeSnippet}>BottomSheet</span>
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>Props 이름</h3>
            <p className={styles.guidelineText}>
              camelCase를 사용합니다.
              Boolean Props는 is/has 접두사 없이 상태를 직접 표현합니다.
              예:{' '}<span className={styles.codeSnippet}>disabled</span>,{' '}
              <span className={styles.codeSnippet}>loading</span>,{' '}
              <span className={styles.codeSnippet}>fullWidth</span>
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>이벤트 핸들러</h3>
            <p className={styles.guidelineText}>
              on + 동사 패턴을 사용합니다.
              예:{' '}<span className={styles.codeSnippet}>onClick</span>,{' '}
              <span className={styles.codeSnippet}>onChange</span>,{' '}
              <span className={styles.codeSnippet}>onClose</span>,{' '}
              <span className={styles.codeSnippet}>onSearch</span>
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>Variant 값</h3>
            <p className={styles.guidelineText}>
              시각적 역할을 나타내는 직관적인 이름을 사용합니다.
              예:{' '}<span className={styles.codeSnippet}>primary</span>,{' '}
              <span className={styles.codeSnippet}>secondary</span>,{' '}
              <span className={styles.codeSnippet}>outline</span>,{' '}
              <span className={styles.codeSnippet}>ghost</span>
            </p>
          </div>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>크기 값</h3>
            <p className={styles.guidelineText}>
              티셔츠 사이즈 체계를 사용합니다.
              예:{' '}<span className={styles.codeSnippet}>sm</span>,{' '}
              <span className={styles.codeSnippet}>md</span>,{' '}
              <span className={styles.codeSnippet}>lg</span>,{' '}
              <span className={styles.codeSnippet}>xl</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
