import React from 'react'
import moment from 'moment'
const Article = ({item}) => {
  return (
    <div className="article">
      <div className="article_title">{item.title}</div>
      <div className="article_time">{moment(item.date).format("dddd Do, YYYY")}&ensp;{item.length} min read</div>
      <div className="article_snippet">{item.snippet}</div>
    </div>
  )
}

export default Article
