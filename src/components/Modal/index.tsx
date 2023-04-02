import React from 'react';
import {
  Container,
  ModalHeader,
  ModalBody,
  CloseButton,
  ModalContent,
} from './styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  customStyles?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  customStyles = undefined,
}: Props) => {
  return (
    <Container isOpen={isOpen}>
      <ModalContent customStyles={customStyles || ''}>
        <ModalHeader>
          <CloseButton
            onClick={() => {
              onClose();
            }}
          >
            &times;
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Container>
  );
};

export default Modal;
