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
    label: '컴포넌트',
    path: '/components',
    children: [
      { label: '개요', path: '/components/overview' },
      { label: 'Button', path: '/components/button' },
      { label: 'IconButton', path: '/components/icon-button' },
      { label: 'SegmentedButtons', path: '/components/segmented-buttons' },
      { label: 'TextField', path: '/components/text-field' },
      { label: 'TextArea', path: '/components/text-area' },
      { label: 'Checkbox', path: '/components/checkbox' },
      { label: 'Switch', path: '/components/switch' },
      { label: 'NumericSpinner', path: '/components/numeric-spinner' },
      { label: 'Slider', path: '/components/slider' },
      { label: 'Modal', path: '/components/modal' },
      { label: 'BottomSheet', path: '/components/bottom-sheet' },
      { label: 'SideSheet', path: '/components/side-sheet' },
      { label: 'Snackbar', path: '/components/snackbar' },
      { label: 'Tooltip', path: '/components/tooltip' },
      { label: 'Loader', path: '/components/loader' },
      { label: 'LoadingSpinner', path: '/components/loading-spinner' },
      { label: 'Skeleton', path: '/components/skeleton' },
      { label: 'Badge', path: '/components/badge' },
      { label: 'Chip', path: '/components/chip' },
      { label: 'Avatar', path: '/components/avatar' },
      { label: 'Card', path: '/components/card' },
      { label: 'List', path: '/components/list' },
      { label: 'BoardRow', path: '/components/board-row' },
      { label: 'HeaderBar', path: '/components/header-bar' },
      { label: 'Divider', path: '/components/divider' },
      { label: 'Border', path: '/components/border' },
      { label: 'Text', path: '/components/text' },
      { label: 'Icon', path: '/components/icon' },
    ],
  },
  {
    label: '패턴',
    path: '/patterns',
    children: [
      { label: '개요', path: '/patterns/overview' },
      { label: '로그인 폼', path: '/patterns/login-form' },
      { label: '회원가입 폼', path: '/patterns/signup-form' },
      { label: '대시보드', path: '/patterns/dashboard' },
      { label: '설정 페이지', path: '/patterns/settings' },
      { label: '데이터 테이블', path: '/patterns/data-table' },
      { label: '검색 결과', path: '/patterns/search-results' },
      { label: '제품 카드 그리드', path: '/patterns/product-grid' },
      { label: '블로그 포스트', path: '/patterns/blog-post' },
      { label: '프로필 카드', path: '/patterns/profile-card' },
      { label: '에러 페이지', path: '/patterns/error-pages' },
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
