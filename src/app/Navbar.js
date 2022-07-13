import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Navbar.module.css'
import {fetchNotifications, selectAllNotifications} from '../features/notifications/notificationsSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)

  const unreadNotifications = notifications.filter(n => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  return (
    <nav className="navbar navbar-expand-sm py-0 d-flex justify-content-center">
      <div className={styles.mainBar}>
        <ul className={`navbar-nav ${styles.linksContainer}`}>
          <Link to="/" className={`${styles.menuItem} ${styles.iconLink}`}>
            <span><i className="bi bi-book"></i></span>
          </Link>
          <Link to="/users" className={`${styles.menuItem} ${styles.iconLink}`}>
            <span><i className="bi bi-people"></i></span>
          </Link >
          <Link to="/notifications" className={`${styles.menuItem} ${styles.iconLink}`}>
            <span><i className="bi bi-inbox"></i></span>
            {unreadNotifications > 0 && <div className={styles.alert}></div>}
          </Link>
        </ul>
        <button type="button" className={`btn btn-link ${styles.menuItem} ${styles.iconBtn}`}
                onClick={fetchNewNotifications}>
          <span><i className="bi bi-bell"></i></span>
        </button>
      </div>
    </nav>
  )
}
