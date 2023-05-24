import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Checkbox as AntdCheckbox } from 'antd'

import styles from './checkbox.module.scss'

interface ICheckboxProps {
  name: string
  control: any
  options: string[]
  label?: string
  className?: string
  isRequired?: boolean
}

const Checkbox = ({ name, control, options, label, className, isRequired = false, ...rest }: ICheckboxProps) => {
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
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <AntdCheckbox.Group options={options} onChange={onChange} />
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default Checkbox
