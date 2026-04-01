import { useState } from 'react';
import * as styles from './ColorPalette.css';

export interface ColorItem {
  name: string;
  hex: string;
  description?: string;
}

export interface ColorPaletteProps {
  colors: ColorItem[];
  columns?: 2 | 3 | 4 | 5;
  showNames?: boolean;
  className?: string;
}

export function ColorPalette({
  colors,
  columns = 5,
  showNames = true,
  className,
}: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div
      className={`${styles.colorPalette} ${className || ''}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {colors.map((color) => (
        <button
          key={color.hex}
          className={styles.colorItem}
          onClick={() => handleCopy(color.hex)}
          aria-label={`${color.name} 색상 코드 복사`}
        >
          <div
            className={styles.colorSwatch}
            style={{ backgroundColor: color.hex }}
          >
            {copiedColor === color.hex && (
              <div className={styles.copiedIndicator}>
                <svg
                  width="20"
                  height="20"
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
              </div>
            )}
          </div>
          {showNames && (
            <div className={styles.colorInfo}>
              <div className={styles.colorName}>{color.name}</div>
              <div className={styles.colorHex}>{color.hex}</div>
              {color.description && (
                <div className={styles.colorDescription}>{color.description}</div>
              )}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
