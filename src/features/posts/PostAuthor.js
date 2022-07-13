import React from 'react'
import { useSelector } from 'react-redux'

import styles from './PostAuthor.module.css'
import Avatar from '../../components/Avatar'
import TimeAgo from "./TimeAgo";
import { selectUserById } from '../users/usersSlice'

export default function PostAuthor({ userId, timestamp, isSingle }) {
  const author = useSelector(state => selectUserById(state, userId))

  return <div className={styles.authorContainer}>
    {author && <Avatar user={author} isSmall isSingle/>}
    <div className={styles.info}>
      <span title="author">{author ? author.name : 'Unknown author'}</span>
      <TimeAgo timestamp={timestamp} />
    </div>
  </div>
}
