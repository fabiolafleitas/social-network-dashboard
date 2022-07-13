import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export default function TimeAgo({ timestamp }) {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp} className="text-muted">
      <small>{timeAgo}</small>
    </span>
  )
}