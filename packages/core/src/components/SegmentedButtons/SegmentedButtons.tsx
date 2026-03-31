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

/** 개별 세그먼트 옵션 */
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

/** 여러 옵션 중 하나를 선택하는 세그먼트 버튼 그룹. 제어/비제어 모드 지원 */
export interface SegmentedButtonsProps {
  /** 옵션 목록 */
  options: SegmentedButtonOption[];

  // 제어 모드
  /** 제어 모드: 선택된 값 */
  value?: string;
  /** 제어 모드: 값 변경 핸들러 */
  onChange?: (value: string) => void;

  // 비제어 모드
  /** 비제어 모드: 초기 선택 값 */
  defaultValue?: string;

  // 공통 props
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
  value: controlledValue,
  defaultValue,
  onChange,
  size = 'md',
  fullWidth = false,
  disabled = false,
  'aria-label': ariaLabel,
  className,
}: SegmentedButtonsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 비제어 모드용 내부 상태
  const [uncontrolledValue, setUncontrolledValue] = useState<string>(
    defaultValue ?? options[0]?.value ?? ''
  );

  // 제어/비제어 판단
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  // 개발 환경 경고
  if (process.env.NODE_ENV === 'development') {
    if (controlledValue !== undefined && defaultValue !== undefined) {
      console.warn(
        'SegmentedButtons: value와 defaultValue를 동시에 사용할 수 없습니다. ' +
          '제어 컴포넌트는 value를, 비제어 컴포넌트는 defaultValue를 사용하세요.'
      );
    }
    if (!isControlled && !defaultValue && options.length > 0) {
      console.info(
        'SegmentedButtons: value와 defaultValue가 모두 없습니다. ' +
          `첫 번째 옵션 "${options[0]?.value}"이 기본값으로 사용됩니다.`
      );
    }
  }

  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const labels = Array.from(container.querySelectorAll('label'));
    const selectedLabel = labels.find(
      (_, i) => options[i].value === currentValue
    );
    if (selectedLabel) {
      const rect = selectedLabel.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  }, [currentValue, options]);

  const handleSelect = useCallback(
    (newValue: string) => {
      // 비제어 모드: 내부 상태 업데이트
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      // onChange 호출 (있는 경우)
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  const handleOptionClick = useCallback(
    (optionValue: string, optionDisabled?: boolean) => {
      if (disabled || optionDisabled) return;
      handleSelect(optionValue);
    },
    [disabled, handleSelect]
  );

  const handleLabelClick = useCallback(
    (
      event: React.MouseEvent<HTMLLabelElement>,
      optionValue: string,
      optionDisabled?: boolean
    ) => {
      event.preventDefault();
      if (disabled || optionDisabled) return;
      handleSelect(optionValue);
    },
    [disabled, handleSelect]
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
          handleSelect(options[index].value);
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
          handleSelect(nextOption.value);
        }
      }
    },
    [disabled, options, handleSelect]
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
        const isSelected = currentValue === option.value;
        const isDisabled = disabled || option.disabled;

        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
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
