import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useClickable } from '../../_internal/useClickable';
import {
  cardRoot,
  variantStyles,
  clickable as clickableStyle,
  disabled as disabledStyle,
  cardImage,
  cardImageWrapper,
  cardImageOverlay,
  cardHeader,
  cardTitle,
  cardBody,
  cardFooter,
  paddingStyles,
} from './Card.css';

// CardRoot
export interface CardRootProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  children: ReactNode;
  variant?: 'outlined' | 'elevated' | 'filled';
  onClick?: () => void;
  disabled?: boolean;
}

export const CardRoot = forwardRef<HTMLElement, CardRootProps>(
  (
    {
      children,
      variant = 'elevated',
      onClick,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const isClickable = !!onClick;

    const clickableProps = useClickable({
      onClick: onClick ? () => onClick() : undefined,
      disabled,
      role: 'button',
    });

    const rootClasses = clsx(
      cardRoot,
      variantStyles[variant],
      {
        [clickableStyle]: isClickable,
        [disabledStyle]: disabled,
      },
      className
    );

    if (isClickable) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={rootClasses}
          onClick={clickableProps.onClick}
          onKeyDown={clickableProps.onKeyDown}
          disabled={disabled}
          aria-disabled={disabled}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <article ref={ref as React.Ref<HTMLElement>} className={rootClasses} {...props}>
        {children}
      </article>
    );
  }
);

CardRoot.displayName = 'CardRoot';

// CardImage
export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  children?: ReactNode;
}

export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt = '', children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(cardImageWrapper, className)} {...props}>
        <img src={src} alt={alt} className={cardImage} />
        {children}
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';

// CardImageOverlay
export interface CardImageOverlayProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardImageOverlay = forwardRef<HTMLDivElement, CardImageOverlayProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(cardImageOverlay, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardImageOverlay.displayName = 'CardImageOverlay';

// CardHeader
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <header ref={ref} className={clsx(cardHeader, className)} {...props}>
        {children}
      </header>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// CardTitle
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, as: Component = 'h3', className, ...props }, ref) => {
    return (
      <Component ref={ref} className={clsx(cardTitle, className)} {...props}>
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'CardTitle';

// CardBody
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, padding = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(cardBody, paddingStyles[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

// CardFooter
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <footer ref={ref} className={clsx(cardFooter, className)} {...props}>
        {children}
      </footer>
    );
  }
);

CardFooter.displayName = 'CardFooter';
