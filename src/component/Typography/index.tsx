import React from 'react'
import classnames from 'classnames'

// import * as styles from './typography.module.scss'

interface IProps {
  className?: string
  size?: string
  link?: boolean
  primary?: boolean
  secondary?: boolean
  underline?: boolean
  center?: boolean
  bold?: boolean
  children: React.ReactNode
  style?: any
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
  ...props
}: IProps): JSX.Element => {
  return (
    <div
      className={classnames(
        size || '',
        {
          link,
          underline,
          primary,
          secondary,
          center
        },
        'typography',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Typography
