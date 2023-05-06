import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { loginStorage } from '@/utils/local-storage'
import { login } from '@/api/auth'
import { LOGIN_ACCESS_TOKEN } from '@/constants/login'

const Login = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const { token } = await login({ userName, password })

    if (token) {
      loginStorage(LOGIN_ACCESS_TOKEN, token)
      navigate('/')
    }
    return
  }

  return (
    <form onSubmit={handleLogin}>
      <label>First name:(admin)</label>
      <br />
      <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
      <br />
      <label>Last name:(123456)</label>
      <br />
      <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Login
