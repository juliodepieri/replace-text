import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const UploadLayout = styled.div`
  display: flex;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.inputText};
`;

export const FilesArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
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
  gap: 4px;
  align-items: center;
  align-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.inputText};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  height: 100%;
  width: 100%;
`;

export const FileRow = styled.div<{ disabled: boolean; isProcessed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.inputText};
  background: none;
  padding: 4px;
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

export const Actions = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 8px;
  width: 100%;
`;

export default UploadLayout;
