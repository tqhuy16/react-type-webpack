import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { exampleFormValidation } from '@/shared/validation/example-form-validation'
import { Button, DatePicker, InputField, Radio, Select } from '@/component'
import { OPTIONS_GENDER, SELECT_POSITIONS } from '@/shared/fake/data-global'
import { DATE_FORMAT_LIST } from '@/constants/common'
import styles from './formSection.module.scss'

const initialValues = {
  firstName: '',
  lastName: '',
  firstAddress: '',
  secondAddress: '',
  gender: undefined,
  dateOfBirth: '',
  phone: '',
  email: '',
  position: ''
}

interface IFormInput {
  firstName: string
  lastName: string
  firstAddress: string
  secondAddress: string
  gender: number
  dateOfBirth: string
  phone: string
  email: string
  position: string
}

const FormSection = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: initialValues,
    resolver: yupResolver(exampleFormValidation)
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    e?.preventDefault()
    try {
      setIsLoading(true)
      console.log('data', data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='example-section'>
      <div className='section-title'>Form Field</div>
      <div className='section-body'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <InputField label='First Name' name='firstName' control={control} placeholder='First Name' />
                <InputField label='LastName' name='lastName' control={control} placeholder='Last Name' />
              </div>
              <div className={styles.fieldGroup}>
                <InputField label='Address 1' name='firstAddress' control={control} placeholder='Address 1' />
                <InputField label='Address 2' name='secondAddress' control={control} placeholder='Address 1' />
              </div>
            </div>

            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <Radio label='Gender' name='gender' control={control} options={OPTIONS_GENDER} />
              </div>
              <div className={styles.fieldGroup}>
                <DatePicker
                  placeholder={DATE_FORMAT_LIST[0]}
                  label='Date of Birth'
                  name='dateOfBirth'
                  control={control}
                />
              </div>
            </div>

            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <InputField label='Phone' name='phone' control={control} />
              </div>
              <div className={styles.fieldGroup}>
                <InputField label='Email' name='email' control={control} placeholder='example@gmail.com' />
              </div>
            </div>

            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <Select
                  label='Position'
                  name='position'
                  control={control}
                  options={SELECT_POSITIONS}
                  placeholder='Please select an option'
                />
              </div>
              <div className={styles.fieldGroup}></div>
            </div>

            <Button size='large' type='submit' loading={isLoading}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSection
