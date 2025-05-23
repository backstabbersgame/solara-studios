import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Upload, { FileItem } from './Upload';

export default {
  title: 'Components/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Upload>;

const createFakeFile = (name: string, sizeInKb: number, type: string): File => {
  const blob = new Blob(['x'.repeat(sizeInKb * 1024)], { type });
  return new File([blob], name, { type });
};

export const Default: StoryFn = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  return (
    <Upload
      files={files}
      accept='.pdf,.png'
      onChange={setFiles}
    />
  );
};

export const WithValidFiles: StoryFn = () => {
  const [files, setFiles] = useState<FileItem[]>([
    {
      file: createFakeFile('contrato.pdf', 1024, 'application/pdf'),
    },
    {
      file: createFakeFile('imagem.png', 2048, 'image/png'),
    },
  ]);

  return (
    <Upload
      files={files}
      accept='.pdf,.png'
      onChange={setFiles}
    />
  );
};

export const WithErrorMessage: StoryFn = () => {
  const [files, setFiles] = useState<FileItem[]>([
    {
      file: createFakeFile('arquivo-valido.pdf', 500, 'application/pdf'),
    },
    {
      file: createFakeFile('arquivo-grande.pdf', 130000, 'application/pdf'),
      error: 'Tamanho máximo 124.633 Kb',
    },
  ]);

  return (
    <Upload
      files={files}
      accept='.pdf,.png'
      onChange={(updated) => setFiles(updated)}
    />
  );
};
