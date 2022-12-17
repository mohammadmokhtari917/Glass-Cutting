import React from 'react';
import './Toolbar.css';
import MenuItems from './MenuItems/MenuItems';

const Toolbar = (props)=>{
    return(
        <header className="Toolbar">
            <span className="showNav">
                <nav>
                    <MenuItems />
                </nav>
            </span>      
        </header>
    )
}
export default Toolbar;