import { lazy, Suspense, type ReactNode } from 'react';
import * as styles from './LivePreview.css';

const CodeBlock = lazy(() =>
  import('../CodeBlock').then((m) => ({ default: m.CodeBlock }))
);

const EditableLivePreview = lazy(() =>
  import('./EditableLivePreview').then((m) => ({
    default: m.EditableLivePreview,
  }))
);

export interface LivePreviewProps {
  children?: ReactNode;
  code: string;
  language?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  /** true이면 코드 편집 + 실시간 렌더링 모드 활성화 */
  editable?: boolean;
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
  editable = false,
}: LivePreviewProps) {
  return (
    <div className={`${styles.livePreview} ${className || ''}`}>
      {(title || description) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      {editable ? (
        <Suspense fallback={<div className={styles.codeFallback} />}>
          <EditableLivePreview
            code={code}
            centered={centered}
            padding={padding}
          />
        </Suspense>
      ) : (
        <>
          <div
            className={`${styles.preview} ${centered ? styles.previewCentered : ''} ${
              styles.previewPadding[padding]
            }`}
          >
            {children}
          </div>
          <Suspense fallback={<div className={styles.codeFallback} />}>
            <CodeBlock code={code} language={language} />
          </Suspense>
        </>
      )}
    </div>
  );
}
