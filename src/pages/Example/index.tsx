import React from 'react'

import { Container, PageContent, Typography } from '@/component'
import ModalSection from './ModalSection'
import styles from './example.module.scss'

const Example = () => {
  return (
    <PageContent>
      <Container>
        <div className={styles.content}>
          <ModalSection />
        </div>
      </Container>
    </PageContent>
  )
}

export default Example
