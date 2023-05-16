import React from 'react'
import { Popover } from 'antd'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'

import { logoutStorage } from '@/utils/local-storage'
import { LOGIN_ACCESS_TOKEN } from '@/constants/login'
import { Clickable } from '@/component'
import styles from './header.module.scss'

const Header = () => {
  const navigate = useNavigate()

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    logoutStorage(LOGIN_ACCESS_TOKEN)
    navigate('/login')
  }

  const toggleSideBar = () => {
    console.log('toogle')
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.content}>
        <div className={styles.leftBox}>
          <Clickable className={styles.menuButton} onClick={toggleSideBar}>
            <div />
            <div />
            <div />
          </Clickable>
          <p className={styles.title}>React JS Boilerplate </p>
        </div>
        <div className={styles.rightBox}>
          <Popover
            content={
              <a href='/' onClick={onLogout}>
                Logout
              </a>
            }
            trigger='click'
          >
            <div className={styles.userBox}>
              <img className={styles.avatar} src='https://picsum.photos/300' alt='' />
              <p className='name'>huytq</p>
            </div>
          </Popover>
          <div className={styles.languageBox}>
            {['en', 'vi'].map((item) => (
              <Clickable
                key={item}
                className={classnames(styles.languageButton, { active: true })}
                // onClick={() => i18n.changeLanguage(item)}
                onClick={() => console.log('langueage')}
              >
                {item.toUpperCase()}
              </Clickable>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
