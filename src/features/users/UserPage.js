import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './UserPage.module.css'
import { selectUserById } from './usersSlice'
import { selectPostsByUser } from '../posts/postsSlice'

export default function UserPage() {
  const { userId } = useParams()
  const user = useSelector(state => selectUserById(state, userId))
  const postsForUser = useSelector(state => selectPostsByUser(state, userId))

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section className={styles.postListContainer}>
      <span>Posts by </span><h4>{user.name}</h4>
      <ul>{postTitles}</ul>
    </section>
  )
}