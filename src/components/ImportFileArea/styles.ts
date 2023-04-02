import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const UploadLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;

  h3 {
    color: ${(props) => props.theme.inputText};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  align-content: center;
  margin-top: 16px;

  button {
    cursor: pointer;
    padding: 10px 25px 10px 25px;
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 10px;
    color: ${(props) => props.theme.primary};
    background: transparent;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      box-shadow: 0 0 8px ${(props) => props.theme.primary};
    }

    :disabled {
      box-shadow: none;
      color: ${(props) => props.theme.textDisable};
      border: 1px solid ${(props) => props.theme.inputDisabled};
    }
  }
`;

export const FilesArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px dashed ${(props) => props.theme.inputText};
  border-radius: 10px;
  padding: 5px;
`;

export const CloseButton = styled.button`
  color: ${(props) => props.theme.textDisable};
  font-size: 18px;
  font-weight: bold;
  background: none;
  border: 0;
  margin-right: 4px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    cursor: pointer;
  }
`;
export const FileList = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  align-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.inputText};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  height: 100%;
  width: 100%;
`;

export const FileRow = styled.div<{ disabled: boolean; isProcessed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.inputText};
  background: none;
  padding: 6px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.inputBorder};

  &:hover,
  &:focus {
    border-color: ${(props) => (props.disabled ? 'none' : props.theme.primary)};
  }

  ${(props) =>
    props.isProcessed &&
    css`
      border: 1px solid ${(props) => props.theme.success};
      background-color: ${(props) => darken(0.15, props.theme.success)};
    `}
`;

export default UploadLayout;
