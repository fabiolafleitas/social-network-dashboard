import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'

import styles from './NotificationsList.module.css'
import { selectAllUsers } from '../users/usersSlice'
import { selectAllNotifications, allNotificationsRead } from './notificationsSlice'

export default function NotificationsList() {
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map(notification => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find(user => user.id === notification.user) || {
      name: 'Unknown User'
    }

    return (
      <div key={notification.id} className={styles.notification}>
        <div>
          {notification.isNew && <div className={styles.new}></div>}
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date} className="text-muted">
          <small>{timeAgo} ago</small>
        </div>
      </div>
    )
  })

  return (
    <section className={styles.notificationsList}>
      <h4>Notifications</h4>
      {renderedNotifications.length === 0 && <p>No new notifications here 😥</p>}
      {renderedNotifications}
    </section>
  )
}