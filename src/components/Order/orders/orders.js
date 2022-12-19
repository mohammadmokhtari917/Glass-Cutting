import React, { useEffect } from 'react';
import Order from './orderShow/orderShow';
import './orderShow/order.css';

const orders = (props) => {

    let ordersMap = props.ordersList.map((order, index) =>

        <Order
            id={order.id}
            length={order.length}
            wide={order.wide}
            material={order.material}
            number={order.number}
            deleted={props.deleted}
        />

    )
    return ordersMap
}
export default orders;