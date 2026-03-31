import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';

describe('Popover', () => {
  describe('렌더링 테스트', () => {
    it('children(트리거)이 렌더링된다', () => {
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      expect(screen.getByText('트리거')).toBeInTheDocument();
    });

    it('기본 상태에서 content는 표시되지 않는다', () => {
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });
  });

  describe('클릭 열기/닫기 테스트', () => {
    it('트리거 클릭 시 content가 표시된다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();
    });

    it('트리거를 다시 클릭하면 content가 닫힌다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();

      await user.click(screen.getByText('트리거'));
      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });
  });

  describe('바깥 클릭 닫기 테스트', () => {
    it('팝오버 외부를 클릭하면 닫힌다', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Popover content={<div>팝오버 내용</div>}>
            <button>트리거</button>
          </Popover>
          <button>외부 버튼</button>
        </div>
      );

      await user.click(screen.getByText('트리거'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();

      await user.click(screen.getByText('외부 버튼'));
      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });

    it('closeOnOutsideClick=false이면 외부 클릭으로 닫히지 않는다', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Popover content={<div>팝오버 내용</div>} closeOnOutsideClick={false}>
            <button>트리거</button>
          </Popover>
          <button>외부 버튼</button>
        </div>
      );

      await user.click(screen.getByText('트리거'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();

      await user.click(screen.getByText('외부 버튼'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();
    });
  });

  describe('ESC 닫기 테스트', () => {
    it('Escape 키를 누르면 팝오버가 닫힌다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });

    it('closeOnEscape=false이면 Escape로 닫히지 않는다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>} closeOnEscape={false}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();
    });
  });

  describe('position prop 테스트', () => {
    it('기본 position은 "bottom"이다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const popover = container.querySelector('[role="dialog"]');
      expect(popover).toHaveClass(/positionStyles_bottom/);
    });

    it('position="top"일 때 적절한 클래스가 적용된다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>} position="top">
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const popover = container.querySelector('[role="dialog"]');
      expect(popover).toHaveClass(/positionStyles_top/);
    });

    it('position="left"일 때 적절한 클래스가 적용된다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>} position="left">
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const popover = container.querySelector('[role="dialog"]');
      expect(popover).toHaveClass(/positionStyles_left/);
    });

    it('position="right"일 때 적절한 클래스가 적용된다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>} position="right">
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const popover = container.querySelector('[role="dialog"]');
      expect(popover).toHaveClass(/positionStyles_right/);
    });
  });

  describe('제어 모드 테스트', () => {
    it('open=true이면 content가 표시된다', () => {
      render(
        <Popover content={<div>팝오버 내용</div>} open={true}>
          <button>트리거</button>
        </Popover>
      );

      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();
    });

    it('open=false이면 content가 숨겨진다', () => {
      render(
        <Popover content={<div>팝오버 내용</div>} open={false}>
          <button>트리거</button>
        </Popover>
      );

      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });

    it('트리거 클릭 시 onOpenChange가 호출된다', async () => {
      const handleOpenChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Popover
          content={<div>팝오버 내용</div>}
          open={false}
          onOpenChange={handleOpenChange}
        >
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      expect(handleOpenChange).toHaveBeenCalledWith(true);
    });

    it('ESC 시 onOpenChange(false)가 호출된다', async () => {
      const handleOpenChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Popover
          content={<div>팝오버 내용</div>}
          open={true}
          onOpenChange={handleOpenChange}
        >
          <button>트리거</button>
        </Popover>
      );

      await user.keyboard('{Escape}');
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe('비제어 모드 테스트', () => {
    it('내부 상태로 열기/닫기가 동작한다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();

      await user.click(screen.getByText('트리거'));
      expect(screen.getByText('팝오버 내용')).toBeInTheDocument();

      await user.click(screen.getByText('트리거'));
      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });

    it('onOpenChange 콜백이 호출된다', async () => {
      const handleOpenChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>} onOpenChange={handleOpenChange}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      expect(handleOpenChange).toHaveBeenCalledWith(true);

      await user.click(screen.getByText('트리거'));
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe('disabled 테스트', () => {
    it('disabled 상태에서 클릭해도 열리지 않는다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>} disabled>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      expect(screen.queryByText('팝오버 내용')).not.toBeInTheDocument();
    });
  });

  describe('접근성 테스트', () => {
    it('트리거에 aria-haspopup="dialog"가 설정된다', () => {
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      const trigger = container.querySelector('[aria-haspopup="dialog"]');
      expect(trigger).toBeInTheDocument();
    });

    it('닫힌 상태에서 aria-expanded="false"이다', () => {
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      const trigger = container.querySelector('[aria-expanded="false"]');
      expect(trigger).toBeInTheDocument();
    });

    it('열린 상태에서 aria-expanded="true"이다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const trigger = container.querySelector('[aria-expanded="true"]');
      expect(trigger).toBeInTheDocument();
    });

    it('팝오버에 role="dialog"가 있다', async () => {
      const user = userEvent.setup();
      render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('트리거의 aria-controls가 팝오버 id와 연결된다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const popover = screen.getByRole('dialog');
      const popoverId = popover.getAttribute('id');
      const trigger = container.querySelector('[aria-controls]');
      expect(trigger?.getAttribute('aria-controls')).toBe(popoverId);
    });
  });

  describe('포커스 관리 테스트', () => {
    it('열릴 때 팝오버 내 첫 focusable 요소에 포커스된다', async () => {
      const user = userEvent.setup();
      render(
        <Popover
          content={
            <div>
              <button>첫 번째</button>
              <button>두 번째</button>
            </div>
          }
        >
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByText('첫 번째'));
      });
    });

    it('닫힐 때 트리거에 포커스가 복귀한다', async () => {
      const user = userEvent.setup();
      render(
        <Popover
          content={
            <div>
              <button>내부 버튼</button>
            </div>
          }
        >
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByText('내부 버튼'));
      });

      await user.keyboard('{Escape}');
      await waitFor(() => {
        expect(document.activeElement).toBe(screen.getByText('트리거'));
      });
    });
  });

  describe('className prop 테스트', () => {
    it('커스텀 className이 컨테이너에 적용된다', () => {
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>} className="custom-class">
          <button>트리거</button>
        </Popover>
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('arrow prop 테스트', () => {
    it('arrow=true이면 화살표가 표시된다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>} arrow>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const arrowEl = container.querySelector('[data-popover-arrow]');
      expect(arrowEl).toBeInTheDocument();
    });

    it('기본적으로 화살표는 표시되지 않는다', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover content={<div>팝오버 내용</div>}>
          <button>트리거</button>
        </Popover>
      );

      await user.click(screen.getByText('트리거'));

      const arrowEl = container.querySelector('[data-popover-arrow]');
      expect(arrowEl).not.toBeInTheDocument();
    });
  });
});
