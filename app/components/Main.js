import React from 'react'
import ReactDOM from 'react-dom'
import MainMenu from './MainMenu'

const Main = ({ children, history }) => {
  var menuItems = {
    items: [
      'Tournaments',
      'Contact',
      'Games'
    ],
  };
  return (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Get Rec'd</a>
        <MainMenu menuItems={menuItems} history={history} />
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
  )
}

export default Main