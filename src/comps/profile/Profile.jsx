import React from 'react'
import MyPostContainer from './MyPosts/MyPostContainer'
import p from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'

export default function Profile() {

  return (
    <div className={p.content}>
      <div>
        <ProfileInfo />
        <MyPostContainer/>
      </div>

    </div>
  )
}
