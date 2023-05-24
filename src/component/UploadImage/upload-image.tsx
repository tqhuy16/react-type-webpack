import React, { useState } from 'react'
import { Upload } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { Controller } from 'react-hook-form'

import styles from './uploadImage.module.scss'

interface IUploadImageProps {
  name: string
  control: any
  label?: string
  className?: string
}

const UploadImage = ({ name, control, label, className, ...rest }: IUploadImageProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    console.log('newFileList', newFileList)
    setFileList(newFileList)
  }

  const propsImage: UploadProps = {
    // onRemove: (file) => {
    //   const index = fileList.indexOf(file)
    //   const newFileList = fileList.slice()
    //   newFileList.splice(index, 1)
    //   setFileList(newFileList)
    // },
    beforeUpload: (file) => {
      setFileList([...fileList, file])

      return false
    },
    fileList
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Upload
              {...propsImage}
              //   accept='image/png, image/jpeg'
              //   action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              maxCount={3}
              defaultFileList={[...fileList]}
            >
              {fileList.length < 3 && `+ Upload`}
            </Upload>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default UploadImage
