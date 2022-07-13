import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './ReactionButtons.module.css'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🔥',
  heart: '❤️'
}

export default function ReactionButtons({ post }) {
  const dispatch = useDispatch()

  const handleReactionClick = reaction => {
    dispatch(reactionAdded({id:post.id, reaction:reaction}))

  }

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className={styles.reactionBtn}
              onClick={() => handleReactionClick(name)}>
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}