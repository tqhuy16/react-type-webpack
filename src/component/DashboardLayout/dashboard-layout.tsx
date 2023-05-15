import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { PageContent, Loading } from '@/component'

const DashboardLayout = () => {
  return (
    <>
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
