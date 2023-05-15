import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { PageContent } from '@/component'

const DashboardLayout = () => {
  return (
    <>
      <Suspense
        fallback={
          <PageContent>
            <div>Loading...</div>
          </PageContent>
        }
      >
        <Outlet />
      </Suspense>
    </>
  )
}

export default DashboardLayout
