import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { postUpdated, selectPostById } from './postsSlice'

export default function EditPostForm() {
  const { postId } = useParams()
  const history = useHistory()

  const post = useSelector(state => selectPostById(state, postId))
  const dispatch = useDispatch()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const handleTitleChange = event => setTitle(event.target.value)
  const handleContentChange = event => setContent(event.target.value)

  const handleSaveClick = () => {
    if(title && content) {
      const post = {
        id: postId,
        title,
        content
      }
      dispatch(postUpdated(post))
      history.push(`/posts/${postId}`)
    }
  }

  const isFormValid = title && content;

  return (
    <section style={{width: '90%', margin: '40px auto'}}>
      <h4>Edit Post</h4>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="postTitle">Post Title:</label>
              <input
                className="form-control"
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={handleTitleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postContent">Content:</label>
              <textarea
                className="form-control"
                id="postContent"
                name="postContent"
                value={content}
                onChange={handleContentChange}
              />
            </div>

            <button className="btn btn-primary" type="button"
                    onClick={handleSaveClick}
                    disabled={!isFormValid}>
              Edit Post
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
