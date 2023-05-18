import React from 'react'

import { Container, PageContent, Typography } from '@/component'
import ModalsSection from './ModalsSection/modals-section'
import ToastsSection from './ToastsSection/toasts-section'
import ButtonsSection from './ButtonsSection/buttons-section'
import TypographiesSection from './TypographiesSection/typographies-section'
import styles from './example.module.scss'

const Example = () => {
  return (
    <PageContent>
      <Container>
        <div className={styles.content}>
          <TypographiesSection />
          <ButtonsSection />
          <ModalsSection />
          <ToastsSection />
        </div>
      </Container>
    </PageContent>
  )
}

export default Example
