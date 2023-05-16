import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { PageContent, Loading, Header, SideBar } from '@/component'
import styles from './dashBoardLayout.module.scss'

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.horizontalBox}>
        <SideBar />
        <Suspense
          fallback={
            <PageContent>
              <Loading />
            </PageContent>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default DashboardLayout
