import React, { Suspense, lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { PrivateRoute, DashboardLayout } from '@/component'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// const DashboardLayout = () => (
//   <>
//     <Outlet />
//   </>
// )

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
    </BrowserRouter>
  )
}

export default RoutesComponent
