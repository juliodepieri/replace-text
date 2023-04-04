import { useCallback } from 'react';
import { open } from '@tauri-apps/api/dialog';

import {
  UploadLayout,
  Actions,
  CloseButton,
  FileList,
  FileRow,
  FilesArea,
  Title,
} from './styles';
import Button from '../Button';

type Props = {
  disabled?: boolean;
  onFileSelect?: (files: Set<string>) => void;
  onClear?: () => void;
  onRemove?: (deletedFile: string) => void;
  selectedFiles?: Set<string>;
  processedFiles?: Set<string>;
};

const ImportFileArea = ({
  disabled = false,
  onFileSelect = undefined,
  onClear = undefined,
  onRemove = undefined,
  selectedFiles = new Set(),
  processedFiles = new Set(),
}: Props) => {
  const handleFileEvent = useCallback(async () => {
    try {
      const selectedPath = await open({
        title: 'Open CSV Files',
        multiple: true,
        filters: [
          {
            name: 'csv',
            extensions: ['csv'],
          },
        ],
      });
      if (typeof selectedPath === 'string') {
        if (onFileSelect) {
          onFileSelect(new Set([selectedPath]));
        }
      } else if (selectedPath !== null) {
        if (onFileSelect) {
          onFileSelect(new Set(selectedPath));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [onFileSelect]);

  const onFileClear = useCallback(() => {
    if (onClear) {
      onClear();
    }
  }, [onClear]);

  const onFileRemove = useCallback(
    (filePath: string) => {
      if (onRemove) {
        onRemove(filePath);
      }
    },
    [onRemove]
  );

  return (
    <UploadLayout>
      <Title>Choose Files</Title>
      <FilesArea>
        <FileList>
          {[...selectedFiles]?.map((f, i) => (
            <FileRow
              key={i}
              disabled={disabled}
              isProcessed={processedFiles.has(f)}
            >
              <p>{f} </p>
              <CloseButton
                type="button"
                disabled={disabled}
                onClick={(e) => {
                  onFileRemove(f);
                }}
              >
                &times;
              </CloseButton>
            </FileRow>
          ))}
        </FileList>
        <Actions>
          <Button type="button" onClick={handleFileEvent} disabled={disabled}>
            Browse
          </Button>
          <Button type="button" onClick={onFileClear} disabled={disabled}>
            Clear
          </Button>
        </Actions>
      </FilesArea>
    </UploadLayout>
  );
};

export default ImportFileArea;
