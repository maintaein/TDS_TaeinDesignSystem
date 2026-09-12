import { Badge, Border, List, ListItem, Text } from '@taein-designsystem/core';
import { ColorPalette } from '../../components/ColorPalette';
import * as styles from './ColorsPage.css';

// description에는 이 단계가 어떤 역할 토큰으로 쓰이는지를 적는다.
// 단계 번호와 역할의 대응은 packages/core/src/tokens/contract.ts가 출처다.
const primaryColors = [
  { name: 'primary-50', hex: '#E3F2FD', description: '가장 연함' },
  { name: 'primary-100', hex: '#BBDEFB', description: 'info.light' },
  { name: 'primary-200', hex: '#90CAF9', description: '' },
  { name: 'primary-300', hex: '#64B5F6', description: '' },
  { name: 'primary-400', hex: '#42A5F5', description: 'primary.light' },
  { name: 'primary-500', hex: '#2196F3', description: '' },
  { name: 'primary-600', hex: '#1E88E5', description: '' },
  {
    name: 'primary-700',
    hex: '#1976D2',
    description: 'primary.main · info.main',
  },
  {
    name: 'primary-800',
    hex: '#1565C0',
    description: 'primary.dark · info.dark',
  },
  { name: 'primary-900', hex: '#0D47A1', description: '가장 진함' },
];

const grayColors = [
  { name: 'gray-50', hex: '#FAFAFA', description: 'background.paper' },
  { name: 'gray-100', hex: '#F5F5F5', description: 'surface.hover' },
  { name: 'gray-200', hex: '#EEEEEE', description: 'surface.active' },
  { name: 'gray-300', hex: '#E0E0E0', description: 'border.default' },
  { name: 'gray-400', hex: '#BDBDBD', description: 'text.disabled' },
  { name: 'gray-500', hex: '#9E9E9E', description: '' },
  { name: 'gray-550', hex: '#878787', description: 'border.strong' },
  { name: 'gray-600', hex: '#717171', description: 'text.secondary' },
  { name: 'gray-700', hex: '#616161', description: '' },
  { name: 'gray-800', hex: '#424242', description: '' },
  { name: 'gray-900', hex: '#212121', description: 'text.primary' },
];

const semanticColors = [
  { name: 'success-50', hex: '#E8F5E9', description: '' },
  { name: 'success-100', hex: '#C8E6C9', description: 'success.light' },
  { name: 'success-500', hex: '#4CAF50', description: 'success.main' },
  { name: 'success-700', hex: '#388E3C', description: '' },
  { name: 'success-800', hex: '#2E7D32', description: 'success.dark' },
];

const warningColors = [
  { name: 'warning-50', hex: '#FFF3E0', description: '' },
  { name: 'warning-100', hex: '#FFE0B2', description: 'warning.light' },
  { name: 'warning-500', hex: '#FF9800', description: 'warning.main' },
  { name: 'warning-700', hex: '#F57C00', description: '' },
  { name: 'warning-800', hex: '#A65200', description: 'warning.dark' },
];

const errorColors = [
  { name: 'error-50', hex: '#FFEBEE', description: '' },
  { name: 'error-100', hex: '#FFCDD2', description: 'error.light' },
  { name: 'error-500', hex: '#F44336', description: '' },
  { name: 'error-700', hex: '#D32F2F', description: 'error.main' },
  { name: 'error-800', hex: '#C62828', description: 'error.dark' },
];

// info는 브랜드 블루로 표현한다. 값이 primary와 같은 것은 의도된 선택이다.
const infoColors = [
  { name: 'info.light', hex: '#BBDEFB', description: 'primary-100과 동일' },
  { name: 'info.main', hex: '#1976D2', description: 'primary-700과 동일' },
  { name: 'info.dark', hex: '#1565C0', description: 'primary-800과 동일' },
];

interface RoleColor {
  token: string;
  hex: string;
  /** 흰 배경(#FFFFFF) 위 실측 대비 */
  onWhite: number;
  /** background.paper(#FAFAFA) 위 실측 대비 */
  onPaper: number;
  usage: string;
}

