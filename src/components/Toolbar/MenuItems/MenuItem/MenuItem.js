import React from 'react';
import './MenuItem.css'
import { NavLink } from 'react-router-dom'
const MenuItem = (props) => {

    return (
        <li className="MenuItem">
            <a href={props.link.pathname} exact activeClassName="active" activeStyle={{ color: 'red', cursor: 'pointer' }}>
                {props.children}
            </a>
        </li>
    )
}
export default MenuItem