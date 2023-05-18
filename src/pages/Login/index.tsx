import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginStorage } from '@/utils/local-storage'
import { login } from '@/api/auth'
import { LOGIN_ACCESS_TOKEN } from '@/constants/login'
import { Button, Container, PageContent, InputField, Toast } from '@/component'
import { validationLogin } from '@/shared/validation/login-validation'

import styles from './login.module.scss'

const initialValues = {
  userName: '',
  password: ''
}

interface IFormInput {
  userName: string
  password: string
}

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit } = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: initialValues,
    resolver: yupResolver(validationLogin)
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    e?.preventDefault()
    try {
      setLoading(true)
      const { token } = await login(data)
      if (token) {
        loginStorage(LOGIN_ACCESS_TOKEN, token)
        navigate('/')
      }
      return
    } catch (error) {
      Toast('error', error.statusText)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageContent>
      <Container>
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <p className={styles.title}>LOGIN</p>
            <div className={styles.fieldGroup}>
              <InputField label='Username (admin)' name='userName' control={control} />
              <InputField label='Password (123456)' name='password' control={control} />
            </div>
            <div className={styles.actionBox}>
              <Button size='large' type='submit' loading={loading}>
                Login
              </Button>
            </div>

            {/* <Controller
            name='iceCreamType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' }
                ]}
              />
            )}
          /> */}
          </form>
        </div>
      </Container>
    </PageContent>
  )
}

export default Login
