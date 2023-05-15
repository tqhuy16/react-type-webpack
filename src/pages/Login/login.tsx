import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginStorage } from '@/utils/local-storage'
import { login } from '@/api/auth'
import { LOGIN_ACCESS_TOKEN } from '@/constants/login'
import { Button, Container, PageContent } from '@/component'
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

  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationLogin)
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { token } = await login(data)
    if (token) {
      loginStorage(LOGIN_ACCESS_TOKEN, token)
      navigate('/')
    }
    return
  }

  return (
    <PageContent>
      <Container>
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <p className={styles.title}>LOGIN</p>
            <div className={styles.fieldGroup}>
              <div>admin</div>
              <Controller name='userName' control={control} render={({ field }) => <input {...field} />} />
              <div>123456</div>
              <Controller name='password' control={control} render={({ field }) => <input {...field} />} />
            </div>
            <div className={styles.actionBox}>
              <Button size='large' type='submit' loading={loading} onClick={onSubmit}>
                Submit
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