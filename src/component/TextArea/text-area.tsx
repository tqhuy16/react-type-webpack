import React from 'react'
import { Input as AntInput } from 'antd'
import { Controller } from 'react-hook-form'

import styles from './textArea.module.scss'
import classNames from 'classnames'

interface ITextAreaProps {
  name: string
  control: any
  label?: string
  className?: string
  placeholder?: string
  rows?: number
}

const { TextArea: AntdTextArea } = AntInput

const TextArea = ({ name, control, label, className, placeholder, rows, ...rest }: ITextAreaProps) => {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <AntdTextArea
              status={error?.message && 'error'}
              {...field}
              placeholder={placeholder}
              rows={rows}
              className={classNames(styles.customTextArea, className)}
            />
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default TextArea
