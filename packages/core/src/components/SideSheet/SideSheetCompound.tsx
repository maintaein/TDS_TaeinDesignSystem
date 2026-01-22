import {
  SideSheet as SideSheetRoot,
  SideSheetHeader,
  SideSheetTitle,
  SideSheetContent,
} from './SideSheet';

export const SideSheet = Object.assign(SideSheetRoot, {
  Header: SideSheetHeader,
  Title: SideSheetTitle,
  Content: SideSheetContent,
});

export type {
  SideSheetProps,
  SideSheetHeaderProps,
  SideSheetTitleProps,
  SideSheetContentProps,
} from './SideSheet';
