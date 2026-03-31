export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    label: '소개',
    path: '/',
  },
  {
    label: '시작하기',
    path: '/getting-started',
  },
  {
    label: '컴포넌트',
    path: '/components',
    children: [
      { label: '개요', path: '/components/overview' },
      { label: 'Avatar', path: '/components/avatar' },
      { label: 'Badge', path: '/components/badge' },
      { label: 'BoardRow', path: '/components/board-row' },
      { label: 'Border', path: '/components/border' },
      { label: 'BottomSheet', path: '/components/bottom-sheet' },
      { label: 'Button', path: '/components/button' },
      { label: 'Card', path: '/components/card' },
      { label: 'Checkbox', path: '/components/checkbox' },
      { label: 'Chip', path: '/components/chip' },
      { label: 'Divider', path: '/components/divider' },
      { label: 'FormField', path: '/components/form-field' },
      { label: 'HeaderBar', path: '/components/header-bar' },
      { label: 'Icon', path: '/components/icon' },
      { label: 'IconButton', path: '/components/icon-button' },
      { label: 'List', path: '/components/list' },
      { label: 'Loader', path: '/components/loader' },
      { label: 'LoadingSpinner', path: '/components/loading-spinner' },
      { label: 'Modal', path: '/components/modal' },
      { label: 'NumericSpinner', path: '/components/numeric-spinner' },
      { label: 'Popover', path: '/components/popover' },
      { label: 'SegmentedButtons', path: '/components/segmented-buttons' },
      { label: 'SideSheet', path: '/components/side-sheet' },
      { label: 'Skeleton', path: '/components/skeleton' },
      { label: 'Slider', path: '/components/slider' },
      { label: 'Snackbar', path: '/components/snackbar' },
      { label: 'Switch', path: '/components/switch' },
      { label: 'Text', path: '/components/text' },
      { label: 'TextArea', path: '/components/text-area' },
      { label: 'TextField', path: '/components/text-field' },
      { label: 'Tooltip', path: '/components/tooltip' },
    ],
  },
    {
    label: '디자인 토큰',
    path: '/design-tokens',
    children: [
      { label: '색상', path: '/design-tokens/colors' },
      { label: '타이포그래피', path: '/design-tokens/typography' },
      { label: '간격', path: '/design-tokens/spacing' },
      { label: '그림자', path: '/design-tokens/shadows' },
      { label: '애니메이션', path: '/design-tokens/animation' },
    ],
  },
  {
    label: '가이드라인',
    path: '/guidelines',
    children: [
      { label: '디자인 원칙', path: '/guidelines/design-principles' },
      { label: '접근성', path: '/guidelines/accessibility' },
      { label: '성능', path: '/guidelines/performance' },
    ],
  },
];
