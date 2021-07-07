import React from 'react'

const Follower = ({item}) => {
  return (
    <div className="follower_box">
      <img className="follower_img" src={item.avatar_url} alt={item.login} />
      <div className="follower_login">{item.login}</div>
      <a className="follower_button" href={item.html_url}>view profile</a>
    </div>
  )
}

export default Follower
