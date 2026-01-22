import {
  CardRoot,
  CardImage,
  CardImageOverlay,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  type CardRootProps,
  type CardImageProps,
  type CardImageOverlayProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardBodyProps,
  type CardFooterProps,
} from './Card';

// Compound API: Card.Header, Card.Body 등으로 사용
export const Card = Object.assign(CardRoot, {
  Image: CardImage,
  ImageOverlay: CardImageOverlay,
  Header: CardHeader,
  Title: CardTitle,
  Body: CardBody,
  Footer: CardFooter,
});

// 타입 export
export type {
  CardRootProps as CardProps,
  CardImageProps,
  CardImageOverlayProps,
  CardHeaderProps,
  CardTitleProps,
  CardBodyProps,
  CardFooterProps,
};
