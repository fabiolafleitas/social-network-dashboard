import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './PostsList.module.css'
import { fetchPosts, selectPostsIds } from './postsSlice'
import Post from './Post'

export default function PostsList() {
  const dispatch = useDispatch()
  const postsIds = useSelector(selectPostsIds)
  const status = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  let content

  if(status === 'loading') {
    content = <p>Loading posts...</p>
  }else if (status === 'succeeded') {
    content = postsIds.map(postId => (
      <Post key={postId} postId={postId} />
    ))
  }else if(status === 'failed') {
    content = <div>{error}</div>
  }



  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <div className={styles.postsContainer}>
        {content}
      </div>
    </section>
  );
}