import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, PageContent, Loading } from '@/component'

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <PageContent>
      <Container>
        <h1>{t('hello')}</h1>
        <Loading />
      </Container>
    </PageContent>
  )
}

export default Home
