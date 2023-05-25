import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import { MenuContextType, ToggleMenu } from '@/component/DashboardLayout/dashboard-layout'
import { MENU_ITEMS } from '@/constants/common'
import styles from './sideBar.module.scss'

const SideBar = (): JSX.Element => {
  const MenuContext = useContext<MenuContextType>(ToggleMenu)

  return (
    <div className={classnames(styles.wrapSideBar, MenuContext.isOpenMenu && styles.open)}>
      <div className={styles.surfingBox}>
        <div className={styles.menu}>
          {MENU_ITEMS.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) => classnames(styles.menuItem, isActive && styles.active)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
