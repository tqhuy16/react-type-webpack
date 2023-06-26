import React, { useEffect, useState } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { isEqual } from 'lodash'

import { FileUploadType } from '@/types/global'
import styles from './uploadImage.module.scss'

interface IUploadImageProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label?: string
  className?: string
  maxFiles?: number
  isRequired?: boolean
  accept?: string
  value?: FileUploadType[]
}

const UploadImage = <T extends FieldValues>({
  name,
  control,
  label,
  className,
  maxFiles = 1,
  isRequired = false,
  accept = 'image/gif, image/png, image/jpeg',
  value,
  ...rest
}: IUploadImageProps<T>) => {
  const [images, setImages] = useState<FileUploadType[]>(value || [])

  const handleImageChange = (filesReceived: File[]) => {
    const [...uploadedFiles] = filesReceived
    const filesUploaded: FileUploadType[] = uploadedFiles.map((file) => {
      const newFile: FileUploadType = {
        urlPreview: window.URL.createObjectURL(file),
        name: file.name,
        file
      }

      return newFile
    })

    const allFiles = [...images, ...filesUploaded]

    if (allFiles.length > maxFiles) return

    const filesLimit = [...images, ...filesUploaded].splice(0, maxFiles)

    setImages(filesLimit)
  }

  console.log('images', images)

  const handleDeleteImage = (indexImage: number) => {
    const newFiles = images.filter((_, index) => index !== indexImage)
    setImages(newFiles)
  }

  return (
    <>
      {label && (
        <div className={styles.label}>
          {label}
          {isRequired && <span className='required-field'>*</span>}
        </div>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className={styles.groupImagesUpload}>
              {images.map((image, index) => (
                <div className={styles.imagePreview} key={index}>
                  <div className={styles.customDelete}>
                    <div className={styles.textDelete} onClick={() => handleDeleteImage(index)}>
                      Delete
                    </div>
                  </div>
                  <img src={image.urlPreview} alt='uploaded image' />
                </div>
              ))}
              <input
                className={styles.inputImage}
                id='img'
                type='file'
                accept={accept}
                multiple
                value={field.value}
                onChange={(e) => handleImageChange((e.target.files ?? []) as File[])}
              />
              <label htmlFor='img' className={styles.buttonUpload}>
                <div className={styles.textUpload}>
                  <div>+ Upload</div>
                  <div>max {maxFiles} file(s)</div>
                </div>
              </label>
            </div>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default UploadImage
