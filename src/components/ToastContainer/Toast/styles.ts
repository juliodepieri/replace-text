import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  $type?: 'success' | 'error' | 'info';
  $hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: ${(props) => props.theme.backgroundLighter};
    color: ${(props) => props.theme.info};
  `,
  success: css`
    background: ${(props) => props.theme.backgroundLighter};
    color: ${(props) => props.theme.success};
  `,
  error: css`
    background: ${(props) => props.theme.backgroundLighter};
    color: ${(props) => props.theme.error};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.primary};
  box-shadow: 0 0 8px ${(props) => props.theme.primary};
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.$type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.$hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

export default Container;
