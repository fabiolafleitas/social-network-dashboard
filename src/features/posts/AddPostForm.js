import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewPost } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

export default function AddPostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)

  const handleTitleChange = event => setTitle(event.target.value)
  const handleContentChange = event => setContent(event.target.value)
  const handleAuthorChange = event => setUserId(event.target.value)

  const canSave = title && content && userId && addRequestStatus === 'idle'

  const handleSaveClick = async event => {
    event.preventDefault()
    if(canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({title, content, user:userId})).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      }catch (error) {
        console.log('Failed to save the post: ', error)
      }finally {
       setAddRequestStatus('idle')
      }
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section style={{width: '90%', margin: '40px auto'}}>
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
              <label htmlFor="postAuthor">Author:</label>
              <select className="form-control"
                      id="postAuthor"
                      value={userId}
                      onChange={handleAuthorChange}>
                <option value=""></option>
                {usersOptions}
              </select>
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
                    disabled={!canSave}>
              Save Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}