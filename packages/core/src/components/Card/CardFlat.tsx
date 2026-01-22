import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import {
  CardRoot,
  CardImage,
  CardHeader,
  CardBody,
  CardFooter,
} from './Card';

export interface CardFlatProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  image?: string;
  imageAlt?: string;
  variant?: 'outlined' | 'elevated' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * CardFlat - Flat API
 * 간단한 사용 케이스를 위한 Flat 패턴 Card 컴포넌트
 */
export const CardFlat = forwardRef<HTMLElement, CardFlatProps>(
  (
    {
      children,
      header,
      footer,
      image,
      imageAlt = '',
      variant = 'elevated',
      padding = 'md',
      onClick,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <CardRoot
        ref={ref}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {image && <CardImage src={image} alt={imageAlt} />}
        {header && <CardHeader>{header}</CardHeader>}
        <CardBody padding={padding}>{children}</CardBody>
        {footer && <CardFooter>{footer}</CardFooter>}
      </CardRoot>
    );
  }
);

CardFlat.displayName = 'CardFlat';
