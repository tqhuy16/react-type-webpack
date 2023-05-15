import React, { Suspense, lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { PrivateRoute, DashboardLayout, PageContent, Loading } from '@/component'

const Login = lazy(() => import('@/pages/Login/login'))
const Home = lazy(() => import('@/pages/Home/home'))
const NotFound = lazy(() => import('@/pages/NotFound/not-found'))

import styles from './router.module.scss'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <div className={styles.verticalBox}>
        <Suspense
          fallback={
            <PageContent>
              <Loading />
            </PageContent>
          }
        >
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
              element={
                <PrivateRoute redirect='/login'>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              {/* Pages need login to access should put in here */}
              <Route index element={<Home />} />
              {/* <Route path="/examples" element={<div>Examples</div>} /> */}
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default RoutesComponent
