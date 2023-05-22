import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import type { RadioChangeEvent } from 'antd'
import { Radio as AntdRadio } from 'antd'

import { Option } from '@/types/global'
import styles from './radio.module.scss'

interface IRadioProps {
  options: Option[]
  name: string
  control: any
  label?: string
}

const Radio = ({ options, name, control, label, ...rest }: IRadioProps) => {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <AntdRadio.Group {...rest} value={value} onChange={(e: RadioChangeEvent) => onChange(e.target.value)}>
              {options.map((op: Option, index: number) => (
                <AntdRadio key={index} value={op.value}>
                  {op.name}
                </AntdRadio>
              ))}
            </AntdRadio.Group>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default Radio
