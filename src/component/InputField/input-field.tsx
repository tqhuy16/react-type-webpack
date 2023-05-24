import React from 'react'
import { Controller } from 'react-hook-form'
import { Input as AntInput } from 'antd'
import classNames from 'classnames'

import styles from './inputField.module.scss'

interface IInputFieldProps {
  name: string
  control: any
  isPassWord?: boolean
  className?: string
  label?: string
  placeholder?: string
  isRequired?: boolean
}

const InputField = ({
  name,
  control,
  isPassWord = false,
  className,
  label,
  placeholder,
  isRequired = false,
  ...rest
}: IInputFieldProps) => {
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
            <AntInput
              type={isPassWord ? 'password' : undefined}
              status={error?.message && 'error'}
              {...field}
              placeholder={placeholder}
              className={classNames(styles.customInput, className)}
            />
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default InputField
