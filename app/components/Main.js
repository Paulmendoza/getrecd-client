import React from 'react'
import MainMenu from './MainMenu'

const Main = ({ children, history }) => {
  var menuItems = {
    items: [
    'Tournaments',
    'Contact'],
  };
  return (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Get Rec'd</a>
        <MainMenu menuItems={menuItems} history={history} />
      </div>
    </nav>
    <div>
      {children}
    </div>
  </div>
  )
}

export default Main