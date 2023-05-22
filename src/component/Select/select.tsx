import React from 'react'
import { Controller } from 'react-hook-form'
import { Select as AntdSelect } from 'antd'

import { SelectOption } from '@/types/global'
import styles from './select.module.scss'

interface ISelectProps {
  options: SelectOption[]
  name: string
  control: any
  label?: string
  placeholder?: string
}

const Select = ({ options, name, control, label, placeholder, ...rest }: ISelectProps) => {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <AntdSelect
              className={styles.select}
              showSearch
              allowClear={true}
              defaultValue={value}
              status={error?.message && 'error'}
              onChange={(e: string) => onChange(e)}
              options={options}
            ></AntdSelect>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default Select
