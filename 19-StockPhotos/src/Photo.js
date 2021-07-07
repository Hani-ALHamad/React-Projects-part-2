import React from 'react'

const Photo = ({item, index}) => {
  return (
    <div className="item">
      <img className="img" src={item.urls.regular} alt={item.alt_description} />
      <div className="details_container">
        <div>
          <div className="name">{item.user.first_name} {item.user.last_name}</div>
          <div className="likes">{item.likes} likes</div>
        </div>
        <a href={item.user.portfolio_url} className="avatar_link"><img className="avatar" src={item.user.profile_image.medium} alt="avatar" /></a>
      </div>
    </div>
  )
}

export default Photo
