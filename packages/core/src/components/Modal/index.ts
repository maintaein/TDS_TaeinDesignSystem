// Compound API (기본) - Modal.Header, Modal.Content 등으로 사용
export { Modal } from './ModalCompound';
export type {
  ModalProps,
  ModalHeaderProps,
  ModalTitleProps,
  ModalContentProps,
  ModalFooterProps,
} from './ModalCompound';

// Base 컴포넌트 (고급 사용자용)
export {
  Modal as ModalRoot,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from './Modal';
