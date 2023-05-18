import React from 'react'

import { Container, PageContent, Toast, Button } from '@/component'

const Home = () => {
  const handleShowToast = () => {
    Toast('error', 'this is an error toast')
  }

  return (
    <PageContent>
      <Container>
        <h1>Hello</h1>
        <Button onClick={handleShowToast}>Toast</Button>
      </Container>
    </PageContent>
  )
}

export default Home
