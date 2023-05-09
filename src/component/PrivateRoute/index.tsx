import React from 'react'
import { Navigate } from 'react-router-dom'

import { LOGIN_ACCESS_TOKEN } from '@/constants/login'

interface PrivateRouteProps {
  redirect: string
  children: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { redirect, children } = props

  const accessToken = window.localStorage.getItem(LOGIN_ACCESS_TOKEN)
  if (accessToken) return children
  return <Navigate to={redirect} />
}

export default PrivateRoute
