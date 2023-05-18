import React, { useRef } from 'react'

import { Button, Modal } from '@/component'
import styles from './modalSection.module.scss'

const ModalSection = (): JSX.Element => {
  const confirmBoxRef = useRef<any>()

  return (
    <div className='example-section'>
      <div className='section-title'>Modal</div>
      <div className='section-body'>
        <div className={styles.wrapButton}>
          <Button>Open Modal</Button>
          <Button onClick={() => confirmBoxRef.current?.showModal()}>Show confirm box</Button>
        </div>
      </div>

      <Modal title='Hello!' ref={confirmBoxRef}>
        <p>Are you sure to delete a record</p>
      </Modal>
    </div>
  )
}

export default ModalSection
