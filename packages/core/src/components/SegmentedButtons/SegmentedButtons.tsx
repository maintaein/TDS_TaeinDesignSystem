import {
  useCallback,
  useRef,
  type ReactNode,
  type KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import {
  container,
  sizeVariants,
  fullWidth as fullWidthClass,
  button,
  buttonContent,
  iconWrapper,
  labelText,
  radioInput,
  activeIndicator,
} from './SegmentedButtons.css';

export interface SegmentedButtonOption {
  /** 옵션 값 */
  value: string;
  /** 옵션 레이블 */
  label: string;
  /** 옵션 아이콘 */
  icon?: ReactNode;
  /** 아이콘만 표시 (레이블 숨김) */
  iconOnly?: boolean;
  /** 개별 옵션 비활성화 */
  disabled?: boolean;
}

export interface SegmentedButtonsProps {
  /** 옵션 목록 */
  options: SegmentedButtonOption[];
  /** 선택된 값 */
  value: string;
  /** 값 변경 핸들러 */
  onChange: (value: string) => void;
  /** 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 전체 너비 사용 */
  fullWidth?: boolean;
  /** 전체 비활성화 */
  disabled?: boolean;
  /** 접근성: 그룹 레이블 */
  'aria-label'?: string;
  /** 추가 클래스명 */
  className?: string;
}

export const SegmentedButtons = ({
  options,
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  disabled = false,
  'aria-label': ariaLabel,
  className,
}: SegmentedButtonsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const labels = Array.from(container.querySelectorAll('label'));
    const selectedLabel = labels.find((_, i) => options[i].value === value);
    if (selectedLabel) {
      const rect = selectedLabel.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  }, [value, options]);

  const handleOptionClick = useCallback(
    (optionValue: string, optionDisabled?: boolean) => {
      if (disabled || optionDisabled) return;
      onChange(optionValue);
    },
    [disabled, onChange]
  );

  const handleLabelClick = useCallback(
    (
      event: React.MouseEvent<HTMLLabelElement>,
      optionValue: string,
      optionDisabled?: boolean
    ) => {
      event.preventDefault();
      if (disabled || optionDisabled) return;
      onChange(optionValue);
    },
    [disabled, onChange]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLLabelElement>, index: number) => {
      if (disabled) return;

      const enabledOptions = options.filter((opt) => !opt.disabled);
      const currentEnabledIndex = enabledOptions.findIndex(
        (opt) => opt.value === options[index].value
      );

      let nextIndex = -1;

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextIndex = (currentEnabledIndex + 1) % enabledOptions.length;
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        nextIndex =
          (currentEnabledIndex - 1 + enabledOptions.length) %
          enabledOptions.length;
      } else if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        if (!options[index].disabled) {
          onChange(options[index].value);
        }
        return;
      } else {
        return;
      }

      const nextOption = enabledOptions[nextIndex];
      const nextOptionIndex = options.findIndex(
        (opt) => opt.value === nextOption.value
      );

      if (nextOptionIndex !== -1) {
        const nextLabel =
          containerRef.current?.querySelectorAll('label')[nextOptionIndex];
        if (nextLabel) {
          nextLabel.focus();
          onChange(nextOption.value);
        }
      }
    },
    [disabled, options, onChange]
  );

  return (
    <div
      ref={containerRef}
      role="radiogroup"
      aria-label={ariaLabel}
      className={clsx(
        container,
        sizeVariants[size],
        fullWidth && fullWidthClass,
        className
      )}
    >
      <span
        className={activeIndicator}
        style={{
          transform: `translateX(${indicatorStyle.left}px)`,
          width: indicatorStyle.width,
        }}
      />

      {options.map((option, index) => {
        const isSelected = value === option.value;
        const isDisabled = disabled || option.disabled;

        return (
          <label
            key={option.value}
            className={clsx(
              button,
              isSelected && 'selected',
              isDisabled && 'disabled',
              option.iconOnly && 'iconOnly'
            )}
            tabIndex={isDisabled ? -1 : 0}
            onClick={(e) => handleLabelClick(e, option.value, option.disabled)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <input
              type="radio"
              className={radioInput}
              value={option.value}
              checked={isSelected}
              disabled={isDisabled}
              onChange={() => handleOptionClick(option.value, option.disabled)}
              aria-checked={isSelected}
              aria-disabled={isDisabled}
              aria-label={option.label}
              tabIndex={-1}
            />
            <span className={buttonContent}>
              {option.icon && (
                <span className={iconWrapper} aria-hidden="true">
                  {option.icon}
                </span>
              )}
              {!option.iconOnly && (
                <span className={labelText}>{option.label}</span>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
};

SegmentedButtons.displayName = 'SegmentedButtons';
