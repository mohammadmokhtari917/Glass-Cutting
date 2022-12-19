import React, { useEffect } from 'react';
import Order from './orderShow/orderShow';
import './orderShow/order.css';
import Button from '../../UI/button/button';

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
    const req = () => {
        let req = props.ordersList.map((order, index) =>
        props.submited(order.length, order.wide, order.material, order.number)
    )
    }

    return (
        <React.Fragment>
            {ordersMap}
            <br />
            {props.erorr}
            <Button
                btnType="success"
                clicked={req}
            >
                ثبت سفارش
            </Button>
        </React.Fragment>
    )
}
export default orders;