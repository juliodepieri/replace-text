import styled, { keyframes, css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

interface ContentProps {
  customStyles: string;
}

const animatetop = keyframes`
  0% {
    top: 0%;
    opacity: 0;
  }

  100% {
    top: 50%;
    opacity: 1;
  }
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const ModalContent = styled.div<ContentProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  z-index: 1;
  background-color: ${(props) => props.theme.backgroundDarker};

  min-height: 50px;
  padding: 0;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.primary};
  box-shadow: 0 0 8px ${(props) => props.theme.primary};

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles};
    `}

  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  animation: ${animatetop} 0.4s;
`;

export const ModalHeader = styled.div`
  padding: 0 8px;
  color: white;
  height: 30px;
  text-align: right;
`;

export const ModalBody = styled.div`
  padding: 10px 15px 15px;
`;

export const CloseButton = styled.button`
  color: ${(props) => props.theme.textDisable};
  font-size: 28px;
  font-weight: bold;
  background: none;
  border: 0;
  margin: 2px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    cursor: pointer;
  }
`;
