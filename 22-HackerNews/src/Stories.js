import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {data, handleRemove} = useGlobalContext()

  if(data.isLoading){
    return <div className="loading" />
  }
  return (
    <div id="stories">
      {data.stories.map((item) =>(
        <div className="story" key={item.objectID}>
          <div className="story_title">{item.title}</div>
          <div className="story_text">{item.points} points by {item.author} | {item.num_comments} comments</div>
          <div className="story_buttons_box">
            <a className="story_read_more" href={item.url} target="_blank" rel="noreferrer">Read More</a>
            <button className="story_remove_button" onClick={() => handleRemove(item.objectID)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stories
