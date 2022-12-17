import React from 'react';
import './MenuItems.css';
import MenuItem from './MenuItem/MenuItem';
const MenuItems = ()=>{
    return(
        <ul className="MenuItems">
            <MenuItem link={{pathname:"/"}}>
                صفحه اصلی
            </MenuItem>
            <MenuItem link={{
                pathname:"/order",
                search:"?sort=name",
                hash:"#the-hash",
                state:{fromDashboard:true}
            }} >
                ثبت سفارش
            </MenuItem>
        </ul>
    )
}
export default MenuItems