import React, { useState, useEffect } from 'react';
import styles from './Upload.module.scss';
import { Plus, X, XCircle } from '@phosphor-icons/react/dist/ssr';

export type FileItem = {
  file: File;
  error?: string | null;
};

type UploadProps = {
  files?: FileItem[];
  onChange?: (files: FileItem[]) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
};

const MAX_FILE_SIZE_KB = 124633;

export const Upload: React.FC<UploadProps> = ({
  files: initialFiles = [],
  onChange,
  accept,
  multiple,
  className,
}) => {
  const [files, setFiles] = useState<FileItem[]>(initialFiles);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const newItems: FileItem[] = selectedFiles.map((file) => {
      const sizeKb = file.size / 1024;
      if (sizeKb > MAX_FILE_SIZE_KB) {
        return {
          file,
          error: `Tamanho máximo ${MAX_FILE_SIZE_KB.toLocaleString()} Kb`,
        };
      }
      return { file };
    });

    const updatedFiles = [...files, ...newItems];
    setFiles(updatedFiles);
    if (onChange) onChange(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
    if (onChange) onChange(updated);
  };

  return (
    <div className={styles.border}>
      <div className={styles.wrapper}>
        <div className={styles.control}>
          <label className={`${styles.button} ${className || ''}`}>
            <Plus size={24} />
            Adicionar arquivo
            <input
              type='file'
              multiple={multiple}
              accept={accept}
              onChange={handleFileChange}
              hidden
            />
          </label>
        </div>
      </div>
      <div className={styles.files}>
        {files.length > 0 && (
          <ul className={styles.fileList}>
            {files.map((item, idx) => (
              <li
                key={idx}
                className={`${styles.fileItem} ${
                  item.error ? styles.errorItem : ''
                }`}
              >
                {item.error ? (
                  <div className={styles.thumbnailError}>
                    <XCircle
                      size={24}
                      className={styles.errorIcon}
                    />
                  </div>
                ) : (
                  <div className={styles.thumbnail} />
                )}
                <div className={styles.fileDetails}>
                  <p className={styles.fileDetailsP}>{item.file.name}</p>
                  {!item.error && (
                    <span className={styles.fileDetailsP}>
                      {Math.round(item.file.size / 1024).toLocaleString(
                        'pt-BR'
                      )}{' '}
                      Kb
                    </span>
                  )}
                  {item.error && (
                    <p className={styles.fileError}>{item.error}</p>
                  )}
                </div>
                <button
                  onClick={() => removeFile(idx)}
                  className={styles.removeFile}
                  aria-label='Remover arquivo'
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Upload;

//  <input
//       type='file'
//       className={`${styles.input} ${className || ''}`}
//       {...props}
//     />
