import React from 'react'
import MainMenu from './MainMenu'

const Main = () => {
  var menu = [
    'Tournaments',
    'About',
    'Contact'
  ]
  return (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Get Rec'd</a>
        <MainMenu menuItems={menu} active={''} />
      </div>
    </nav>
  </div>
  )
}

export default Main