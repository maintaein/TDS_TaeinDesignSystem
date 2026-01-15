import type { ReactNode } from 'react';
import { CodeBlock } from '../CodeBlock';
import * as styles from './LivePreview.css';

export interface LivePreviewProps {
  children: ReactNode;
  code: string;
  language?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function LivePreview({
  children,
  code,
  language = 'tsx',
  title,
  description,
  centered = true,
  padding = 'md',
  className,
}: LivePreviewProps) {
  return (
    <div className={`${styles.livePreview} ${className || ''}`}>
      {(title || description) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      <div
        className={`${styles.preview} ${centered ? styles.previewCentered : ''} ${
          styles.previewPadding[padding]
        }`}
      >
        {children}
      </div>
      <CodeBlock code={code} language={language} />
    </div>
  );
}
