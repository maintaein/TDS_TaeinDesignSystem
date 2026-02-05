export interface ComponentInfo {
  name: string;
  path: string;
  description: string;
  category: 'form' | 'button' | 'feedback' | 'overlay' | 'layout' | 'data';
  icon: string;
}

export const componentsData: ComponentInfo[] = [
  // Form Components (7개)
  {
    name: 'TextField',
    path: '/components/text-field',
    description: '텍스트 입력 필드. 다양한 타입과 상태를 지원합니다.',
    category: 'form',
    icon: '📝',
  },
  {
    name: 'Checkbox',
    path: '/components/checkbox',
    description: '체크박스. indeterminate 상태를 지원합니다.',
    category: 'form',
    icon: '☑️',
  },
  {
    name: 'Switch',
    path: '/components/switch',
    description: '토글 스위치. on/off 상태를 시각적으로 표현합니다.',
    category: 'form',
    icon: '🔘',
  },
  {
    name: 'NumericSpinner',
    path: '/components/numeric-spinner',
    description: '숫자 입력 스피너. 증가/감소 버튼을 제공합니다.',
    category: 'form',
    icon: '🔢',
  },
  {
    name: 'SegmentedButtons',
    path: '/components/segmentedbuttons',
    description: '세그먼트 버튼. 단일 선택 라디오 그룹입니다.',
    category: 'form',
    icon: '🎛️',
  },
  {
    name: 'Slider',
    path: '/components/slider',
    description: '슬라이더. 범위 값을 선택합니다.',
    category: 'form',
    icon: '🎚️',
  },
  {
    name: 'FormField',
    path: '/components/formfield',
    description: '폼 필드 래퍼. label, error, helper text를 관리합니다.',
    category: 'form',
    icon: '📋',
  },

  // Button Components (3개)
  {
    name: 'Button',
    path: '/components/button',
    description: '버튼. 4가지 variant와 3가지 size를 지원합니다.',
    category: 'button',
    icon: '🔵',
  },
  {
    name: 'IconButton',
    path: '/components/iconbutton',
    description: '아이콘 버튼. 정사각형 버튼입니다.',
    category: 'button',
    icon: '⚪',
  },
  {
    name: 'Text',
    path: '/components/text',
    description: '텍스트 컴포넌트. 9가지 variant와 truncate를 지원합니다.',
    category: 'button',
    icon: '📄',
  },

  // Feedback Components (5개)
  {
    name: 'Badge',
    path: '/components/badge',
    description: '뱃지. 숫자 또는 dot 표시를 지원합니다.',
    category: 'feedback',
    icon: '🔴',
  },
  {
    name: 'Loader',
    path: '/components/loader',
    description: '로더. spinner/dots/bar 3가지 타입을 지원합니다.',
    category: 'feedback',
    icon: '⏳',
  },
  {
    name: 'Skeleton',
    path: '/components/skeleton',
    description: '스켈레톤. 로딩 상태를 시각적으로 표현합니다.',
    category: 'feedback',
    icon: '💀',
  },
  {
    name: 'Snackbar',
    path: '/components/snackbar',
    description: '스낵바. 알림 메시지를 표시합니다.',
    category: 'feedback',
    icon: '💬',
  },
  {
    name: 'Tooltip',
    path: '/components/tooltip',
    description: '툴팁. 호버 시 추가 정보를 표시합니다.',
    category: 'feedback',
    icon: '💡',
  },

  // Overlay Components (3개)
  {
    name: 'Modal',
    path: '/components/modal',
    description: '모달. 중앙 정렬 다이얼로그입니다.',
    category: 'overlay',
    icon: '🪟',
  },
  {
    name: 'BottomSheet',
    path: '/components/bottomsheet',
    description: '바텀 시트. 하단에서 슬라이드됩니다.',
    category: 'overlay',
    icon: '⬆️',
  },
  {
    name: 'SideSheet',
    path: '/components/sidesheet',
    description: '사이드 시트. 우측에서 슬라이드됩니다.',
    category: 'overlay',
    icon: '➡️',
  },

  // Layout Components (5개)
  {
    name: 'HeaderBar',
    path: '/components/headerbar',
    description: '헤더 바. sticky 옵션을 지원합니다.',
    category: 'layout',
    icon: '📌',
  },
  {
    name: 'Divider',
    path: '/components/divider',
    description: '구분선. 수평/수직 방향을 지원합니다.',
    category: 'layout',
    icon: '➖',
  },
  {
    name: 'Border',
    path: '/components/border',
    description: '테두리. 4방향 개별 설정이 가능합니다.',
    category: 'layout',
    icon: '🔲',
  },
  {
    name: 'List',
    path: '/components/list',
    description: '리스트. label-value 쌍을 표시합니다.',
    category: 'layout',
    icon: '📜',
  },
  {
    name: 'BoardRow',
    path: '/components/boardrow',
    description: '아코디언. 펼침/접힘이 가능합니다.',
    category: 'layout',
    icon: '🪗',
  },

  // Data Components (4개)
  {
    name: 'Avatar',
    path: '/components/avatar',
    description: '아바타. 이미지/텍스트 fallback을 지원합니다.',
    category: 'data',
    icon: '👤',
  },
  {
    name: 'Chip',
    path: '/components/chip',
    description: '칩. 태그 시스템에 사용됩니다.',
    category: 'data',
    icon: '🏷️',
  },
  {
    name: 'Card',
    path: '/components/card',
    description: '카드. header/content/footer 구조를 지원합니다.',
    category: 'data',
    icon: '🃏',
  },
  {
    name: 'Icon',
    path: '/components/icon',
    description: '아이콘. SVG 아이콘을 표시합니다.',
    category: 'data',
    icon: '🎨',
  },
];

export const categoryLabels: Record<ComponentInfo['category'], string> = {
  form: '폼 & 입력',
  button: '버튼 & 텍스트',
  feedback: '피드백 & 상태',
  overlay: '오버레이',
  layout: '레이아웃',
  data: '데이터 표시',
};

export const categoryColors: Record<ComponentInfo['category'], string> = {
  form: '#2563eb', // Primary Blue
  button: '#10b981', // Success Green
  feedback: '#f59e0b', // Warning Amber
  overlay: '#8b5cf6', // Purple
  layout: '#06b6d4', // Cyan
  data: '#ec4899', // Pink
};
