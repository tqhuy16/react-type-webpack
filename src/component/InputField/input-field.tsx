import React from 'react'
import { Controller } from 'react-hook-form'
import { Input } from 'antd'
import classNames from 'classnames'

import styles from './inputField.module.scss'

interface IInputFieldProps {
  name: string
  control: any
  className?: string
  label?: string
}

const InputField = ({ name, control, className, label, ...rest }: IInputFieldProps) => {
  return (
    <div className={styles.wrapInputField}>
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input {...field} />
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
