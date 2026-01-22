import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './index';

describe('Modal', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('렌더링 테스트', () => {
    it('open이 true일 때 모달이 렌더링된다', () => {
      render(<Modal {...defaultProps} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('open이 false일 때 모달이 렌더링되지 않는다', () => {
      render(<Modal {...defaultProps} open={false} />);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('backdrop이 렌더링된다', () => {
      render(<Modal {...defaultProps} />);
      const backdrop = document.querySelector('[data-backdrop="true"]');
      expect(backdrop).toBeInTheDocument();
    });
  });

  describe('접근성 테스트', () => {
    it('role="dialog"를 가진다', () => {
      render(<Modal {...defaultProps} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('aria-modal="true"를 가진다', () => {
      render(<Modal {...defaultProps} />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('aria-labelledby가 제공될 때 설정된다', () => {
      render(
        <Modal {...defaultProps} aria-labelledby="modal-title">
          <h2 id="modal-title">Modal Title</h2>
        </Modal>
      );
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
    });

    it('aria-describedby가 제공될 때 설정된다', () => {
      render(
        <Modal {...defaultProps} aria-describedby="modal-desc">
          <p id="modal-desc">Modal Description</p>
        </Modal>
      );
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-describedby', 'modal-desc');
    });

    it('aria-label이 제공될 때 설정된다', () => {
      render(<Modal {...defaultProps} aria-label="Custom Modal" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-label', 'Custom Modal');
    });
  });

  describe('backdrop 클릭 테스트', () => {
    it('backdrop 클릭 시 onClose가 호출된다', () => {
      const onClose = vi.fn();
      render(<Modal {...defaultProps} onClose={onClose} />);
      const backdrop = document.querySelector('[data-backdrop="true"]');

      fireEvent.click(backdrop!);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closeOnBackdropClick이 false일 때 backdrop 클릭 시 onClose가 호출되지 않는다', () => {
      const onClose = vi.fn();
      render(
        <Modal
          {...defaultProps}
          onClose={onClose}
          closeOnBackdropClick={false}
        />
      );
      const backdrop = document.querySelector('[data-backdrop="true"]');

      fireEvent.click(backdrop!);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('모달 콘텐츠 클릭 시 onClose가 호출되지 않는다', () => {
      const onClose = vi.fn();
      render(<Modal {...defaultProps} onClose={onClose} />);

      fireEvent.click(screen.getByText('Modal Content'));
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('ESC 키 테스트', () => {
    it('ESC 키 입력 시 onClose가 호출된다', () => {
      const onClose = vi.fn();
      render(<Modal {...defaultProps} onClose={onClose} />);

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closeOnEscape가 false일 때 ESC 키 입력 시 onClose가 호출되지 않는다', () => {
      const onClose = vi.fn();
      render(
        <Modal {...defaultProps} onClose={onClose} closeOnEscape={false} />
      );

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onClose).not.toHaveBeenCalled();
    });

    it('다른 키 입력 시 onClose가 호출되지 않는다', () => {
      const onClose = vi.fn();
      render(<Modal {...defaultProps} onClose={onClose} />);

      fireEvent.keyDown(document, { key: 'Enter' });
      fireEvent.keyDown(document, { key: 'Space' });
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('포커스 관리 테스트', () => {
    it('모달이 열릴 때 첫 번째 포커스 가능 요소로 포커스가 이동한다', () => {
      render(
        <Modal {...defaultProps}>
          <div>
            <button>First Button</button>
            <button>Second Button</button>
          </div>
        </Modal>
      );

      const firstButton = screen.getByText('First Button');
      expect(firstButton).toHaveFocus();
    });

    it('포커스 가능한 요소가 없을 때 dialog로 포커스가 이동한다', () => {
      render(<Modal {...defaultProps}>Plain text content</Modal>);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveFocus();
    });

    it('모달이 닫힐 때 cleanup 함수가 실행된다', () => {
      const { unmount } = render(<Modal {...defaultProps} />);

      expect(document.body.style.overflow).toBe('hidden');

      unmount();

      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('포커스 트랩 테스트', () => {
    it('Tab 키 이벤트가 처리된다', () => {
      render(
        <Modal {...defaultProps}>
          <div>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        </Modal>
      );

      const button1 = screen.getByText('Button 1');
      expect(button1).toHaveFocus();

      const tabEvent = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
      });
      document.dispatchEvent(tabEvent);
    });

    it('Shift+Tab 키 이벤트가 처리된다', () => {
      render(
        <Modal {...defaultProps}>
          <div>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        </Modal>
      );

      const button1 = screen.getByText('Button 1');
      expect(button1).toHaveFocus();

      const shiftTabEvent = new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
      });
      document.dispatchEvent(shiftTabEvent);
    });
  });

  describe('size prop 테스트', () => {
    it('size="sm"일 때 dialog가 렌더링된다', () => {
      render(<Modal {...defaultProps} size="sm" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('size="md"일 때 dialog가 렌더링된다 (기본값)', () => {
      render(<Modal {...defaultProps} size="md" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('size="lg"일 때 dialog가 렌더링된다', () => {
      render(<Modal {...defaultProps} size="lg" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('size="xl"일 때 dialog가 렌더링된다', () => {
      render(<Modal {...defaultProps} size="xl" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('size="full"일 때 dialog가 렌더링된다', () => {
      render(<Modal {...defaultProps} size="full" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });
  });

  describe('className prop 테스트', () => {
    it('커스텀 className이 적용된다', () => {
      render(<Modal {...defaultProps} className="custom-modal" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveClass('custom-modal');
    });
  });

  describe('body scroll 테스트', () => {
    it('모달이 열릴 때 body scroll이 비활성화된다', () => {
      render(<Modal {...defaultProps} />);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('모달이 닫힐 때 body scroll이 복원된다', () => {
      const { rerender } = render(<Modal {...defaultProps} open={true} />);
      expect(document.body.style.overflow).toBe('hidden');

      rerender(<Modal {...defaultProps} open={false} />);
      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('애니메이션 테스트', () => {
    it('모달이 열릴 때 backdrop이 렌더링된다', () => {
      render(<Modal {...defaultProps} />);
      const backdrop = document.querySelector('[data-backdrop="true"]');
      expect(backdrop).toBeInTheDocument();
    });
  });
});

describe('Modal Compound API', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Modal.Header', () => {
    it('Modal.Header가 렌더링된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header>헤더 내용</Modal.Header>
        </Modal>
      );
      expect(screen.getByText('헤더 내용')).toBeInTheDocument();
    });

    it('showClose가 true일 때 닫기 버튼이 렌더링된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header showClose>헤더 내용</Modal.Header>
        </Modal>
      );
      expect(screen.getByRole('button', { name: /닫기/i })).toBeInTheDocument();
    });

    it('showClose 닫기 버튼 클릭 시 onClose가 호출된다', () => {
      const onClose = vi.fn();
      render(
        <Modal {...defaultProps} onClose={onClose}>
          <Modal.Header showClose>헤더 내용</Modal.Header>
        </Modal>
      );
      fireEvent.click(screen.getByRole('button', { name: /닫기/i }));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('커스텀 className이 적용된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header className="custom-header">헤더</Modal.Header>
        </Modal>
      );
      expect(screen.getByText('헤더').parentElement).toHaveClass('custom-header');
    });
  });

  describe('Modal.Title', () => {
    it('Modal.Title이 렌더링된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header>
            <Modal.Title>모달 제목</Modal.Title>
          </Modal.Header>
        </Modal>
      );
      expect(screen.getByText('모달 제목')).toBeInTheDocument();
    });

    it('기본 heading level은 h2이다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header>
            <Modal.Title>제목</Modal.Title>
          </Modal.Header>
        </Modal>
      );
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('as prop으로 heading level을 변경할 수 있다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header>
            <Modal.Title as="h3">제목</Modal.Title>
          </Modal.Header>
        </Modal>
      );
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
  });

  describe('Modal.Content', () => {
    it('Modal.Content가 렌더링된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Content>컨텐츠 내용</Modal.Content>
        </Modal>
      );
      expect(screen.getByText('컨텐츠 내용')).toBeInTheDocument();
    });

    it('커스텀 className이 적용된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Content className="custom-content">내용</Modal.Content>
        </Modal>
      );
      expect(screen.getByText('내용')).toHaveClass('custom-content');
    });
  });

  describe('Modal.Footer', () => {
    it('Modal.Footer가 렌더링된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Footer>
            <button>확인</button>
          </Modal.Footer>
        </Modal>
      );
      expect(screen.getByText('확인')).toBeInTheDocument();
    });

    it('align="right"일 때 스타일이 적용된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Footer align="right" data-testid="footer">푸터</Modal.Footer>
        </Modal>
      );
      const footer = screen.getByTestId('footer');
      expect(footer).toBeInTheDocument();
    });

    it('align="center"일 때 스타일이 적용된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Footer align="center" data-testid="footer">푸터</Modal.Footer>
        </Modal>
      );
      const footer = screen.getByTestId('footer');
      expect(footer).toBeInTheDocument();
    });

    it('align="left"가 기본값이다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Footer data-testid="footer">푸터</Modal.Footer>
        </Modal>
      );
      const footer = screen.getByTestId('footer');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('Compound 조합 테스트', () => {
    it('Modal.Header, Modal.Content, Modal.Footer가 함께 렌더링된다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header showClose>
            <Modal.Title>회원 탈퇴</Modal.Title>
          </Modal.Header>
          <Modal.Content>정말 탈퇴하시겠습니까?</Modal.Content>
          <Modal.Footer align="right">
            <button>취소</button>
            <button>탈퇴</button>
          </Modal.Footer>
        </Modal>
      );

      expect(screen.getByText('회원 탈퇴')).toBeInTheDocument();
      expect(screen.getByText('정말 탈퇴하시겠습니까?')).toBeInTheDocument();
      expect(screen.getByText('취소')).toBeInTheDocument();
      expect(screen.getByText('탈퇴')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /닫기/i })).toBeInTheDocument();
    });

    it('Header만 사용해도 동작한다', () => {
      render(
        <Modal {...defaultProps}>
          <Modal.Header>
            <Modal.Title>알림</Modal.Title>
          </Modal.Header>
          <div>내용</div>
        </Modal>
      );
      expect(screen.getByText('알림')).toBeInTheDocument();
    });

    it('접근성: aria-labelledby와 aria-describedby가 Content에 연결될 수 있다', () => {
      render(
        <Modal {...defaultProps} aria-labelledby="modal-title" aria-describedby="modal-desc">
          <Modal.Header>
            <Modal.Title id="modal-title">제목</Modal.Title>
          </Modal.Header>
          <Modal.Content id="modal-desc">설명</Modal.Content>
        </Modal>
      );
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
      expect(dialog).toHaveAttribute('aria-describedby', 'modal-desc');
    });
  });
});
