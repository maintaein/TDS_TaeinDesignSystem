import { useState, Component, lazy, Suspense, type ReactNode } from 'react';
import { EditableCodeBlock } from '../EditableCodeBlock';
import { useCodeEval } from '../../hooks/useCodeEval';
import * as styles from './LivePreview.css';

const CodeBlock = lazy(() =>
  import('../CodeBlock').then((m) => ({ default: m.CodeBlock }))
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

/** 렌더링 에러를 잡는 ErrorBoundary */
interface ErrorBoundaryProps {
  children: ReactNode;
  onError: (error: string) => void;
  resetKey: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class RenderErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error) {
    this.props.onError(error.message);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, errorMessage: '' });
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

/** editable 모드의 프리뷰 + 에디터 */
function EditableLivePreview({
  code: initialCode,
  centered,
  padding,
}: {
  code: string;
  centered: boolean;
  padding: 'none' | 'sm' | 'md' | 'lg';
}) {
  const [editedCode, setEditedCode] = useState(initialCode);
  const [renderError, setRenderError] = useState<string | null>(null);
  const { element, error: evalError } = useCodeEval(editedCode);

  const error = evalError || renderError;
  const hasError = error !== null;

  const handleCodeChange = (newCode: string) => {
    setEditedCode(newCode);
    setRenderError(null);
  };

  return (
    <>
      <div
        className={`${styles.preview} ${centered ? styles.previewCentered : ''} ${
          styles.previewPadding[padding]
        } ${hasError ? styles.previewEmpty : ''}`}
      >
        {!hasError && element && (
          <RenderErrorBoundary onError={setRenderError} resetKey={editedCode}>
            {element}
          </RenderErrorBoundary>
        )}
      </div>
      {hasError && (
        <div className={styles.errorBar}>
          <svg
            className={styles.errorIcon}
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.75a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4zM8 12a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
          {error}
        </div>
      )}
      <EditableCodeBlock code={editedCode} onCodeChange={handleCodeChange} />
    </>
  );
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
        <EditableLivePreview
          code={code}
          centered={centered}
          padding={padding}
        />
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
