import { Border, List, ListItem, Text } from '@taein-designsystem/core';
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
    value:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    description: '중간 그림자',
    elevation: 3,
  },
  {
    name: 'lg',
    value:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    description: '큰 그림자',
    elevation: 4,
  },
  {
    name: 'xl',
    value:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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

// 층 이름과, 그 층에 올라가는 컴포넌트. 숫자 대신 이름으로 참조한다.
const zIndexLayers = [
  { name: 'base', description: '일반 콘텐츠. 쌓임 순서의 기준선입니다.' },
  {
    name: 'dropdown',
    description:
      '본문 위로 펼쳐지는 목록. TDS 컴포넌트는 이 층을 쓰지 않으며, 소비자가 직접 만드는 드롭다운·자동완성 목록을 위해 비워둔 자리입니다.',
  },
  {
    name: 'sticky',
    description:
      'HeaderBar처럼 스크롤에 고정되는 요소. 본문보다는 위, 오버레이보다는 아래입니다.',
  },
  {
    name: 'overlay',
    description:
      'Modal · BottomSheet · SideSheet의 배경 딤. 본문을 덮어 뒤쪽 조작을 막는 층입니다.',
  },
  {
    name: 'modal',
    description:
      'Modal · BottomSheet · SideSheet 본체. 자신의 배경 딤(overlay) 바로 위입니다.',
  },
  {
    name: 'popover',
    description:
      'Popover. 모달 안에서 열어도 가려지지 않아야 하므로 modal 위입니다.',
  },
  {
    name: 'toast',
    description:
      'Snackbar. 열려 있는 모달 위로 알림을 띄우는 조합이 흔해서 modal 위에 둡니다.',
  },
  {
    name: 'tooltip',
    description:
      'Tooltip. 가장 위 층입니다. 모달이나 팝오버 안의 아이콘 버튼에도 설명이 떠야 합니다.',
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
                  <span className={styles.shadowName}>
                    shadows.{shadow.name}
                  </span>
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

      {/* Z-Index Layers */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Z-Index 레이어</h2>
        <p className={styles.sectionDescription}>
          그림자가 깊이를 눈에 보이게 표현한다면, z-index는 실제로 무엇이 무엇을
          덮는지를 정합니다. 겹치는 컴포넌트가 여럿이라 각 컴포넌트가 자기
          숫자를 들고 있으면 소비자가 자기 오버레이를 어느 값에 얹어야 안전한지
          알 방법이 없습니다. 그래서 층마다 이름을 붙였고, 아래 순서 그대로 위로
          쌓입니다.
        </p>

        <List divider spacing="sm" aria-label="z-index 레이어 스케일">
          {zIndexLayers.map((layer) => (
            <ListItem
              key={layer.name}
              label={`zIndex.${layer.name}`}
              value={layer.description}
              labelWidth="10rem"
              align="start"
            />
          ))}
        </List>

        <div className={styles.zIndexCode}>
          <CodeBlock
            code={`import { style } from '@vanilla-extract/css';
import { themeContract } from '@taein-designsystem/core';

// 소비자가 직접 만든 오버레이를 모달 위에 띄우는 경우
export const myOverlay = style({
  position: 'fixed',
  zIndex: themeContract.zIndex.popover,
});`}
            language="typescript"
            showLineNumbers={false}
          />
        </div>

        <Border color="primary" rounded="md" padding="md">
          <Text variant="body2" weight="semibold">
            숫자가 아니라 층 이름을 쓰세요
          </Text>
          <Text variant="body2" color="secondary">
            1300 같은 값을 직접 적으면 층 순서가 바뀔 때 함께 깨집니다.
            themeContract.zIndex의 층 이름을 참조하면 TDS가 순서를 조정해도
            상대적인 위치가 유지됩니다.
          </Text>
        </Border>
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
              같은 유형의 컴포넌트는 항상 같은 그림자를 사용합니다. 모든 Card는
              shadows.base를 사용합니다.
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
