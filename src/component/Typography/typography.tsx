import React from 'react'
import classnames from 'classnames'

import styles from './typography.module.scss'
type TypeSize = 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'giant' | 'enormous'
interface IProps {
  className?: string
  size?: TypeSize
  link?: boolean
  primary?: boolean
  secondary?: boolean
  underline?: boolean
  center?: boolean
  // bold?: boolean
  children: React.ReactNode
  // style?: any
}

const Typography = ({
  className,
  children,
  link,
  underline,
  primary,
  secondary,
  center,
  size,
  ...rest
}: IProps): JSX.Element => {
  return (
    <div
      className={classnames(
        size,
        {
          link,
          underline,
          primary,
          secondary,
          center
        },
        styles.typography,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Typography
