import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Modal as ConfirmModal } from 'antd'

interface IModalProps {
  children: React.ReactNode
  title?: string
}

const ConfirmBox = forwardRef(({ children, title, ...props }: IModalProps, ref: any) => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        showModal: () => setOpen(true)
      }
    },
    []
  )

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <ConfirmModal title={title} open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <p>{children}</p>
    </ConfirmModal>
  )
})

export default ConfirmBox
