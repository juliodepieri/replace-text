import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { invoke } from '@tauri-apps/api/tauri';
import { appWindow } from '@tauri-apps/api/window';

import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container, Form, Actions, Content } from './styles';
import ImportFileArea from '../../components/ImportFileArea';
import Button from '../../components/Button';

export type FormValues = {
  oldWord?: string;
  newWord?: string;
};

type ProgressPayload = {
  processed: string[];
};

const schema = Yup.object().shape({
  oldWord: Yup.string().required('Old Word is required'),
  newWord: Yup.string().required('New Word is required'),
});

const ReplaceWord = () => {
  const [executing, setExecuting] = useState<boolean>(false);
  const [filesSelected, setFilesSelected] = useState<Set<string>>(new Set());
  const [processedFiles, setProcessedFiles] = useState<Set<string>>(new Set());
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      oldWord: '',
      newWord: '',
    },
    resolver: yupResolver(schema, { abortEarly: false }),
  });

  const onFileSelect = useCallback(async (files: Set<string>) => {
    setFilesSelected(files);
  }, []);

  const onFilesClear = useCallback(async () => {
    setFilesSelected(new Set());
  }, []);

  const onFileRemove = useCallback(async (deletedFile: string) => {
    setFilesSelected((files) => {
      files.delete(deletedFile);
      return new Set([...files]);
    });
  }, []);

  const onSubmit = useCallback(
    async (data: FormValues) => {
      if (filesSelected?.size <= 0) {
        addToast({
          type: 'error',
          title: 'Error',
          description: 'Please choose a file',
        });
        return;
      }

      const listenProgress = await appWindow.listen<ProgressPayload>(
        'FILE_REPLACE_WORD_PROGRESS',
        ({ event, payload }) => {
          setProcessedFiles(new Set(payload.processed));
        }
      );

      setExecuting(true);
      invoke('change_word', {
        filePaths: [...filesSelected],
        oldWord: data.oldWord,
        newWord: data.newWord,
      })
        .then((result) => {
          if (Array.isArray(result)) {
            setFilesSelected(new Set(result));
          }
          addToast({
            type: 'success',
            title: 'success',
            description: 'process completed',
          });
        })
        .catch((e) => {
          addToast({
            type: 'error',
            title: 'Error',
            description: e,
          });
        })
        .finally(() => {
          setExecuting(false);
          setProcessedFiles(new Set());
          listenProgress();
        });
    },
    [addToast, filesSelected]
  );

  return (
    <DefaultLayout>
      <Container id="container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <Input
              {...register('oldWord')}
              type="text"
              error={errors.oldWord?.message}
              placeholder="old Word"
              label="Old Word"
              disabled={executing}
            ></Input>
            <Input
              {...register('newWord')}
              type="text"
              error={errors.newWord?.message}
              placeholder="new Word"
              label="New Word"
              disabled={executing}
            ></Input>
          </Content>

          <ImportFileArea
            onFileSelect={onFileSelect}
            onClear={onFilesClear}
            onRemove={onFileRemove}
            selectedFiles={filesSelected}
            processedFiles={processedFiles}
            disabled={executing}
          />
          <Actions>
            <Button type="submit" disabled={executing} isLoading={executing}>
              Execute
            </Button>
          </Actions>
        </Form>
      </Container>
      {/* <ReactTooltip effect="solid" /> */}
    </DefaultLayout>
  );
};

export default ReplaceWord;
