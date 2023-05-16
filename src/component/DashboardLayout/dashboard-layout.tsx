import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { PageContent, Loading, Header } from '@/component'

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <PageContent>
            <Loading />
          </PageContent>
        }
      >
        <Outlet />
      </Suspense>
    </>
  )
}

export default DashboardLayout
