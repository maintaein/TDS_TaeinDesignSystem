import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@taein-designsystem/core';
import * as styles from './CodeBlock.css';

export interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  fileName?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'tsx',
  showLineNumbers = true,
  fileName,
  className,
}: CodeBlockProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${styles.codeBlock} ${className || ''}`}>
      {fileName && <div className={styles.fileName}>{fileName}</div>}
      <div className={styles.header}>
        <span className={styles.language}>{language}</span>
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
      <div className={styles.codeContainer}>
        <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? vscDarkPlus : vs}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            borderRadius: '0 0 0.5rem 0.5rem',
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
