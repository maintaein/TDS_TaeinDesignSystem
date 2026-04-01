import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';
import * as styles from './EditableCodeBlock.css';

export interface EditableCodeBlockProps {
  code: string;
  onCodeChange: (code: string) => void;
  language?: string;
}

function highlight(code: string): string {
  const grammar = Prism.languages['tsx'] || Prism.languages['jsx'] || Prism.languages['javascript'];
  return Prism.highlight(code, grammar, 'tsx');
}

export function EditableCodeBlock({
  code,
  onCodeChange,
}: EditableCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>EDITABLE EXAMPLE</span>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label="코드 복사"
        >
          {copied ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          )}
          <span className={styles.copyText}>{copied ? '복사됨!' : '복사'}</span>
        </button>
      </div>
      <div className={styles.editorContainer}>
        <Editor
          value={code}
          onValueChange={onCodeChange}
          highlight={highlight}
          padding={16}
          className={styles.editor}
          style={{
            color: '#1e1e1e',
            backgroundColor: '#ffffff',
          }}
        />
      </div>
    </div>
  );
}
