import { ColorPalette } from '../../components/ColorPalette';
import * as styles from './ColorsPage.css';

const primaryColors = [
  { name: 'primary-50', hex: '#E3F2FD', description: 'Lightest' },
  { name: 'primary-100', hex: '#BBDEFB', description: '' },
  { name: 'primary-200', hex: '#90CAF9', description: '' },
  { name: 'primary-300', hex: '#64B5F6', description: '' },
  { name: 'primary-400', hex: '#42A5F5', description: '' },
  { name: 'primary-500', hex: '#2196F3', description: 'Base' },
  { name: 'primary-600', hex: '#1E88E5', description: 'Main (Light)' },
  { name: 'primary-700', hex: '#1976D2', description: '' },
  { name: 'primary-800', hex: '#1565C0', description: 'Main (Dark)' },
  { name: 'primary-900', hex: '#0D47A1', description: 'Darkest' },
];

const grayColors = [
  { name: 'gray-50', hex: '#FAFAFA', description: 'Lightest' },
  { name: 'gray-100', hex: '#F5F5F5', description: '' },
  { name: 'gray-200', hex: '#EEEEEE', description: '' },
  { name: 'gray-300', hex: '#E0E0E0', description: 'Border' },
  { name: 'gray-400', hex: '#BDBDBD', description: '' },
  { name: 'gray-500', hex: '#9E9E9E', description: '' },
  { name: 'gray-600', hex: '#757575', description: 'Secondary Text' },
  { name: 'gray-700', hex: '#616161', description: '' },
  { name: 'gray-800', hex: '#424242', description: '' },
  { name: 'gray-900', hex: '#212121', description: 'Primary Text' },
];

const semanticColors = [
  { name: 'success-50', hex: '#E8F5E9', description: 'Light' },
  { name: 'success-100', hex: '#C8E6C9', description: '' },
  { name: 'success-500', hex: '#4CAF50', description: 'Main' },
  { name: 'success-700', hex: '#388E3C', description: 'Dark' },
];

const warningColors = [
  { name: 'warning-50', hex: '#FFF3E0', description: 'Light' },
  { name: 'warning-100', hex: '#FFE0B2', description: '' },
  { name: 'warning-500', hex: '#FF9800', description: 'Main' },
  { name: 'warning-700', hex: '#F57C00', description: 'Dark' },
];

const errorColors = [
  { name: 'error-50', hex: '#FFEBEE', description: 'Light' },
  { name: 'error-100', hex: '#FFCDD2', description: '' },
  { name: 'error-500', hex: '#F44336', description: 'Main' },
  { name: 'error-700', hex: '#D32F2F', description: 'Dark' },
];

const infoColors = [
  { name: 'info-50', hex: '#E3F2FD', description: 'Light' },
  { name: 'info-100', hex: '#BBDEFB', description: '' },
  { name: 'info-500', hex: '#2196F3', description: 'Main' },
  { name: 'info-700', hex: '#1976D2', description: 'Dark' },
];

export function ColorsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>색상</h1>
      <p className={styles.description}>
        TDS의 색상 시스템은 일관성과 접근성을 최우선으로 설계되었습니다. 모든
        색상은 WCAG 2.2 AA 기준을 충족합니다.
      </p>

      {/* Primary Colors */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Primary (Blue)</h2>
        <p className={styles.sectionDescription}>
          주요 액션, 링크, 강조 요소에 사용되는 브랜드 색상입니다.
        </p>
        <ColorPalette colors={primaryColors} />
      </section>

      {/* Gray Colors */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gray (Neutral)</h2>
        <p className={styles.sectionDescription}>
          텍스트, 배경, 테두리 등 UI의 기본 색상입니다.
        </p>
        <ColorPalette colors={grayColors} />
      </section>

      {/* Semantic Colors */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Semantic Colors</h2>
        <p className={styles.sectionDescription}>
          사용자 피드백을 전달하는 의미론적 색상입니다.
        </p>

        <div className={styles.semanticGrid}>
          <div>
            <h3 className={styles.semanticTitle}>Success</h3>
            <p className={styles.semanticSubtitle}>
              성공, 완료, 확인 등의 긍정적 상태
            </p>
            <ColorPalette colors={semanticColors} />
          </div>

          <div>
            <h3 className={styles.semanticTitle}>Warning</h3>
            <p className={styles.semanticSubtitle}>
              경고, 주의, 중요 알림 등의 중립적 상태
            </p>
            <ColorPalette colors={warningColors} />
          </div>

          <div>
            <h3 className={styles.semanticTitle}>Error</h3>
            <p className={styles.semanticSubtitle}>
              오류, 실패, 거부 등의 부정적 상태
            </p>
            <ColorPalette colors={errorColors} />
          </div>

          <div>
            <h3 className={styles.semanticTitle}>Info</h3>
            <p className={styles.semanticSubtitle}>
              정보, 도움말, 팁 등의 정보 전달
            </p>
            <ColorPalette colors={infoColors} />
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 가이드라인</h2>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>대비 비율</h3>
            <p className={styles.guidelineText}>
              텍스트는 최소 4.5:1 대비 비율을 유지합니다. 큰 텍스트(18px 이상 일반, 14px 이상 bold)는 3:1 이상입니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>다크 모드</h3>
            <p className={styles.guidelineText}>
              다크 모드에서는 Primary 400을 메인 색상으로 사용하여 눈의 피로를 줄입니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>색맹 고려</h3>
            <p className={styles.guidelineText}>
              색상만으로 정보를 전달하지 않습니다. 아이콘, 텍스트 레이블 등을 함께 사용합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>일관성</h3>
            <p className={styles.guidelineText}>
              같은 의미는 항상 같은 색상을 사용합니다. Success는 항상 녹색, Error는 항상 빨강입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
