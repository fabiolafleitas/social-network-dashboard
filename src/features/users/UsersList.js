import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './UsersList.module.css'
import Avatar from '../../components/Avatar'
import { selectAllUsers } from './usersSlice'

export default function UsersList() {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map(user => (
    <Link key={user.id} to={`/users/${user.id}`}>
      <Avatar user={user}/>
    </Link>
  ))

  return (
    <div className={styles.avatars}>
      { renderedUsers }
    </div>
  )
}