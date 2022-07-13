import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams} from 'react-router-dom'

import styles from './SinglePostPage.module.css'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'


export default function SinglePostPage() {
  const { postId } = useParams();

  const post = useSelector(state => selectPostById(state, postId))

  if (!post) {
    return (
      <section className={styles.postContainer}>
        <h4>Post not found! 😥</h4>
      </section>
    )
  }

  return (
    <section className={styles.postContainer}>
      <article className={styles.post}>
        <div className={styles.columnsLayout}>
          <div className={styles.authorSection}>
            <PostAuthor userId={post.user} timestamp={post.date} isSingle/>
            <Link to={`/edit/${post.id}`} className={styles.link}>
              Edit Post
            </Link>
          </div>
          <div className={styles.postSection}>
            <h4>{post.title}</h4>
            <p className={styles.postContent}>{post.content}</p>
            <div className={styles.reactionBtns}>
              <ReactionButtons post={post} />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}