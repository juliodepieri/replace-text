import styled, { keyframes } from 'styled-components';

const animateSpin = keyframes`
  0% {
    transform:rotate(0deg)
  }

  100% {
    transform:rotate(360deg)
  }
`;

export const StylizedButton = styled.button`
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  color: ${(props) => props.theme.primary};
  background: transparent;
  transition: color 0.2s;

  &:hover {
    box-shadow: 0 0 8px ${(props) => props.theme.primary};
  }

  svg {
    animation: ${animateSpin} infinite linear 0.5s;
  }

  :disabled {
    box-shadow: none;
    color: ${(props) => props.theme.textDisable};
    border: 1px solid ${(props) => props.theme.inputDisabled};
  }
`;

export default StylizedButton;
