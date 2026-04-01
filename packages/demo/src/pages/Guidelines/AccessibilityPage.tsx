import * as styles from './AccessibilityPage.css';

export function AccessibilityPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>접근성</h1>
      <p className={styles.description}>
        TDS는 모든 사용자가 동등하게 사용할 수 있도록 설계되었습니다. 시각, 청각, 운동 능력에
        관계없이 누구나 불편 없이 사용할 수 있는 UI를 만드는 것이 목표입니다.
      </p>

      {/* 접근성이란 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. 접근성이란</h2>
        <p className={styles.sectionDescription}>
          웹 접근성은 장애가 있는 사용자도 웹 콘텐츠를 인식하고, 조작하고, 이해할 수 있도록
          보장하는 것입니다. TDS의 모든 컴포넌트는 다음 4가지 원칙을 따릅니다.
        </p>

        <div className={styles.principleGrid}>
          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>P</div>
            <h3 className={styles.principleTitle}>인식할 수 있는가</h3>
            <p className={styles.principleDescription}>
              모든 정보와 UI 요소를 사용자가 감각으로 인식할 수 있어야 합니다. 이미지에는 대체
              텍스트를, 동영상에는 자막을, 텍스트에는 충분한 색상 대비를 제공합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>O</div>
            <h3 className={styles.principleTitle}>조작할 수 있는가</h3>
            <p className={styles.principleDescription}>
              마우스 없이 키보드만으로도 모든 기능을 사용할 수 있어야 합니다. 포커스 표시가
              명확하고, 클릭 영역이 충분하며, 시간 제한을 조절할 수 있어야 합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>U</div>
            <h3 className={styles.principleTitle}>이해할 수 있는가</h3>
            <p className={styles.principleDescription}>
              정보와 UI의 동작이 예측 가능해야 합니다. 일관된 네비게이션, 명확한 레이블, 오류
              발생 시 무엇이 잘못되었고 어떻게 고칠 수 있는지 안내해야 합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>R</div>
            <h3 className={styles.principleTitle}>호환되는가</h3>
            <p className={styles.principleDescription}>
              다양한 브라우저와 보조 기기(스크린 리더 등)에서 올바르게 동작해야 합니다. 의미에
              맞는 HTML 태그와 표준 ARIA 속성을 사용하여 호환성을 보장합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 색상 대비 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. 색상 대비</h2>
        <p className={styles.sectionDescription}>
          저시력 사용자도 텍스트와 UI 요소를 명확히 구분할 수 있도록, TDS는 충분한 색상 대비
          비율을 유지합니다.
        </p>

        <table className={styles.contrastTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>요소</th>
              <th className={styles.tableHeader}>최소 대비</th>
              <th className={styles.tableHeader}>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tableCell}>일반 텍스트 (14px 이하)</td>
              <td className={styles.tableCell}>4.5:1</td>
              <td className={styles.tableCell}>본문, 레이블, 설명 텍스트</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>큰 텍스트 (18px 이상 또는 14px 굵게)</td>
              <td className={styles.tableCell}>3:1</td>
              <td className={styles.tableCell}>제목, 강조 텍스트</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>UI 컴포넌트</td>
              <td className={styles.tableCell}>3:1</td>
              <td className={styles.tableCell}>버튼, 입력 필드 테두리, 아이콘</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>포커스 표시</td>
              <td className={styles.tableCell}>3:1</td>
              <td className={styles.tableCell}>포커스 링, 선택 상태 표시</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>색상만으로 정보를 전달하지 마세요</h4>
          <p className={styles.infoText}>
            색을 구분하기 어려운 사용자를 위해, 색상과 함께 아이콘이나 텍스트를 반드시 병행하세요.
            예를 들어 오류 상태는 빨간색 + 오류 아이콘 + &quot;오류&quot; 텍스트를 함께 표시합니다.
          </p>
        </div>
      </section>

      {/* 키보드 접근성 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. 키보드 접근성</h2>
        <p className={styles.sectionDescription}>
          마우스를 사용할 수 없는 사용자를 위해, 모든 TDS 컴포넌트는 키보드만으로 완전히 사용
          가능합니다.
        </p>

        <table className={styles.keyboardTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>키</th>
              <th className={styles.tableHeader}>동작</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Tab</span>
              </td>
              <td className={styles.tableCell}>다음 포커스 가능한 요소로 이동</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Shift</span>
                <span className={styles.keyBadge}>Tab</span>
              </td>
              <td className={styles.tableCell}>이전 포커스 가능한 요소로 이동</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Enter</span>
                <span className={styles.keyBadge}>Space</span>
              </td>
              <td className={styles.tableCell}>
                버튼 클릭, 체크박스/스위치 토글, 링크 활성화
              </td>
            </tr>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Escape</span>
              </td>
              <td className={styles.tableCell}>모달, 드롭다운, 바텀시트 닫기</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Arrow Keys</span>
              </td>
              <td className={styles.tableCell}>라디오 그룹, 슬라이더, 메뉴 항목 탐색</td>
            </tr>
          </tbody>
        </table>

        <h3 className={styles.subSectionTitle}>포커스 관리 가이드</h3>
        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>포커스 순서</span>
            <span className={styles.guidelineText}>
              DOM 순서대로 논리적인 탭 순서를 유지하세요. tabindex 조작은 최소화합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>포커스 표시</span>
            <span className={styles.guidelineText}>
              모든 인터랙티브 요소에 명확한 포커스 인디케이터를 제공하세요. (3px outline, 배경과의
              대비 3:1 이상)
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>포커스 트랩</span>
            <span className={styles.guidelineText}>
              모달, 사이드시트 등 오버레이 컴포넌트에서는 포커스가 외부로 빠져나가지 않도록
              제한합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>포커스 복원</span>
            <span className={styles.guidelineText}>
              모달이 닫힐 때, 이전에 포커스되어 있던 요소로 포커스가 돌아가야 합니다.
            </span>
          </div>
        </div>
      </section>

      {/* 스크린 리더 지원 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. 스크린 리더 지원</h2>
        <p className={styles.sectionDescription}>
          시각 장애인 사용자는 스크린 리더(화면 읽기 프로그램)를 통해 웹을 탐색합니다. TDS
          컴포넌트는 ARIA 속성을 적절히 사용하여 스크린 리더와 호환됩니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>role</span>
            <span className={styles.guidelineText}>
              의미에 맞는 HTML 태그를 우선 사용하세요. button, dialog, alert 등 역할은 필요할
              때만 명시합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>aria-label</span>
            <span className={styles.guidelineText}>
              아이콘 버튼처럼 눈에 보이는 텍스트가 없는 요소에 이름을 제공합니다. 예:
              aria-label=&quot;닫기&quot;
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>aria-labelledby</span>
            <span className={styles.guidelineText}>
              화면에 이미 표시된 다른 요소의 텍스트를 레이블로 참조할 때 사용합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>aria-describedby</span>
            <span className={styles.guidelineText}>
              추가 설명이 필요한 경우 사용합니다. 예: 입력 필드 아래의 도움말 텍스트를 연결합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>aria-live</span>
            <span className={styles.guidelineText}>
              화면 내용이 동적으로 바뀔 때 스크린 리더에 알림을 보냅니다. polite(순서대로 읽기)
              또는 assertive(즉시 읽기) 중 선택합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>aria-expanded</span>
            <span className={styles.guidelineText}>
              드롭다운, 아코디언 등 열림/닫힘 상태가 있는 요소에 현재 상태를 표시합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>aria-disabled</span>
            <span className={styles.guidelineText}>
              비활성화된 요소에 사용합니다. HTML disabled 속성과 함께 사용하면 스크린 리더가 해당
              요소가 비활성 상태임을 알려줍니다.
            </span>
          </div>
        </div>
      </section>

      {/* 컴포넌트별 체크리스트 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. 컴포넌트별 체크리스트</h2>
        <p className={styles.sectionDescription}>
          각 컴포넌트 유형에서 확인해야 할 접근성 요구사항입니다.
        </p>

        <h3 className={styles.subSectionTitle}>폼 컴포넌트</h3>
        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>레이블</span>
            <span className={styles.guidelineText}>
              모든 입력 필드에 연결된 label 요소 또는 aria-label을 반드시 제공하세요.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>오류 메시지</span>
            <span className={styles.guidelineText}>
              aria-describedby로 오류 메시지를 입력 필드에 연결하고, role=&quot;alert&quot;로 즉시
              알립니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>필수 입력</span>
            <span className={styles.guidelineText}>
              필수 입력 필드에는 required 속성 또는 aria-required=&quot;true&quot;를 사용하세요.
            </span>
          </div>
        </div>

        <h3 className={styles.subSectionTitle}>오버레이 컴포넌트</h3>
        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>역할</span>
            <span className={styles.guidelineText}>
              모달, 바텀시트 등에 role=&quot;dialog&quot; 또는 role=&quot;alertdialog&quot;를
              지정하세요.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>모달 상태</span>
            <span className={styles.guidelineText}>
              aria-modal=&quot;true&quot;로 배경 콘텐츠에 접근할 수 없음을 알립니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>제목</span>
            <span className={styles.guidelineText}>
              aria-labelledby로 모달의 제목 요소를 연결하세요.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>닫기</span>
            <span className={styles.guidelineText}>
              ESC 키로 닫기 기능은 필수입니다. 닫기 버튼도 키보드로 접근 가능해야 합니다.
            </span>
          </div>
        </div>

        <h3 className={styles.subSectionTitle}>인터랙티브 컴포넌트</h3>
        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>버튼</span>
            <span className={styles.guidelineText}>
              반드시 button 태그를 사용하세요. 아이콘만 있는 경우 aria-label을 제공합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>링크</span>
            <span className={styles.guidelineText}>
              a 태그에 명확한 텍스트 또는 aria-label을 제공하세요. 새 창으로 열리면 사용자에게
              알려야 합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>토글</span>
            <span className={styles.guidelineText}>
              체크박스나 스위치의 현재 상태를 aria-checked 또는 aria-pressed로 표시합니다.
            </span>
          </div>
        </div>
      </section>

      {/* 터치 영역 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. 터치 영역</h2>
        <p className={styles.sectionDescription}>
          모바일 사용자와 운동 장애가 있는 사용자를 위해, 터치 가능한 영역은 충분히 커야 합니다.
        </p>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>최소 크기</span>
            <span className={styles.guidelineText}>
              모든 터치 가능한 요소는 최소 44x44px 이상이어야 합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>간격</span>
            <span className={styles.guidelineText}>
              터치 요소 사이에 최소 8px 이상의 간격을 두어 실수로 다른 요소를 누르지 않도록
              합니다.
            </span>
          </div>
          <div className={styles.guidelineRow}>
            <span className={styles.guidelineTitle}>TDS 적용</span>
            <span className={styles.guidelineText}>
              Button, IconButton, Checkbox, Switch 등 모든 인터랙티브 컴포넌트는 이 기준을
              충족하도록 설계되어 있습니다.
            </span>
          </div>
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>TDS의 접근성 지원</h4>
          <p className={styles.infoText}>
            TDS의 모든 컴포넌트는 위 접근성 원칙을 기본으로 내장하고 있습니다. 별도의 설정 없이도
            키보드 탐색, 스크린 리더 호환, 충분한 색상 대비가 자동으로 적용됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}
