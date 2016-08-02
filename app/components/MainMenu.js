import React from 'react';
import { Link } from 'react-router';

const MainMenu = ({menuItems}) => {
    return (
        <ul className="nav navbar-nav">
            {menuItems.items.map((item, index) => 
            <li key={index}>
                <Link to={`/${item}`} activeClassName="active">{item}</Link>
            </li>)}
        </ul>    
    );
}
    
MainMenu.propTypes = {
    menuItems: React.PropTypes.object.isRequired,
}

export default MainMenu;