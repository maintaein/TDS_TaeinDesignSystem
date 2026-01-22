import {
  BottomSheet as BottomSheetRoot,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetContent,
} from './BottomSheet';

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Header: BottomSheetHeader,
  Title: BottomSheetTitle,
  Content: BottomSheetContent,
});

export type {
  BottomSheetProps,
  BottomSheetHeaderProps,
  BottomSheetTitleProps,
  BottomSheetContentProps,
} from './BottomSheet';
