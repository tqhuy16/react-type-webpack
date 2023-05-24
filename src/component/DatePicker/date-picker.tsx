import React from 'react'
import { DatePicker as AntdDatePicker, Space } from 'antd'
import { Controller } from 'react-hook-form'

import styles from './datePicker.module.scss'

interface IDatePickerProps {
  name: string
  control: any
  label?: string
  placeholder?: string
  isRequired?: boolean
}

const DatePicker = ({ name, control, label, placeholder, isRequired = false, ...rest }: IDatePickerProps) => {
  return (
    <>
      {label && (
        <div className={styles.label}>
          {label}
          {isRequired && <span className='required-field'>*</span>}
        </div>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Space direction='vertical'>
              <AntdDatePicker placeholder='DD/MM/YYYY' onChange={onChange} status={error?.message && 'error'} />
            </Space>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default DatePicker
