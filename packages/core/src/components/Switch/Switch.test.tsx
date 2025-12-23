import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createRef, useState } from 'react';
import { Switch } from './Switch';

describe('Switch', () => {
  describe('렌더링 테스트', () => {
    it('기본 switch를 렌더링한다', () => {
      render(<Switch label="알림 허용" />);
      const switchElement = screen.getByRole('switch', { name: '알림 허용' });
      expect(switchElement).toBeInTheDocument();
    });

    it('label 텍스트를 표시한다', () => {
      render(<Switch label="다크모드" />);
      expect(screen.getByText('다크모드')).toBeInTheDocument();
    });

    it('checked 상태를 렌더링한다', () => {
      render(<Switch label="활성화" checked onChange={() => {}} />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeChecked();
    });

    it('unchecked 상태를 렌더링한다', () => {
      render(<Switch label="비활성화" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).not.toBeChecked();
    });
  });

  describe('size prop 테스트', () => {
    it('sm size를 적용한다', () => {
      render(<Switch label="작은 스위치" size="sm" />);
      const switchElement = screen.getByRole('switch');
      const thumb = switchElement.nextElementSibling;
      expect(thumb?.className).toContain('thumbSize_sm');
    });

    it('md size를 적용한다 (기본값)', () => {
      render(<Switch label="중간 스위치" />);
      const switchElement = screen.getByRole('switch');
      const thumb = switchElement.nextElementSibling;
      expect(thumb?.className).toContain('thumbSize_md');
    });

    it('lg size를 적용한다', () => {
      render(<Switch label="큰 스위치" size="lg" />);
      const switchElement = screen.getByRole('switch');
      const thumb = switchElement.nextElementSibling;
      expect(thumb?.className).toContain('thumbSize_lg');
    });
  });

  describe('상태 prop 테스트', () => {
    it('disabled 상태를 적용한다', () => {
      render(<Switch label="비활성 스위치" disabled />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeDisabled();
    });

    it('required 상태를 적용한다', () => {
      render(<Switch label="필수 스위치" required />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeRequired();
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('error prop 테스트', () => {
    it('error 상태를 적용한다', () => {
      render(<Switch label="에러 스위치" error />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-invalid', 'true');
    });

    it('errorMessage를 표시한다', () => {
      render(<Switch label="스위치" error errorMessage="필수 항목입니다" />);
      expect(screen.getByText('필수 항목입니다')).toBeInTheDocument();
    });

    it('error가 없으면 errorMessage를 표시하지 않는다', () => {
      render(<Switch label="스위치" errorMessage="에러" />);
      expect(screen.queryByText('에러')).not.toBeInTheDocument();
    });
  });

  describe('helperText prop 테스트', () => {
    it('helperText를 표시한다', () => {
      render(
        <Switch label="스위치" helperText="알림을 받으려면 활성화하세요" />
      );
      expect(
        screen.getByText('알림을 받으려면 활성화하세요')
      ).toBeInTheDocument();
    });

    it('error가 있으면 helperText를 표시하지 않는다', () => {
      render(
        <Switch label="스위치" helperText="도움말" error errorMessage="에러" />
      );
      expect(screen.queryByText('도움말')).not.toBeInTheDocument();
      expect(screen.getByText('에러')).toBeInTheDocument();
    });
  });

  describe('이벤트 핸들러 테스트', () => {
    it('onChange 이벤트를 호출한다', async () => {
      const handleChange = vi.fn();
      render(<Switch label="스위치" onChange={handleChange} />);
      const switchElement = screen.getByRole('switch');

      await userEvent.click(switchElement);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('label 클릭 시 onChange를 호출한다', async () => {
      const handleChange = vi.fn();
      render(<Switch label="스위치" onChange={handleChange} />);
      const label = screen.getByText('스위치');

      await userEvent.click(label);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('disabled 상태에서는 onChange가 호출되지 않는다', async () => {
      const handleChange = vi.fn();
      render(<Switch label="스위치" disabled onChange={handleChange} />);
      const switchElement = screen.getByRole('switch');

      await userEvent.click(switchElement).catch(() => {});
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('onFocus 이벤트를 호출한다', async () => {
      const handleFocus = vi.fn();
      render(<Switch label="스위치" onFocus={handleFocus} />);
      const switchElement = screen.getByRole('switch');

      await userEvent.click(switchElement);
      expect(handleFocus).toHaveBeenCalled();
    });

    it('onBlur 이벤트를 호출한다', async () => {
      const handleBlur = vi.fn();
      render(<Switch label="스위치" onBlur={handleBlur} />);
      const switchElement = screen.getByRole('switch');

      switchElement.focus();
      switchElement.blur();
      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('ref 전달 테스트', () => {
    it('forwardRef로 ref를 전달한다', () => {
      const ref = createRef<HTMLInputElement>();
      render(<Switch label="스위치" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe('checkbox');
    });

    it('ref를 통해 focus를 호출할 수 있다', () => {
      const ref = createRef<HTMLInputElement>();
      render(<Switch label="스위치" ref={ref} />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it('ref를 통해 checked 상태를 확인할 수 있다', () => {
      const ref = createRef<HTMLInputElement>();
      render(<Switch label="스위치" checked onChange={() => {}} ref={ref} />);
      expect(ref.current?.checked).toBe(true);
    });
  });

  describe('접근성 테스트', () => {
    it('role="switch"를 가진다', () => {
      render(<Switch label="스위치" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();
    });

    it('aria-checked 속성을 올바르게 설정한다', () => {
      const { rerender } = render(<Switch label="스위치" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-checked', 'false');

      rerender(<Switch label="스위치" checked onChange={() => {}} />);
      expect(switchElement).toHaveAttribute('aria-checked', 'true');
    });

    it('aria-disabled 속성을 설정한다', () => {
      render(<Switch label="스위치" disabled />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-disabled', 'true');
    });

    it('aria-invalid를 error 상태에서 설정한다', () => {
      render(<Switch label="스위치" error />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-invalid', 'true');
    });

    it('aria-describedby를 helperText와 연결한다', () => {
      render(<Switch label="스위치" helperText="도움말 텍스트" />);
      const switchElement = screen.getByRole('switch');
      const describedBy = switchElement.getAttribute('aria-describedby');
      expect(describedBy).toBeTruthy();
      expect(screen.getByText('도움말 텍스트')).toHaveAttribute(
        'id',
        describedBy
      );
    });

    it('aria-describedby를 errorMessage와 연결한다', () => {
      render(<Switch label="스위치" error errorMessage="에러 메시지" />);
      const switchElement = screen.getByRole('switch');
      const describedBy = switchElement.getAttribute('aria-describedby');
      expect(describedBy).toBeTruthy();
      expect(screen.getByText('에러 메시지')).toHaveAttribute(
        'id',
        describedBy
      );
    });

    it('label과 input이 올바르게 연결된다', () => {
      render(<Switch label="테스트 스위치" />);
      const switchElement = screen.getByRole('switch');
      const labelElement = screen.getByText('테스트 스위치');
      expect(switchElement.id).toBeTruthy();
      expect(labelElement.closest('label')).toHaveAttribute(
        'for',
        switchElement.id
      );
    });
  });

  describe('키보드 인터랙션 테스트', () => {
    it('Space 키로 토글할 수 있다', async () => {
      const handleChange = vi.fn();
      render(<Switch label="스위치" onChange={handleChange} />);
      const switchElement = screen.getByRole('switch');

      switchElement.focus();
      await userEvent.keyboard(' ');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('Tab 키로 포커스를 이동할 수 있다', async () => {
      render(
        <div>
          <Switch label="스위치 1" />
          <Switch label="스위치 2" />
        </div>
      );

      await userEvent.tab();
      expect(screen.getByRole('switch', { name: '스위치 1' })).toHaveFocus();

      await userEvent.tab();
      expect(screen.getByRole('switch', { name: '스위치 2' })).toHaveFocus();
    });
  });

  describe('엣지 케이스 테스트', () => {
    it('label이 없으면 개발 환경에서 경고한다', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(<Switch label="" />);

      expect(consoleError).toHaveBeenCalledWith(
        expect.stringContaining('Switch: label prop은 필수입니다')
      );

      process.env.NODE_ENV = originalEnv;
      consoleError.mockRestore();
    });

    it('value와 onChange가 동시에 제공되면 제어 컴포넌트로 동작한다', async () => {
      const ControlledSwitch = () => {
        const [checked, setChecked] = useState(false);
        return (
          <Switch
            label="제어 스위치"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        );
      };

      render(<ControlledSwitch />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement).not.toBeChecked();

      await userEvent.click(switchElement);
      expect(switchElement).toBeChecked();

      await userEvent.click(switchElement);
      expect(switchElement).not.toBeChecked();
    });

    it('className prop을 전달할 수 있다', () => {
      render(<Switch label="스위치" className="custom-class" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveClass('custom-class');
    });
  });
});
