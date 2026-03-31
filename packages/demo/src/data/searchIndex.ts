export interface SearchSection {
  title: string;
  content: string;
}

export interface SearchEntry {
  id: string;
  pageTitle: string;
  path: string;
  category: string;
  description: string;
  sections: SearchSection[];
}

export const searchIndex: SearchEntry[] = [
  // ─── 소개 & 시작하기 ───
  {
    id: 'introduction',
    pageTitle: '소개',
    path: '/',
    category: '시작하기',
    description: 'TDS(Taein Design System) 소개. 가볍고 배우기 쉽고 AI와 함께 쓸 수 있는 React 디자인 시스템.',
    sections: [
      { title: '왜 TDS인가?', content: '일관성과 효율, 초심자 친화, AI 친화, 경량 번들. 디자인 토큰, 일관된 API, CLAUDE.md, llms.txt 제공' },
      { title: '한눈에 보는 TDS', content: '30개 컴포넌트, ~23KB 번들, 런타임 의존성 2개, Zero-runtime CSS' },
    ],
  },
  {
    id: 'getting-started',
    pageTitle: '시작하기',
    path: '/getting-started',
    category: '시작하기',
    description: '설치 방법과 기본 설정 가이드.',
    sections: [
      { title: '설치', content: 'npm install @taein-designsystem/core, pnpm add, yarn add' },
      { title: '기본 사용법', content: 'ThemeProvider로 감싸고 styles.css를 import하여 사용' },
    ],
  },

  // ─── 폼 & 입력 컴포넌트 ───
  {
    id: 'text-field',
    pageTitle: 'TextField',
    path: '/components/text-field',
    category: '폼 & 입력',
    description: '텍스트 입력 필드. 다양한 타입과 상태를 지원합니다.',
    sections: [
      { title: 'Basic TextField', content: '기본적인 텍스트 입력 필드 사용법' },
      { title: 'Sizes', content: 'sm, md, lg 세 가지 크기를 지원합니다' },
      { title: 'States', content: 'error, disabled, readOnly 상태를 지원합니다' },
      { title: 'With Icons', content: 'leftIcon, rightIcon prop으로 아이콘을 배치할 수 있습니다' },
      { title: 'Password', content: '비밀번호 입력 필드. type="password"로 설정' },
    ],
  },
  {
    id: 'text-area',
    pageTitle: 'TextArea',
    path: '/components/text-area',
    category: '폼 & 입력',
    description: '여러 줄 텍스트 입력. 자동 높이 조절을 지원합니다.',
    sections: [
      { title: 'Basic TextArea', content: '기본적인 여러 줄 텍스트 입력' },
      { title: 'Auto Resize', content: 'autoResize prop으로 내용에 따라 자동 높이 조절' },
      { title: 'Character Count', content: 'maxLength와 함께 글자 수 카운터 표시' },
      { title: 'States', content: 'error, disabled, readOnly 상태를 지원합니다' },
    ],
  },
  {
    id: 'checkbox',
    pageTitle: 'Checkbox',
    path: '/components/checkbox',
    category: '폼 & 입력',
    description: '체크박스. indeterminate 상태를 지원합니다.',
    sections: [
      { title: 'Basic Checkbox', content: '기본 체크박스 사용법' },
      { title: 'Indeterminate', content: '부분 선택 상태를 나타내는 indeterminate 모드' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
      { title: 'States', content: 'checked, unchecked, indeterminate, disabled, error 상태' },
    ],
  },
  {
    id: 'switch',
    pageTitle: 'Switch',
    path: '/components/switch',
    category: '폼 & 입력',
    description: '토글 스위치. on/off 상태를 시각적으로 표현합니다.',
    sections: [
      { title: 'Basic Switch', content: '기본 토글 스위치 사용법' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
      { title: 'With Label', content: '레이블과 함께 사용하기' },
      { title: 'States', content: 'checked, disabled 상태를 지원합니다' },
    ],
  },
  {
    id: 'numeric-spinner',
    pageTitle: 'NumericSpinner',
    path: '/components/numeric-spinner',
    category: '폼 & 입력',
    description: '숫자 입력 스피너. 증가/감소 버튼을 제공합니다.',
    sections: [
      { title: 'Basic NumericSpinner', content: '기본 숫자 입력 스피너' },
      { title: 'Min/Max', content: 'min, max prop으로 범위 제한' },
      { title: 'Step', content: 'step prop으로 증가/감소 단위 설정' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
    ],
  },
  {
    id: 'segmented-buttons',
    pageTitle: 'SegmentedButtons',
    path: '/components/segmented-buttons',
    category: '폼 & 입력',
    description: '세그먼트 버튼. 단일 선택 라디오 그룹입니다.',
    sections: [
      { title: 'Basic SegmentedButtons', content: '기본 세그먼트 버튼 사용법' },
      { title: 'Controlled', content: 'value와 onChange로 제어되는 세그먼트 버튼' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
    ],
  },
  {
    id: 'slider',
    pageTitle: 'Slider',
    path: '/components/slider',
    category: '폼 & 입력',
    description: '슬라이더. 범위 값을 선택합니다.',
    sections: [
      { title: 'Basic Slider', content: '기본 슬라이더 사용법' },
      { title: 'Range', content: 'min, max, step으로 범위와 단위 설정' },
      { title: 'With Label', content: '현재 값 표시와 함께 사용' },
      { title: 'States', content: 'disabled 상태를 지원합니다' },
    ],
  },
  {
    id: 'form-field',
    pageTitle: 'FormField',
    path: '/components/form-field',
    category: '폼 & 입력',
    description: '폼 필드 래퍼. label, error, helper text를 관리합니다.',
    sections: [
      { title: 'Basic FormField', content: '기본 폼 필드 래퍼 사용법' },
      { title: 'With Error', content: 'error prop으로 에러 메시지 표시' },
      { title: 'With Helper Text', content: 'helperText prop으로 도움말 표시' },
      { title: 'Required', content: 'required prop으로 필수 표시' },
    ],
  },

  // ─── 버튼 & 텍스트 ───
  {
    id: 'button',
    pageTitle: 'Button',
    path: '/components/button',
    category: '버튼 & 텍스트',
    description: '버튼. 4가지 variant와 4가지 size를 지원합니다.',
    sections: [
      { title: 'Basic Button', content: '기본 버튼 사용법. onClick 이벤트를 트리거합니다' },
      { title: 'Variants (Fill)', content: 'primary, dark, danger, light 4가지 Fill 스타일 변형' },
      { title: 'Variants (Weak)', content: 'buttonStyle="weak"로 채도가 낮은 배경색 사용' },
      { title: 'Sizes', content: 'sm, md, lg, xl 네 가지 크기를 지원합니다' },
      { title: 'With Icons', content: 'leftIcon, rightIcon prop으로 아이콘 배치' },
      { title: 'Loading', content: 'loading prop으로 로딩 스피너 표시. 자동 비활성화' },
      { title: 'Full Width', content: 'fullWidth prop으로 전체 너비 사용' },
      { title: 'Custom Color', content: 'customColor prop으로 커스텀 색상 설정' },
      { title: 'Disabled', content: 'disabled prop으로 비활성화 상태' },
    ],
  },
  {
    id: 'icon-button',
    pageTitle: 'IconButton',
    path: '/components/icon-button',
    category: '버튼 & 텍스트',
    description: '아이콘 버튼. 정사각형 버튼입니다.',
    sections: [
      { title: 'Basic IconButton', content: '기본 아이콘 버튼 사용법' },
      { title: 'Sizes', content: 'sm, md, lg, xl 크기를 지원합니다' },
      { title: 'Ghost', content: 'ghost prop으로 배경 없는 투명 버튼' },
      { title: 'Variants', content: 'primary, dark, danger, light 색상 변형' },
    ],
  },
  {
    id: 'text',
    pageTitle: 'Text',
    path: '/components/text',
    category: '버튼 & 텍스트',
    description: '텍스트 컴포넌트. 9가지 variant와 truncate를 지원합니다.',
    sections: [
      { title: 'Typography Variants', content: 'headline, title, body, label, caption 등 9가지 타이포그래피 변형' },
      { title: 'Truncate', content: 'truncate prop으로 텍스트 말줄임 처리' },
      { title: 'Color', content: 'color prop으로 텍스트 색상 변경' },
      { title: 'As', content: 'as prop으로 HTML 태그 변경 (h1, h2, p, span 등)' },
    ],
  },

  // ─── 피드백 & 상태 ───
  {
    id: 'badge',
    pageTitle: 'Badge',
    path: '/components/badge',
    category: '피드백 & 상태',
    description: '뱃지. 숫자 또는 dot 표시를 지원합니다.',
    sections: [
      { title: 'Basic Badge', content: '기본 뱃지 사용법' },
      { title: 'Dot', content: 'dot 모드로 알림 표시' },
      { title: 'Count', content: '숫자 카운트 뱃지' },
      { title: 'Max', content: 'max prop으로 최대 숫자 제한 (예: 99+)' },
      { title: 'Colors', content: 'primary, danger, warning, success 색상' },
    ],
  },
  {
    id: 'loader',
    pageTitle: 'Loader',
    path: '/components/loader',
    category: '피드백 & 상태',
    description: '고수준 로더. spinner/dots/bar 타입과 label/overlay를 지원합니다.',
    sections: [
      { title: 'Basic Loader', content: '기본 로더 사용법' },
      { title: 'Types', content: 'spinner, dots, bar 세 가지 로딩 타입' },
      { title: 'Overlay', content: 'overlay prop으로 전체 화면 오버레이 로딩' },
      { title: 'With Label', content: 'label prop으로 로딩 메시지 표시' },
    ],
  },
  {
    id: 'loading-spinner',
    pageTitle: 'LoadingSpinner',
    path: '/components/loading-spinner',
    category: '피드백 & 상태',
    description: '저수준 로딩 인디케이터. 커스텀 색상과 인라인 배치를 지원합니다.',
    sections: [
      { title: 'Basic LoadingSpinner', content: '기본 로딩 스피너' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
      { title: 'Custom Color', content: 'color prop으로 스피너 색상 변경' },
    ],
  },
  {
    id: 'skeleton',
    pageTitle: 'Skeleton',
    path: '/components/skeleton',
    category: '피드백 & 상태',
    description: '스켈레톤. 로딩 상태를 시각적으로 표현합니다.',
    sections: [
      { title: 'Basic Skeleton', content: '기본 스켈레톤 사용법' },
      { title: 'Shapes', content: 'text, circle, rectangle 형태를 지원합니다' },
      { title: 'Animation', content: 'pulse, wave 애니메이션 효과' },
    ],
  },
  {
    id: 'snackbar',
    pageTitle: 'Snackbar',
    path: '/components/snackbar',
    category: '피드백 & 상태',
    description: '스낵바. 알림 메시지를 표시합니다.',
    sections: [
      { title: 'Basic Snackbar', content: '기본 스낵바 알림' },
      { title: 'Types', content: 'info, success, warning, error 타입' },
      { title: 'With Action', content: 'action prop으로 버튼 추가' },
      { title: 'Auto Dismiss', content: 'duration prop으로 자동 닫힘 설정' },
    ],
  },
  {
    id: 'tooltip',
    pageTitle: 'Tooltip',
    path: '/components/tooltip',
    category: '피드백 & 상태',
    description: '툴팁. 호버 시 추가 정보를 표시합니다.',
    sections: [
      { title: 'Basic Tooltip', content: '기본 툴팁 사용법' },
      { title: 'Placement', content: 'top, bottom, left, right 방향 설정' },
      { title: 'Custom Content', content: '커스텀 콘텐츠를 툴팁에 표시' },
    ],
  },

  // ─── 오버레이 ───
  {
    id: 'modal',
    pageTitle: 'Modal',
    path: '/components/modal',
    category: '오버레이',
    description: '모달. 중앙 정렬 다이얼로그입니다.',
    sections: [
      { title: 'Basic Modal', content: '기본 모달 다이얼로그 사용법' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
      { title: 'With Header/Footer', content: 'Modal.Header, Modal.Body, Modal.Footer 컴파운드 패턴' },
      { title: 'Focus Trap', content: '포커스 트랩으로 키보드 접근성 보장' },
    ],
  },
  {
    id: 'bottom-sheet',
    pageTitle: 'BottomSheet',
    path: '/components/bottom-sheet',
    category: '오버레이',
    description: '바텀 시트. 하단에서 슬라이드됩니다.',
    sections: [
      { title: 'Basic BottomSheet', content: '기본 바텀 시트 사용법' },
      { title: 'Sizes', content: 'sm, md, lg, full 크기를 지원합니다' },
      { title: 'With Handle', content: '드래그 핸들이 포함된 바텀 시트' },
    ],
  },
  {
    id: 'side-sheet',
    pageTitle: 'SideSheet',
    path: '/components/side-sheet',
    category: '오버레이',
    description: '사이드 시트. 우측에서 슬라이드됩니다.',
    sections: [
      { title: 'Basic SideSheet', content: '기본 사이드 시트 사용법' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
      { title: 'With Header/Footer', content: 'SideSheet.Header, SideSheet.Body, SideSheet.Footer 컴파운드 패턴' },
    ],
  },
  {
    id: 'popover',
    pageTitle: 'Popover',
    path: '/components/popover',
    category: '오버레이',
    description: '팝오버. 클릭 시 트리거 근처에 콘텐츠를 표시합니다.',
    sections: [
      { title: 'Basic Popover', content: '기본 팝오버 사용법' },
      { title: 'Placement', content: 'top, bottom, left, right 방향 설정' },
      { title: 'With Arrow', content: '화살표가 포함된 팝오버' },
    ],
  },

  // ─── 레이아웃 ───
  {
    id: 'header-bar',
    pageTitle: 'HeaderBar',
    path: '/components/header-bar',
    category: '레이아웃',
    description: '헤더 바. sticky 옵션을 지원합니다.',
    sections: [
      { title: 'Basic HeaderBar', content: '기본 헤더 바 사용법' },
      { title: 'Sticky', content: 'sticky prop으로 상단 고정' },
      { title: 'With Actions', content: '우측에 액션 버튼 배치' },
    ],
  },
  {
    id: 'divider',
    pageTitle: 'Divider',
    path: '/components/divider',
    category: '레이아웃',
    description: '구분선. 수평/수직 방향을 지원합니다.',
    sections: [
      { title: 'Basic Divider', content: '기본 구분선 사용법' },
      { title: 'Direction', content: 'horizontal, vertical 방향 설정' },
      { title: 'With Label', content: '라벨이 포함된 구분선' },
    ],
  },
  {
    id: 'border',
    pageTitle: 'Border',
    path: '/components/border',
    category: '레이아웃',
    description: '테두리. 4방향 개별 설정이 가능합니다.',
    sections: [
      { title: 'Basic Border', content: '기본 테두리 컴포넌트 사용법' },
      { title: 'Directions', content: 'top, right, bottom, left 개별 설정' },
      { title: 'Styles', content: 'solid, dashed, dotted 스타일' },
    ],
  },
  {
    id: 'list',
    pageTitle: 'List',
    path: '/components/list',
    category: '레이아웃',
    description: '리스트. label-value 쌍을 표시합니다.',
    sections: [
      { title: 'Basic List', content: '기본 리스트 사용법' },
      { title: 'With Divider', content: '구분선이 포함된 리스트' },
      { title: 'Interactive', content: '클릭 가능한 인터랙티브 리스트' },
    ],
  },
  {
    id: 'board-row',
    pageTitle: 'BoardRow',
    path: '/components/board-row',
    category: '레이아웃',
    description: '아코디언. 펼침/접힘이 가능합니다.',
    sections: [
      { title: 'Basic BoardRow', content: '기본 아코디언 사용법' },
      { title: 'Controlled', content: 'expanded와 onChange로 제어되는 아코디언' },
      { title: 'Multiple', content: '여러 행을 동시에 펼칠 수 있는 모드' },
    ],
  },

  // ─── 데이터 표시 ───
  {
    id: 'avatar',
    pageTitle: 'Avatar',
    path: '/components/avatar',
    category: '데이터 표시',
    description: '아바타. 이미지/텍스트 fallback을 지원합니다.',
    sections: [
      { title: 'Basic Avatar', content: '기본 아바타 사용법' },
      { title: 'Sizes', content: 'sm, md, lg, xl 크기를 지원합니다' },
      { title: 'With Image', content: 'src prop으로 이미지 아바타' },
      { title: 'Fallback', content: '이미지 로드 실패 시 이니셜 텍스트 표시' },
    ],
  },
  {
    id: 'chip',
    pageTitle: 'Chip',
    path: '/components/chip',
    category: '데이터 표시',
    description: '칩. 태그 시스템에 사용됩니다.',
    sections: [
      { title: 'Basic Chip', content: '기본 칩 사용법' },
      { title: 'Variants', content: 'filled, outlined 스타일 변형' },
      { title: 'Deletable', content: 'onDelete prop으로 삭제 가능한 칩' },
      { title: 'With Icon', content: '아이콘이 포함된 칩' },
    ],
  },
  {
    id: 'card',
    pageTitle: 'Card',
    path: '/components/card',
    category: '데이터 표시',
    description: '카드. header/content/footer 구조를 지원합니다.',
    sections: [
      { title: 'Basic Card', content: '기본 카드 사용법' },
      { title: 'Compound Pattern', content: 'Card.Header, Card.Body, Card.Footer 컴파운드 패턴' },
      { title: 'Clickable', content: 'onClick prop으로 클릭 가능한 카드' },
      { title: 'Elevation', content: 'elevation prop으로 그림자 수준 설정' },
    ],
  },
  {
    id: 'icon',
    pageTitle: 'Icon',
    path: '/components/icon',
    category: '데이터 표시',
    description: 'SVG 아이콘. 5가지 내장 아이콘과 커스텀 색상을 지원합니다.',
    sections: [
      { title: 'Built-in Icons', content: 'check, close, chevron, arrow, search 내장 아이콘' },
      { title: 'Sizes', content: 'sm, md, lg 크기를 지원합니다' },
      { title: 'Custom Color', content: 'color prop으로 아이콘 색상 변경' },
      { title: 'Custom SVG', content: 'children으로 커스텀 SVG 전달' },
    ],
  },

  // ─── 디자인 토큰 ───
  {
    id: 'colors',
    pageTitle: '색상',
    path: '/design-tokens/colors',
    category: '디자인 토큰',
    description: '디자인 시스템 색상 팔레트. Primary, Neutral, Semantic 색상을 제공합니다.',
    sections: [
      { title: 'Primary Colors', content: 'Blue 기반 브랜드 색상. 50~900 단계' },
      { title: 'Neutral Colors', content: 'Gray 계열 중립 색상. 배경, 테두리, 텍스트에 사용' },
      { title: 'Semantic Colors', content: 'Success(Green), Warning(Amber), Error(Red), Info(Blue) 의미 색상' },
    ],
  },
  {
    id: 'typography',
    pageTitle: '타이포그래피',
    path: '/design-tokens/typography',
    category: '디자인 토큰',
    description: '폰트 크기, 굵기, 줄 높이 등 타이포그래피 토큰.',
    sections: [
      { title: 'Font Family', content: 'Pretendard Variable 기본 폰트' },
      { title: 'Font Sizes', content: 'xs, sm, md, lg, xl, 2xl, 3xl 크기 단계' },
      { title: 'Font Weights', content: 'regular, medium, semibold, bold 굵기' },
      { title: 'Line Heights', content: 'tight, normal, relaxed 줄 높이' },
    ],
  },
  {
    id: 'spacing',
    pageTitle: '간격',
    path: '/design-tokens/spacing',
    category: '디자인 토큰',
    description: '여백과 패딩에 사용되는 간격 토큰.',
    sections: [
      { title: 'Spacing Scale', content: '4px 기반 간격 스케일. 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24' },
    ],
  },
  {
    id: 'shadows',
    pageTitle: '그림자',
    path: '/design-tokens/shadows',
    category: '디자인 토큰',
    description: '박스 쉐도우 토큰. elevation 단계별 그림자를 제공합니다.',
    sections: [
      { title: 'Elevation Levels', content: 'sm, md, lg, xl 단계의 box-shadow' },
    ],
  },
  {
    id: 'animation',
    pageTitle: '애니메이션',
    path: '/design-tokens/animation',
    category: '디자인 토큰',
    description: '트랜지션 및 애니메이션 토큰.',
    sections: [
      { title: 'Duration', content: 'fast(150ms), normal(300ms), slow(500ms) 지속 시간' },
      { title: 'Easing', content: 'ease-in, ease-out, ease-in-out 이징 함수' },
    ],
  },

  // ─── 가이드라인 ───
  {
    id: 'design-principles',
    pageTitle: '디자인 원칙',
    path: '/guidelines/design-principles',
    category: '가이드라인',
    description: 'TDS의 핵심 디자인 원칙과 철학.',
    sections: [
      { title: '접근성 우선', content: '모든 사용자가 불편 없이 사용할 수 있도록 접근성을 최우선으로 설계' },
      { title: '일관성', content: '통일된 디자인 언어로 예측 가능한 사용 경험 제공' },
      { title: '단순성', content: '불필요한 복잡성을 제거하고 핵심에 집중' },
    ],
  },
  {
    id: 'accessibility',
    pageTitle: '접근성',
    path: '/guidelines/accessibility',
    category: '가이드라인',
    description: '접근성 가이드라인. 웹 접근성 표준(AA 등급)을 따릅니다.',
    sections: [
      { title: '키보드 내비게이션', content: 'Tab, Arrow, Enter, Escape 키보드 조작 지원' },
      { title: '스크린 리더', content: 'aria-label, aria-describedby, role 속성으로 스크린 리더 지원' },
      { title: '색상 대비', content: '텍스트 4.5:1, UI 요소 3:1 이상 색상 대비 비율' },
      { title: '포커스 관리', content: '포커스 인디케이터, 포커스 트랩, 포커스 복원' },
    ],
  },
  {
    id: 'performance',
    pageTitle: '성능',
    path: '/guidelines/performance',
    category: '가이드라인',
    description: '성능 최적화 가이드라인.',
    sections: [
      { title: '번들 크기', content: 'Tree-shaking, Code Splitting으로 번들 크기 최적화' },
      { title: '렌더링 최적화', content: 'React.memo, useMemo, useCallback 활용' },
      { title: '이미지 최적화', content: 'lazy loading, WebP 포맷, 적절한 크기 설정' },
    ],
  },
];
