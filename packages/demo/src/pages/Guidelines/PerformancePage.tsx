import * as styles from './PerformancePage.css';

export function PerformancePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>성능</h1>
      <p className={styles.description}>
        TDS는 빠르고 가벼운 UI를 제공하기 위해 설계되었습니다. 빌드 타임 CSS, GPU 가속
        애니메이션, 효율적인 이벤트 관리를 통해 런타임 오버헤드를 최소화합니다.
      </p>

      {/* 핵심 성능 전략 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. 핵심 성능 전략</h2>
        <p className={styles.sectionDescription}>
          TDS가 빠른 성능을 유지하기 위해 채택한 핵심 기술 전략입니다.
        </p>

        <div className={styles.principleGrid}>
          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>0</div>
            <h3 className={styles.principleTitle}>제로 런타임 CSS</h3>
            <p className={styles.principleDescription}>
              Vanilla Extract를 사용하여 모든 스타일을 빌드 시점에 생성합니다. 브라우저에서
              JavaScript로 CSS를 만들지 않으므로 런타임 오버헤드가 없습니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>GPU</div>
            <h3 className={styles.principleTitle}>GPU 가속 애니메이션</h3>
            <p className={styles.principleDescription}>
              모든 애니메이션은 transform과 opacity만 사용합니다. 이 속성들은 GPU에서 처리되어
              레이아웃 재계산 없이 부드럽게 동작합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>Portal</div>
            <h3 className={styles.principleTitle}>포털 기반 오버레이</h3>
            <p className={styles.principleDescription}>
              Modal, BottomSheet, SideSheet는 포털을 사용하여 DOM 트리 최상위에 렌더링됩니다.
              overflow 클리핑과 z-index 문제를 방지합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>Clean</div>
            <h3 className={styles.principleTitle}>이벤트 리스너 정리</h3>
            <p className={styles.principleDescription}>
              모든 컴포넌트에서 등록한 이벤트 리스너는 언마운트 시 자동으로 정리됩니다. 메모리
              누수 없이 안전하게 동작합니다.
            </p>
          </div>
        </div>
      </section>

      {/* CSS 방식 비교 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. CSS 방식 비교</h2>
        <p className={styles.sectionDescription}>
          다른 UI 라이브러리들은 런타임에 CSS를 생성하지만, TDS는 빌드 타임에 CSS를 완성합니다.
          이것이 성능에 어떤 차이를 만드는지 비교합니다.
        </p>

        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>비교 항목</th>
              <th className={styles.tableHeader}>런타임 CSS-in-JS</th>
              <th className={styles.tableHeader}>TDS (빌드 타임)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tableCell}>CSS 생성 시점</td>
              <td className={styles.tableCell}>브라우저에서 실행 중</td>
              <td className={styles.highlightCell}>빌드 시 미리 생성</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>JavaScript 번들 크기</td>
              <td className={styles.tableCell}>CSS 런타임 라이브러리 포함</td>
              <td className={styles.highlightCell}>CSS 런타임 코드 없음</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>첫 렌더링 속도</td>
              <td className={styles.tableCell}>JS 실행 후 CSS 삽입 필요</td>
              <td className={styles.highlightCell}>CSS 파일 즉시 적용</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>서버 사이드 렌더링</td>
              <td className={styles.tableCell}>스타일 추출 스크립트 필요</td>
              <td className={styles.highlightCell}>추가 설정 불필요</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>리렌더링 시 비용</td>
              <td className={styles.tableCell}>스타일 재계산 발생 가능</td>
              <td className={styles.highlightCell}>CSS 변경 없음 (비용 0)</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>Vanilla Extract란?</h4>
          <p className={styles.infoText}>
            TypeScript로 스타일을 작성하면 빌드 시 일반 CSS 파일로 변환되는 도구입니다. 개발
            시에는 타입 안전성의 이점을 누리고, 사용자에게는 가벼운 정적 CSS가 전달됩니다.
          </p>
        </div>
      </section>

      {/* 애니메이션 성능 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. 애니메이션 성능</h2>
        <p className={styles.sectionDescription}>
          부드러운 애니메이션은 사용자 경험에 큰 영향을 미칩니다. TDS는 GPU 가속 속성만
          사용하여 60fps 애니메이션을 보장합니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>Modal</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>transform: translateY</span> +{' '}
              <span className={styles.codeSnippet}>scale</span> +{' '}
              <span className={styles.codeSnippet}>opacity</span> — 열림/닫힘 시 슬라이드 +
              페이드 효과
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>BottomSheet</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>transform: translateY</span> — 아래에서
              위로 슬라이드하는 동작
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>SideSheet</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>transform: translateX</span> — 좌/우에서
              슬라이드하는 동작
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>Button</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>transform: scale(0.98)</span> — 클릭 시
              살짝 눌리는 피드백
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>Loader</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>transform: rotate</span> +{' '}
              <span className={styles.codeSnippet}>translateX</span> — 회전 및 진행 표시
              애니메이션
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>Tooltip / Popover</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>opacity</span> — 페이드 인/아웃으로 자연스럽게
              표시
            </span>
          </div>
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>GPU 가속이란?</h4>
          <p className={styles.infoText}>
            transform과 opacity 속성은 브라우저가 GPU(그래픽 처리 장치)에서 처리합니다. width,
            height, top, left 같은 속성을 변경하면 페이지 레이아웃을 다시 계산해야 하지만, GPU
            가속 속성은 화면에 그려진 레이어만 이동시키므로 훨씬 빠릅니다.
          </p>
        </div>
      </section>

      {/* 렌더링 최적화 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. 렌더링 최적화</h2>
        <p className={styles.sectionDescription}>
          TDS 컴포넌트를 사용할 때 불필요한 렌더링을 줄이기 위한 가이드입니다.
        </p>

        <div className={styles.dosDontsGrid}>
          <div className={styles.dosCard}>
            <h3 className={styles.dosTitle}>이렇게 하세요</h3>
            <ul className={styles.dosDontsList}>
              <li className={styles.dosItem}>
                이벤트 핸들러를 useCallback으로 감싸세요
              </li>
              <li className={styles.dosItem}>
                컴포넌트에 전달하는 객체/배열은 useMemo로 안정된 참조를 유지하세요
              </li>
              <li className={styles.dosItem}>
                리스트 렌더링 시 고유한 key를 사용하세요
              </li>
              <li className={styles.dosItem}>
                오버레이(Modal 등)가 닫혀있으면 내부 콘텐츠를 렌더링하지 않습니다 — open 상태를
                활용하세요
              </li>
              <li className={styles.dosItem}>
                무거운 컴포넌트는 React.lazy로 코드 분할하세요
              </li>
            </ul>
          </div>

          <div className={styles.dontsCard}>
            <h3 className={styles.dontsTitle}>이렇게 하지 마세요</h3>
            <ul className={styles.dosDontsList}>
              <li className={styles.dontsItem}>
                렌더링할 때마다 새 함수를 만들어 prop으로 전달하지 마세요
              </li>
              <li className={styles.dontsItem}>
                인라인 스타일 객체를 반복 생성하지 마세요
              </li>
              <li className={styles.dontsItem}>
                리스트의 key에 배열 인덱스를 사용하지 마세요
              </li>
              <li className={styles.dontsItem}>
                불필요한 상태(useState)를 남발하지 마세요 — 파생 가능한 값은 계산하세요
              </li>
              <li className={styles.dontsItem}>
                useEffect 안에서 이벤트 리스너를 등록하고 정리(cleanup)를 빼먹지 마세요
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 번들 크기 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. 번들 크기</h2>
        <p className={styles.sectionDescription}>
          TDS는 가벼운 번들 크기를 유지하여 페이지 로딩 속도에 미치는 영향을 최소화합니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>전체 크기</span>
            <span className={styles.guidelineText}>
              core 패키지 전체: 100KB 미만 (gzip 기준) — CSS 런타임 라이브러리를 포함하지
              않으므로 경쟁 라이브러리보다 가볍습니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>개별 컴포넌트</span>
            <span className={styles.guidelineText}>
              각 컴포넌트 평균 3KB 이하 — 필요한 컴포넌트만 가져와 사용할 수 있습니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>Tree-shaking</span>
            <span className={styles.guidelineText}>
              사용하지 않는 컴포넌트는 빌드 시 자동으로 제거됩니다. 최종 번들에는 실제로 사용하는
              코드만 포함됩니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>CSS 분리</span>
            <span className={styles.guidelineText}>
              스타일은 별도 CSS 파일로 제공됩니다. 브라우저가 CSS를 캐싱하면 이후 페이지
              전환 시 다시 다운로드할 필요가 없습니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>외부 의존성</span>
            <span className={styles.guidelineText}>
              React와 ReactDOM만 필수 의존성입니다. 추가적인 런타임 라이브러리를 요구하지
              않습니다.
            </span>
          </div>
        </div>
      </section>

      {/* 오버레이 성능 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. 오버레이 컴포넌트 성능</h2>
        <p className={styles.sectionDescription}>
          Modal, BottomSheet, SideSheet 같은 오버레이 컴포넌트는 특별한 성능 최적화가 적용되어
          있습니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>조건부 렌더링</span>
            <span className={styles.guidelineText}>
              오버레이가 닫혀 있을 때는 DOM에 아무것도 렌더링하지 않습니다. 열릴 때만 DOM
              노드가 생성됩니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>포털 렌더링</span>
            <span className={styles.guidelineText}>
              document.body에 직접 렌더링하여 부모 컴포넌트의 overflow: hidden이나 z-index 문제를
              회피합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>닫기 애니메이션</span>
            <span className={styles.guidelineText}>
              닫을 때 즉시 언마운트하지 않고, 닫기 애니메이션이 완료된 후 DOM에서 제거합니다.
              자연스러운 전환과 성능을 모두 확보합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>이벤트 정리</span>
            <span className={styles.guidelineText}>
              ESC 키, 바깥 클릭 등의 이벤트 리스너는 오버레이가 닫힐 때 자동으로 제거됩니다.
              메모리 누수가 발생하지 않습니다.
            </span>
          </div>
        </div>
      </section>

      {/* 성능 체크리스트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. 성능 체크리스트</h2>
        <p className={styles.sectionDescription}>
          TDS로 앱을 개발할 때 확인하면 좋은 성능 체크리스트입니다.
        </p>

        <h3 className={styles.subSectionTitle}>빌드 최적화</h3>
        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>코드 분할</span>
            <span className={styles.guidelineText}>
              페이지 단위로 React.lazy + Suspense를 사용하여 초기 로딩에 필요한 코드만
              다운로드하세요.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>직접 import</span>
            <span className={styles.guidelineText}>
              <span className={styles.codeSnippet}>
                {"import { Button } from '@taein-designsystem/core'"}
              </span>{' '}
              — 필요한 컴포넌트만 가져오면 나머지는 tree-shaking으로 제거됩니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>이미지 최적화</span>
            <span className={styles.guidelineText}>
              Avatar 등에 사용하는 이미지는 적절한 크기로 리사이즈하고, WebP 포맷을
              활용하세요.
            </span>
          </div>
        </div>

        <h3 className={styles.subSectionTitle}>런타임 최적화</h3>
        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>리스트 가상화</span>
            <span className={styles.guidelineText}>
              List 컴포넌트로 수백 개 이상의 항목을 렌더링할 때는 react-window 같은 가상화
              라이브러리를 함께 사용하세요.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>디바운싱</span>
            <span className={styles.guidelineText}>
              TextField에서 검색 기능 구현 시, 입력할 때마다 요청하지 말고 300ms 디바운스를
              적용하세요.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>메모이제이션</span>
            <span className={styles.guidelineText}>
              부모가 자주 리렌더되는 환경에서 TDS 컴포넌트를 사용한다면, React.memo로 감싸
              불필요한 리렌더를 방지하세요.
            </span>
          </div>
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>TDS의 성능 약속</h4>
          <p className={styles.infoText}>
            TDS는 제로 런타임 CSS, GPU 가속 애니메이션, 효율적인 이벤트 관리를 기본으로
            제공합니다. 별도의 성능 튜닝 없이도 대부분의 앱에서 충분히 빠르게 동작하지만, 대규모
            리스트나 복잡한 폼에서는 위 체크리스트를 참고하여 추가 최적화를 적용하세요.
          </p>
        </div>
      </section>
    </div>
  );
}
