import React from 'react'

const MainMenu = ({menuItems, active}) => {
    return (
        <ul className="nav navbar-nav">
            {menuItems.map((item, index) => <li key={index}><a href={`#${item}`}>{item}</a></li>)}
        </ul>
    )
}

MainMenu.propTypes = {
    menuItems: React.PropTypes.array.isRequired,
    active: React.PropTypes.string.isRequired
}

export default MainMenu