import React from 'react'
import { Controller } from 'react-hook-form'
import { Input as AntInput } from 'antd'
import classNames from 'classnames'

import styles from './inputField.module.scss'

interface IInputFieldProps {
  name: string
  control: any
  className?: string
  label?: string
  placeholder?: string
}

const InputField = ({ name, control, className, label, placeholder, ...rest }: IInputFieldProps) => {
  return (
    <div className={styles.wrapInputField}>
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <AntInput
              status={error?.message && 'error'}
              {...field}
              placeholder={placeholder}
              className={classNames(styles.customInput, className)}
            />
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </div>

    // <div className={styles.wrapInputField}>
    //   {label && <div className={styles.label}>{label}</div>}
    //   <div>
    //     <Input {...field} />
    //     {/* {showError && (
    //       <ErrorMessage name={name}>{(message) => message && <Field.Error message={message} />}</ErrorMessage>
    //     )} */}
    //   </div>
    // </div>
  )
}

export default InputField
