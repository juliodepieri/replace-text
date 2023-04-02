import { lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isDisabled: boolean;
}

interface LabelProps {
  isFocused: boolean;
  isFilled: boolean;
  isDisabled: boolean;
}

export const Container = styled.div`
  margin: 4px 0 0 0;
  padding: 0;
  width: 100%;
`;

export const Content = styled.div<ContainerProps>`
  background: ${(props) =>
    props.isDisabled
      ? lighten(0.1, props.theme.inputBackground)
      : props.theme.inputBackground};
  border-radius: 10px;
  /* padding: 16px 0 16px 16px; */
  width: 100%;

  border: 2px solid ${(props) => props.theme.inputBorder};
  color: ${(props) => props.theme.inputDisabled};

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    !props.isDisabled &&
    css`
      border-color: ${props.theme.error};
    `}

  ${(props) =>
    props.isFocused &&
    !props.isDisabled &&
    css`
      color: ${props.theme.primary};
      border-color: ${props.theme.primary};
    `}

  ${(props) =>
    props.isFilled &&
    !props.isDisabled &&
    css`
      color: ${props.theme.primary};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.inputText};
    padding: 16px 0 16px 16px;

    &::placeholder {
      color: ${(props) => props.theme.inputDisabled};
    }

    :disabled {
      color: ${(props) => props.theme.inputDisabled};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const ErrorMsg = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  margin-right: 6px;

  svg {
    margin: 0;
  }

  span {
    background: ${(props) => props.theme.error};
    color: ${(props) => props.theme.text};

    &::before {
      border-color: ${(props) => props.theme.error} transparent;
    }
  }
`;

const animatetop = (props: any) => keyframes`
  0% {
    margin-top: 0;
    font-size: 16px;
    color: ${props.theme.textDisable};
    opacity: 0;
  }

  100% {
    margin-top: -16px;
    font-size: 12px;
    color: ${props.theme.primary};
    opacity: 1;
  }
`;

export const Label = styled.label<LabelProps>`
  display: ${(props) => (props.isFocused || props.isFilled ? 'block' : 'none')};
  position: absolute;
  font-size: 12px;
  color: ${(props) =>
    props.isDisabled ? props.theme.textDisable : props.theme.primary};
  margin: -16px 0 0 10px;
  padding: 0;
  animation: ${animatetop} 0.5s;
`;
