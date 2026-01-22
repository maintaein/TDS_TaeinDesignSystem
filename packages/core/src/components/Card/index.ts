// Compound API (기본) - Card.Header, Card.Body 등으로 사용
export { Card } from './CardCompound';
export type {
  CardProps,
  CardImageProps,
  CardImageOverlayProps,
  CardHeaderProps,
  CardTitleProps,
  CardBodyProps,
  CardFooterProps,
} from './CardCompound';

// Flat API (간단한 사용) - props로 모든 것을 제어
export { CardFlat } from './CardFlat';
export type { CardFlatProps } from './CardFlat';

// Base 컴포넌트 (고급 사용자용)
export {
  CardRoot,
  CardImage,
  CardImageOverlay,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from './Card';
export type {
  CardRootProps,
  CardImageProps as CardImageBaseProps,
  CardImageOverlayProps as CardImageOverlayBaseProps,
  CardHeaderProps as CardHeaderBaseProps,
  CardTitleProps as CardTitleBaseProps,
  CardBodyProps as CardBodyBaseProps,
  CardFooterProps as CardFooterBaseProps,
} from './Card';
