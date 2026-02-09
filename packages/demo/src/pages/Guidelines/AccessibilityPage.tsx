import * as styles from './AccessibilityPage.css';

export function AccessibilityPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>접근성</h1>
      <p className={styles.description}>
        TDS는 WCAG 2.2 AA 기준을 준수하여 모든 사용자가 동등하게 사용할 수 있도록 설계되었습니다.
      </p>

      {/* POUR 원칙 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. POUR 원칙</h2>
        <p className={styles.sectionDescription}>
          웹 접근성의 4가지 핵심 원칙입니다. 모든 TDS 컴포넌트는 이 원칙을 따릅니다.
        </p>

        <div className={styles.principleGrid}>
          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>P</div>
            <h3 className={styles.principleTitle}>인식의 용이성 (Perceivable)</h3>
            <p className={styles.principleDescription}>
              모든 콘텐츠는 사용자가 인식할 수 있어야 합니다.
              이미지에 대체 텍스트, 비디오에 자막, 충분한 색상 대비를 제공합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>O</div>
            <h3 className={styles.principleTitle}>운용의 용이성 (Operable)</h3>
            <p className={styles.principleDescription}>
              UI는 키보드만으로 조작 가능해야 합니다.
              포커스 인디케이터, 충분한 클릭 영역, 시간 제한 조절을 지원합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>U</div>
            <h3 className={styles.principleTitle}>이해의 용이성 (Understandable)</h3>
            <p className={styles.principleDescription}>
              정보와 UI 동작이 예측 가능해야 합니다.
              일관된 네비게이션, 명확한 레이블, 오류 식별 및 수정 방법을 제공합니다.
            </p>
          </div>

          <div className={styles.principleCard}>
            <div className={styles.principleIcon}>R</div>
            <h3 className={styles.principleTitle}>견고성 (Robust)</h3>
            <p className={styles.principleDescription}>
              다양한 기술(브라우저, 보조기기)에서 동작해야 합니다.
              시맨틱 HTML과 표준 ARIA를 사용하여 호환성을 보장합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 색상 대비 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. 색상 대비</h2>
        <p className={styles.sectionDescription}>
          WCAG AA 기준을 충족하는 색상 대비 비율을 준수합니다.
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
              <td className={styles.tableCell}>큰 텍스트 (18px+ 또는 14px bold)</td>
              <td className={styles.tableCell}>3:1</td>
              <td className={styles.tableCell}>제목, 강조 텍스트</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>UI 컴포넌트</td>
              <td className={styles.tableCell}>3:1</td>
              <td className={styles.tableCell}>버튼, 입력 필드 테두리, 아이콘</td>
            </tr>
            <tr>
              <td className={styles.tableCell}>포커스 인디케이터</td>
              <td className={styles.tableCell}>3:1</td>
              <td className={styles.tableCell}>포커스 링, 선택 상태 표시</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>주의사항</h4>
          <p className={styles.infoText}>
            색상만으로 정보를 전달하지 마세요. 색맹 사용자를 위해 아이콘, 텍스트, 패턴 등을 함께 사용하세요.
            예: 오류 상태는 빨간색 + 오류 아이콘 + "오류" 텍스트로 표시합니다.
          </p>
        </div>
      </section>

      {/* 키보드 접근성 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. 키보드 접근성</h2>
        <p className={styles.sectionDescription}>
          모든 TDS 컴포넌트는 키보드만으로 완전히 사용 가능합니다.
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
              <td className={styles.tableCell}>
                다음 포커스 가능한 요소로 이동
              </td>
            </tr>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Shift</span>
                <span className={styles.keyBadge}>Tab</span>
              </td>
              <td className={styles.tableCell}>
                이전 포커스 가능한 요소로 이동
              </td>
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
              <td className={styles.tableCell}>
                모달, 드롭다운, 바텀시트 닫기
              </td>
            </tr>
            <tr>
              <td className={styles.tableCell}>
                <span className={styles.keyBadge}>Arrow Keys</span>
              </td>
              <td className={styles.tableCell}>
                라디오 그룹, 슬라이더, 메뉴 항목 탐색
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.checklistSection}>
          <h3 className={styles.checklistTitle}>포커스 관리 체크리스트</h3>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>포커스 순서</span>
              <span className={styles.checklistValue}>
                DOM 순서대로 논리적인 탭 순서 유지 (tabindex 조작 최소화)
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>포커스 표시</span>
              <span className={styles.checklistValue}>
                모든 인터랙티브 요소에 명확한 포커스 인디케이터 (3px outline, 대비 3:1 이상)
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>포커스 트랩</span>
              <span className={styles.checklistValue}>
                모달, 사이드시트 등 오버레이 컴포넌트에서 포커스가 외부로 나가지 않도록 제한
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>초점 복원</span>
              <span className={styles.checklistValue}>
                모달 닫힐 때 이전에 포커스되었던 요소로 포커스 복원
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 스크린 리더 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. 스크린 리더 지원</h2>
        <p className={styles.sectionDescription}>
          TDS 컴포넌트는 ARIA 속성을 적절히 사용하여 보조 기술과 호환됩니다.
        </p>

        <div className={styles.checklistSection}>
          <h3 className={styles.checklistTitle}>ARIA 사용 가이드</h3>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>role</span>
              <span className={styles.checklistValue}>
                시맨틱 HTML 우선 사용. button, dialog, alert 등 필요 시에만 명시
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>aria-label</span>
              <span className={styles.checklistValue}>
                아이콘 버튼처럼 텍스트가 없는 요소에 접근 가능한 이름 제공
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>aria-labelledby</span>
              <span className={styles.checklistValue}>
                다른 요소의 텍스트를 레이블로 참조할 때 사용
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>aria-describedby</span>
              <span className={styles.checklistValue}>
                추가 설명이 필요한 경우 (예: 입력 필드의 헬프 텍스트)
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>aria-live</span>
              <span className={styles.checklistValue}>
                동적 콘텐츠 변경 시 스크린 리더에 알림 (polite 또는 assertive)
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>aria-expanded</span>
              <span className={styles.checklistValue}>
                드롭다운, 아코디언 등 열림/닫힘 상태 표시
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>aria-disabled</span>
              <span className={styles.checklistValue}>
                비활성화된 요소에 사용 (disabled 속성과 함께)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 컴포넌트별 체크리스트 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. 컴포넌트별 체크리스트</h2>
        <p className={styles.sectionDescription}>
          각 컴포넌트 유형에서 확인해야 할 접근성 요구사항입니다.
        </p>

        <div className={styles.checklistSection}>
          <h3 className={styles.checklistTitle}>폼 컴포넌트</h3>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>레이블</span>
              <span className={styles.checklistValue}>
                모든 입력 필드에 연결된 label 요소 또는 aria-label 필수
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>오류 메시지</span>
              <span className={styles.checklistValue}>
                aria-describedby로 오류 메시지 연결, role="alert"로 즉시 알림
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>필수 입력</span>
              <span className={styles.checklistValue}>
                required 속성 또는 aria-required="true" 사용
              </span>
            </div>
          </div>
        </div>

        <div className={styles.checklistSection}>
          <h3 className={styles.checklistTitle}>오버레이 컴포넌트</h3>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>역할</span>
              <span className={styles.checklistValue}>
                role="dialog" 또는 role="alertdialog" 지정
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>모달 상태</span>
              <span className={styles.checklistValue}>
                aria-modal="true"로 배경 콘텐츠 접근 차단 알림
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>제목</span>
              <span className={styles.checklistValue}>
                aria-labelledby로 모달 제목 연결
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>닫기</span>
              <span className={styles.checklistValue}>
                ESC 키로 닫기 기능 필수, 닫기 버튼 접근 가능
              </span>
            </div>
          </div>
        </div>

        <div className={styles.checklistSection}>
          <h3 className={styles.checklistTitle}>인터랙티브 컴포넌트</h3>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>버튼</span>
              <span className={styles.checklistValue}>
                button 태그 사용, 아이콘만 있는 경우 aria-label 필수
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>링크</span>
              <span className={styles.checklistValue}>
                a 태그에 명확한 텍스트 또는 aria-label, 새 창 열림 시 알림
              </span>
            </div>
            <div className={styles.checklistItem}>
              <span className={styles.checklistLabel}>토글</span>
              <span className={styles.checklistValue}>
                aria-checked 또는 aria-pressed로 현재 상태 표시
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 참고 자료 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. 참고 자료</h2>
        <p className={styles.sectionDescription}>
          접근성에 대해 더 자세히 알아보려면 다음 자료를 참고하세요.
        </p>

        <div className={styles.resourceList}>
          <a
            href="https://www.w3.org/WAI/WCAG22/quickref/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            WCAG 2.2 Quick Reference - W3C 공식 가이드
          </a>
          <a
            href="https://www.w3.org/WAI/ARIA/apg/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            ARIA Authoring Practices Guide - ARIA 패턴 가이드
          </a>
          <a
            href="https://developer.mozilla.org/ko/docs/Web/Accessibility"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            MDN 웹 접근성 - 개발자를 위한 접근성 문서
          </a>
          <a
            href="https://wave.webaim.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            WAVE - 웹 접근성 평가 도구
          </a>
        </div>
      </section>
    </div>
  );
}
