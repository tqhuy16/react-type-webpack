import React from 'react'

import { Container, PageContent } from '@/component'
import TypographiesSection from './TypographiesSection/typographies-section'
import ButtonsSection from './ButtonsSection/buttons-section'
import TableSection from './TableSection/table-section'
import ModalsSection from './ModalsSection/modals-section'
import ToastsSection from './ToastsSection/toasts-section'

import styles from './example.module.scss'

const Example = () => {
  return (
    <PageContent>
      <Container>
        <div className={styles.content}>
          <TypographiesSection />
          <ButtonsSection />
          <TableSection />
          <ModalsSection />
          <ToastsSection />
        </div>
      </Container>
    </PageContent>
  )
}

export default Example
