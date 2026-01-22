import {
  Modal as ModalRoot,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
  type ModalProps,
  type ModalHeaderProps,
  type ModalTitleProps,
  type ModalContentProps,
  type ModalFooterProps,
} from './Modal';

// Compound API: Modal.Header, Modal.Content 등으로 사용
export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Title: ModalTitle,
  Content: ModalContent,
  Footer: ModalFooter,
});

// 타입 export
export type {
  ModalProps,
  ModalHeaderProps,
  ModalTitleProps,
  ModalContentProps,
  ModalFooterProps,
};
