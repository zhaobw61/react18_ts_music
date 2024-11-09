import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Discover() {
  return (
    <div>
      <Link to="/discover/recommend">推荐</Link> |
      <Link to="/discover/ranking">排行榜</Link> |
      <Link to="/discover/songs">歌单</Link> |
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
