import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './Post.module.css'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import { selectPostById } from './postsSlice'

export default function Post(props) {
  const { postId } = props
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article className="card">
      <div className="card-body">
        <div className={styles.header}>
          <h4>{post.title}</h4>
          <span>#{post.id}</span>
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <PostAuthor userId={post.user} timestamp={post.date}/>
        <div className={styles.footer}>
          <Link to={`/posts/${post.id}`} className={styles.link}>
            View Post
          </Link>
          <ReactionButtons post={post} />
        </div>
      </div>
    </article>
  );
}