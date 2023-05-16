import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import { ROUTER_PATH } from '@/constants/common'
import { MenuContextType, ToggleMenu } from '@/component/DashboardLayout/dashboard-layout'
import styles from './sideBar.module.scss'

const MENU_ITEMS = [
  {
    link: `${ROUTER_PATH.HOME}`,
    name: 'Home'
  },
  {
    link: `${ROUTER_PATH.EXAMPLE}`,
    name: 'Examples'
  }
]

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