const roleColors: RoleColor[] = [
  {
    token: 'primary.main',
    hex: '#1976D2',
    onWhite: 4.6,
    onPaper: 4.41,
    usage: '주요 버튼 배경, 링크',
  },
  {
    token: 'primary.light',
    hex: '#42A5F5',
    onWhite: 2.65,
    onPaper: 2.54,
    usage: '연한 강조 배경, 장식',
  },
  {
    token: 'primary.dark',
    hex: '#1565C0',
    onWhite: 5.75,
    onPaper: 5.51,
    usage: 'hover 상태, 본문 속 링크',
  },
  {
    token: 'text.primary',
    hex: '#212121',
    onWhite: 16.1,
    onPaper: 15.43,
    usage: '본문 텍스트',
  },
  {
    token: 'text.secondary',
    hex: '#717171',
    onWhite: 4.88,
    onPaper: 4.67,
    usage: '보조 설명 텍스트',
  },
  {
    token: 'text.disabled',
    hex: '#BDBDBD',
    onWhite: 1.88,
    onPaper: 1.8,
    usage: '비활성 상태 표시',
  },
  {
    token: 'border.default',
    hex: '#E0E0E0',
    onWhite: 1.32,
    onPaper: 1.26,
    usage: '장식적 구분선',
  },
  {
    token: 'border.strong',
    hex: '#878787',
    onWhite: 3.59,
    onPaper: 3.44,
    usage: '정보를 전달하는 경계선 (1.4.11 통과)',
  },
  {
    token: 'success.main',
    hex: '#4CAF50',
    onWhite: 2.78,
    onPaper: 2.66,
    usage: '성공 상태의 배경·채움',
  },
  {
    token: 'success.dark',
    hex: '#2E7D32',
    onWhite: 5.13,
    onPaper: 4.91,
    usage: '흰 배경 위 성공 문구',
  },
  {
    token: 'warning.main',
    hex: '#FF9800',
    onWhite: 2.16,
    onPaper: 2.06,
    usage: '경고 상태의 배경·채움',
  },
  {
    token: 'warning.dark',
    hex: '#A65200',
    onWhite: 5.49,
    onPaper: 5.26,
    usage: '흰 배경 위 경고 문구',
  },
  {
    token: 'error.main',
    hex: '#D32F2F',
    onWhite: 4.98,
    onPaper: 4.77,
    usage: '에러 상태의 배경, 에러 문구',
  },
  {
    token: 'error.dark',
    hex: '#C62828',
    onWhite: 5.62,
    onPaper: 5.39,
    usage: '흰 배경 위 에러 문구',
  },
  {
    token: 'info.main',
    hex: '#1976D2',
    onWhite: 4.6,
    onPaper: 4.41,
    usage: '정보 상태. primary.main과 같은 값',
  },
  {
    token: 'info.dark',
    hex: '#1565C0',
    onWhite: 5.75,
    onPaper: 5.51,
    usage: '흰 배경 위 정보 문구. primary.dark와 같은 값',
  },
];

// light 계열 배경 위에 text.primary(#212121)를 올렸을 때의 실측 대비
const lightBackgrounds = [
  { token: 'success.light', hex: '#C8E6C9', ratio: 11.98 },
  { token: 'warning.light', hex: '#FFE0B2', ratio: 12.7 },
  { token: 'error.light', hex: '#FFCDD2', ratio: 11.44 },
  { token: 'info.light', hex: '#BBDEFB', ratio: 11.47 },
];

// 두 배경 중 낮은 쪽을 기준으로 판정한다. 보수적으로 읽어야 paper 배경에서
// 기준을 밑도는 경우를 놓치지 않는다.
function contrastVerdict(color: RoleColor): {
  variant: 'success' | 'warning' | 'error';
  label: string;
} {
  const worst = Math.min(color.onWhite, color.onPaper);
  if (worst >= 4.5) return { variant: 'success', label: '본문 AA' };
  if (worst >= 3) return { variant: 'warning', label: 'UI 요소만' };
  return { variant: 'error', label: '텍스트 금지' };
}

