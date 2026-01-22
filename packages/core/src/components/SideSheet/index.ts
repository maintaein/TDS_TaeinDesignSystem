// Compound API (기본) - SideSheet.Header, SideSheet.Content 등으로 사용
export { SideSheet } from './SideSheetCompound';
export type {
  SideSheetProps,
  SideSheetHeaderProps,
  SideSheetTitleProps,
  SideSheetContentProps,
} from './SideSheetCompound';

// Base 컴포넌트 (고급 사용자용)
export {
  SideSheet as SideSheetRoot,
  SideSheetHeader,
  SideSheetTitle,
  SideSheetContent,
} from './SideSheet';
