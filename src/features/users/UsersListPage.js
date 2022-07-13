import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './UsersListPage.module.css'
import { selectAllUsers } from './usersSlice'

export default function UsersListPage() {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <div className="card">
        <div className="card-body d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row align-items-center">
            <img src={`./avatars/avataaars${user.image}.svg`} className="card-img-top" alt={user.name} />
            <div>
              <h6 className="card-title">{user.name}</h6>
              <small className="card-subtitle mb-2">{user.username}</small>
              <br />
              <small className="card-subtitle mb-2 text-muted">{user.id}</small>
            </div>
          </div>
          <Link to={`/users/${user.id}`} className="btn btn-primary">
            Check Posts
          </Link>
        </div>
      </div>
    </li>
  ))

  return (
    <section className={styles.usersContainer}>
      <ul className={styles.usersList}>{renderedUsers}</ul>
    </section>
  )
}