export function ColorsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>색상</h1>
      <p className={styles.description}>
        TDS는 하나의 라이트 테마를 사용하며, 색상 토큰은 역할별로 대비 기준이
        다릅니다. 본문 텍스트용 토큰은 4.5:1 이상, 배경이나 UI 요소용 토큰은 3:1
        이상을 목표로 합니다. 어떤 토큰이 어느 기준을 충족하는지는 아래
        &ldquo;역할 토큰과 실측 대비&rdquo;에 값과 함께 적어 두었습니다.
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
          사용자 피드백을 전달하는 의미론적 색상입니다. 각 색상은 네 개의
          슬롯으로 나뉩니다. main은 배경과 UI 요소, light는 연한 배경, dark는 흰
          배경 위 본문 텍스트, contrast는 main 위에 올리는 글자색 용도입니다.
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
            <ColorPalette colors={infoColors} columns={3} />
          </div>
        </div>
      </section>

      {/* Contrast */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>역할 토큰과 실측 대비</h2>
        <p className={styles.sectionDescription}>
          각 역할 토큰의 실제 값과, 흰 배경(background.default #FFFFFF) 및 회색
          배경(background.paper #FAFAFA) 위에서 측정한 대비입니다. 판정은 두
          배경 중 낮은 쪽을 기준으로 합니다. 본문 AA는 4.5:1 이상, UI 요소만은
          3:1 이상 4.5:1 미만, 텍스트 금지는 3:1 미만입니다.
        </p>

        <div className={styles.contrastTableWrapper}>
          <table className={styles.contrastTable}>
            <caption className={styles.contrastCaption}>
              역할 토큰별 값과 배경 위 대비
            </caption>
            <thead>
              <tr>
                <th scope="col" className={styles.contrastTh}>
                  토큰
                </th>
                <th scope="col" className={styles.contrastTh}>
                  값
                </th>
                <th scope="col" className={styles.contrastThNumeric}>
                  흰 배경
                </th>
                <th scope="col" className={styles.contrastThNumeric}>
                  paper 배경
                </th>
                <th scope="col" className={styles.contrastTh}>
                  판정
                </th>
                <th scope="col" className={styles.contrastTh}>
                  용도
                </th>
              </tr>
            </thead>
            <tbody>
              {roleColors.map((color) => {
                const verdict = contrastVerdict(color);
                return (
                  <tr key={color.token}>
                    <th scope="row" className={styles.contrastTokenCell}>
                      {color.token}
                    </th>
                    <td className={styles.contrastTd}>
                      <span className={styles.contrastValue}>
                        <span
                          className={styles.contrastSwatch}
                          style={{ backgroundColor: color.hex }}
                          aria-hidden="true"
                        />
                        {color.hex}
                      </span>
                    </td>
                    <td className={styles.contrastTdNumeric}>
                      {color.onWhite.toFixed(2)}:1
                    </td>
                    <td className={styles.contrastTdNumeric}>
                      {color.onPaper.toFixed(2)}:1
                    </td>
                    <td className={styles.contrastTd}>
                      <Badge variant={verdict.variant} size="sm">
                        {verdict.label}
                      </Badge>
                    </td>
                    <td className={styles.contrastTd}>{color.usage}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Border color="error" rounded="md" padding="md">
          <Text variant="body2" weight="semibold">
            success.main, warning.main, primary.light는 본문 텍스트에 쓰지
            마세요
          </Text>
          <Text variant="body2" color="secondary">
            세 토큰은 흰 배경에서도 3:1을 넘지 못합니다(2.78:1, 2.16:1, 2.65:1).
            초록 글씨로 성공 메시지를 쓰고 싶다면 success.dark, 주황 글씨가
            필요하면 warning.dark를 사용하세요. dark 슬롯은 흰 배경 위 본문
            텍스트를 위해 존재합니다. main 슬롯은 배지 배경이나 아이콘 채움처럼
            &ldquo;색 면&rdquo;으로 쓸 때의 값입니다.
          </Text>
        </Border>

        <p className={styles.contrastNote}>
          primary.main과 info.main은 흰 배경에서는 4.60:1로 기준을 넘지만 paper
          배경에서는 4.41:1로 조금 밑돕니다. 회색 배경 카드 안에서 본문 크기로
          쓸 때는 primary.dark, info.dark로 한 단계 진하게 내리는 편이
          안전합니다. text.secondary가 Material 기본값인 #757575가 아닌 이유도
          같습니다. #757575는 흰 배경에서 4.60:1이지만 paper 위에서는 4.41:1로
          미달해서, 카드 안의 보조 텍스트가 조용히 기준을 밑도는 일이 없도록 한
          단계 어두운 #717171로 잡았습니다. text.disabled와 border.default는
          애초에 텍스트나 의미 전달용이 아니라 비활성 표시와 장식적 구분선
          용도이므로 대비 기준의 대상이 아닙니다.
        </p>

        <h3 className={styles.semanticTitle}>light 배경 위의 본문</h3>
        <p className={styles.semanticSubtitle}>
          light 슬롯은 연한 배경 전용입니다. 그 위에 text.primary(#212121)를
          올렸을 때의 실측 대비입니다. 네 경우 모두 본문 AA를 넉넉히 넘습니다.
        </p>
        <List divider spacing="sm" aria-label="light 배경 위 본문 대비">
          {lightBackgrounds.map((bg) => (
            <ListItem
              key={bg.token}
              label={`${bg.token} (${bg.hex})`}
              value={`text.primary 대비 ${bg.ratio.toFixed(2)}:1`}
              labelWidth="16rem"
            />
          ))}
        </List>
      </section>

      {/* Usage Guidelines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 가이드라인</h2>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>대비 비율</h3>
            <p className={styles.guidelineText}>
              본문 텍스트는 배경 대비 4.5:1 이상을 유지합니다. 큰 텍스트(18px
              이상 일반, 14px 이상 bold)와 UI 요소의 경계는 3:1 이상입니다. 위
              표의 판정을 보고 토큰을 고르세요.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>main과 dark의 구분</h3>
            <p className={styles.guidelineText}>
              같은 semantic 색상이라도 색 면으로 칠할 때는 main, 흰 배경 위에
              글자로 쓸 때는 dark를 사용합니다. 이 구분을 지키지 않으면 대비
              기준을 놓치기 쉽습니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>색맹 고려</h3>
            <p className={styles.guidelineText}>
              색상만으로 정보를 전달하지 않습니다. 아이콘, 텍스트 레이블 등을
              함께 사용합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>일관성</h3>
            <p className={styles.guidelineText}>
              같은 의미는 항상 같은 색상을 사용합니다. Success는 항상 녹색,
              Error는 항상 빨강입니다. info는 primary와 같은 블루를 공유합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
