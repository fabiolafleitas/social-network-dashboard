import React from 'react'
import styles from './Avatar.module.css';

export default function Avatar({ user, isSmall, isSingle }) {
  const { name, image } = user

  const sizeClasses = isSmall ? `${styles.small}` : `${styles.large} ${styles.link}`

  const imgSource = isSingle ? '../' : './'

  return (
    <div className={`${styles.avatar} ${sizeClasses}`}>
      <img src={`${imgSource}avatars/avataaars${image}.svg`} alt={`${name} avatar`}/>
    </div>
  )
}