import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SegmentedButtons } from './SegmentedButtons';

describe('SegmentedButtons', () => {
  const options = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
  ];

  describe('렌더링 테스트', () => {
    it('기본적으로 렌더링된다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: '옵션 1' })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: '옵션 2' })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: '옵션 3' })).toBeInTheDocument();
    });

    it('모든 옵션을 렌더링한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      options.forEach((option) => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });

    it('선택된 옵션이 체크된 상태로 표시된다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option2"
          onChange={() => {}}
        />
      );

      const selectedButton = screen.getByRole('radio', { name: '옵션 2' });
      expect(selectedButton).toBeChecked();
    });

    it('선택되지 않은 옵션은 체크되지 않은 상태로 표시된다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option2"
          onChange={() => {}}
        />
      );

      const unselectedButton1 = screen.getByRole('radio', { name: '옵션 1' });
      const unselectedButton3 = screen.getByRole('radio', { name: '옵션 3' });

      expect(unselectedButton1).not.toBeChecked();
      expect(unselectedButton3).not.toBeChecked();
    });
  });

  describe('size prop 테스트', () => {
    it('size="sm"을 적용한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          size="sm"
        />
      );

      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup.className).toContain('sm');
    });

    it('size="md"를 기본값으로 적용한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup.className).toContain('md');
    });

    it('size="lg"를 적용한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          size="lg"
        />
      );

      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup.className).toContain('lg');
    });
  });

  describe('fullWidth prop 테스트', () => {
    it('fullWidth가 true이면 전체 너비를 사용한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          fullWidth
        />
      );

      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup.className).toContain('fullWidth');
    });

    it('fullWidth가 false이면 기본 너비를 사용한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup.className).not.toContain('fullWidth');
    });
  });

  describe('disabled prop 테스트', () => {
    it('disabled 상태를 적용한다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          disabled
        />
      );

      const buttons = screen.getAllByRole('radio');
      buttons.forEach((button) => {
        expect(button).toBeDisabled();
      });
    });

    it('개별 옵션을 비활성화할 수 있다', () => {
      const optionsWithDisabled = [
        { value: 'option1', label: '옵션 1' },
        { value: 'option2', label: '옵션 2', disabled: true },
        { value: 'option3', label: '옵션 3' },
      ];

      render(
        <SegmentedButtons
          options={optionsWithDisabled}
          value="option1"
          onChange={() => {}}
        />
      );

      const button2 = screen.getByRole('radio', { name: '옵션 2' });
      expect(button2).toBeDisabled();

      const button1 = screen.getByRole('radio', { name: '옵션 1' });
      const button3 = screen.getByRole('radio', { name: '옵션 3' });
      expect(button1).not.toBeDisabled();
      expect(button3).not.toBeDisabled();
    });
  });

  describe('이벤트 핸들러 테스트', () => {
    it('옵션 클릭 시 onChange가 호출된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
        />
      );

      const option2 = screen.getByRole('radio', { name: '옵션 2' });
      await user.click(option2);

      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('이미 선택된 옵션을 클릭해도 onChange가 호출된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
        />
      );

      const option1Label = screen.getByText('옵션 1');
      await user.click(option1Label);

      expect(handleChange).toHaveBeenCalledWith('option1');
    });

    it('disabled 상태에서는 onChange가 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
          disabled
        />
      );

      const option2 = screen.getByRole('radio', { name: '옵션 2' });
      await user.click(option2);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('개별 옵션이 disabled인 경우 onChange가 호출되지 않는다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const optionsWithDisabled = [
        { value: 'option1', label: '옵션 1' },
        { value: 'option2', label: '옵션 2', disabled: true },
        { value: 'option3', label: '옵션 3' },
      ];

      render(
        <SegmentedButtons
          options={optionsWithDisabled}
          value="option1"
          onChange={handleChange}
        />
      );

      const option2 = screen.getByRole('radio', { name: '옵션 2' });
      await user.click(option2);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('접근성 테스트', () => {
    it('radiogroup role을 가진다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('각 옵션은 radio role을 가진다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      const radios = screen.getAllByRole('radio');
      expect(radios).toHaveLength(3);
    });

    it('aria-label을 설정할 수 있다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          aria-label="옵션 선택"
        />
      );

      const radiogroup = screen.getByRole('radiogroup', { name: '옵션 선택' });
      expect(radiogroup).toBeInTheDocument();
    });

    it('선택된 상태가 스크린 리더에 전달된다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option2"
          onChange={() => {}}
        />
      );

      const selectedButton = screen.getByRole('radio', { name: '옵션 2' });
      expect(selectedButton).toHaveAttribute('aria-checked', 'true');
    });

    it('비활성화 상태가 스크린 리더에 전달된다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          disabled
        />
      );

      const buttons = screen.getAllByRole('radio');
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-disabled', 'true');
      });
    });
  });

  describe('키보드 인터랙션 테스트', () => {
    it('Tab 키로 포커스할 수 있다', async () => {
      const user = userEvent.setup();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
        />
      );

      await user.tab();
      const firstButton = screen.getByText('옵션 1').closest('label');
      expect(firstButton).toHaveFocus();
    });

    it('Arrow Right 키로 다음 옵션으로 이동하고 선택된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
        />
      );

      const firstButton = screen.getByText('옵션 1').closest('label');
      firstButton?.focus();

      await user.keyboard('{ArrowRight}');

      const secondButton = screen.getByText('옵션 2').closest('label');
      expect(secondButton).toHaveFocus();
      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('Arrow Left 키로 이전 옵션으로 이동하고 선택된다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option2"
          onChange={handleChange}
        />
      );

      const secondButton = screen.getByText('옵션 2').closest('label');
      secondButton?.focus();

      await user.keyboard('{ArrowLeft}');

      const firstButton = screen.getByText('옵션 1').closest('label');
      expect(firstButton).toHaveFocus();
      expect(handleChange).toHaveBeenCalledWith('option1');
    });

    it('첫 번째 옵션에서 Arrow Left 키를 누르면 마지막 옵션으로 이동한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
        />
      );

      const firstButton = screen.getByText('옵션 1').closest('label');
      firstButton?.focus();

      await user.keyboard('{ArrowLeft}');

      const lastButton = screen.getByText('옵션 3').closest('label');
      expect(lastButton).toHaveFocus();
      expect(handleChange).toHaveBeenCalledWith('option3');
    });

    it('마지막 옵션에서 Arrow Right 키를 누르면 첫 번째 옵션으로 이동한다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option3"
          onChange={handleChange}
        />
      );

      const lastButton = screen.getByText('옵션 3').closest('label');
      lastButton?.focus();

      await user.keyboard('{ArrowRight}');

      const firstButton = screen.getByText('옵션 1').closest('label');
      expect(firstButton).toHaveFocus();
      expect(handleChange).toHaveBeenCalledWith('option1');
    });

    it('Space 키로 옵션을 선택할 수 있다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
        />
      );

      const secondButton = screen.getByRole('radio', { name: '옵션 2' });
      secondButton.focus();

      await user.keyboard(' ');

      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('disabled 상태에서는 키보드 조작이 불가능하다', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={handleChange}
          disabled
        />
      );

      const firstButton = screen.getByRole('radio', { name: '옵션 1' });
      firstButton.focus();

      await user.keyboard('{ArrowRight}');
      await user.keyboard(' ');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('아이콘 지원 테스트', () => {
    it('옵션에 아이콘을 표시할 수 있다', () => {
      const optionsWithIcons = [
        {
          value: 'option1',
          label: '옵션 1',
          icon: <span data-testid="icon-1">🏠</span>,
        },
        {
          value: 'option2',
          label: '옵션 2',
          icon: <span data-testid="icon-2">⭐</span>,
        },
      ];

      render(
        <SegmentedButtons
          options={optionsWithIcons}
          value="option1"
          onChange={() => {}}
        />
      );

      expect(screen.getByTestId('icon-1')).toBeInTheDocument();
      expect(screen.getByTestId('icon-2')).toBeInTheDocument();
    });

    it('아이콘만 있는 옵션을 렌더링할 수 있다', () => {
      const iconOnlyOptions = [
        {
          value: 'option1',
          label: '홈',
          icon: <span data-testid="icon-1">🏠</span>,
          iconOnly: true,
        },
        {
          value: 'option2',
          label: '즐겨찾기',
          icon: <span data-testid="icon-2">⭐</span>,
          iconOnly: true,
        },
      ];

      render(
        <SegmentedButtons
          options={iconOnlyOptions}
          value="option1"
          onChange={() => {}}
        />
      );

      expect(screen.getByTestId('icon-1')).toBeInTheDocument();
      expect(screen.getByTestId('icon-2')).toBeInTheDocument();

      expect(screen.queryByText('홈')).not.toBeInTheDocument();
      expect(screen.queryByText('즐겨찾기')).not.toBeInTheDocument();
    });
  });

  describe('엣지 케이스 테스트', () => {
    it('옵션이 1개만 있어도 렌더링된다', () => {
      const singleOption = [{ value: 'only', label: '유일한 옵션' }];

      render(
        <SegmentedButtons
          options={singleOption}
          value="only"
          onChange={() => {}}
        />
      );

      expect(
        screen.getByRole('radio', { name: '유일한 옵션' })
      ).toBeInTheDocument();
    });

    it('많은 옵션도 렌더링할 수 있다', () => {
      const manyOptions = Array.from({ length: 10 }, (_, i) => ({
        value: `option${i}`,
        label: `옵션 ${i + 1}`,
      }));

      render(
        <SegmentedButtons
          options={manyOptions}
          value="option0"
          onChange={() => {}}
        />
      );

      const radios = screen.getAllByRole('radio');
      expect(radios).toHaveLength(10);
    });

    it('value가 options에 없으면 선택된 옵션이 없다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="nonexistent"
          onChange={() => {}}
        />
      );

      const radios = screen.getAllByRole('radio');
      radios.forEach((radio) => {
        expect(radio).not.toBeChecked();
      });
    });

    it('className을 추가할 수 있다', () => {
      render(
        <SegmentedButtons
          options={options}
          value="option1"
          onChange={() => {}}
          className="custom-class"
        />
      );

      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup.className).toContain('custom-class');
    });
  });
});
