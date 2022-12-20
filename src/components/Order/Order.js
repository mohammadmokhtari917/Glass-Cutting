import React, { useState } from 'react';

import './Order.css';

import NewOrder from './neworder/neworder';
import Orders from './orders/orders';

const Order = (props) => {
  const [orders, setOrders] = useState([]);
  const [lengthglass, setlengthglass] = useState('');
  const [wideglass, setwideglass] = useState('');
  const [materialglass, setmaterialglass] = useState('');
  const [numberglass, setnumberglass] = useState('');
  const [error, setError] = useState(false);
  const lengthglassHandler = (event) => {
    setlengthglass(event.target.value)
  }
  const wideglassHandler = (event) => {
    setwideglass(event.target.value)
  }
  const materialglassHandler = (event) => {
    setmaterialglass(event.target.value)
  }
  const numberglassHandler = (event) => {
    setnumberglass(event.target.value);
  }

  const addOrder = () => {

    const newOrders = [...orders];
    newOrders.push({
      'id': orders.length,
      'length': lengthglass,
      'wide': wideglass,
      'material': materialglass,
      'number': numberglass
    });
    setOrders(newOrders);
    console.log(newOrders)

  }

  const deleteOrder = (index) => {
    const ordersList = [...orders];
    ordersList.splice(index, 1);
    setOrders(ordersList)
  }

  const submitOrder = (length, wide, material, number) => {
    fetch('http://192.168.119.2/order/insertOrder.php', {
      method: 'POST',
      headers: {
        'Accept': 'applicaion/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        length_glass: length,
        wide_glass: wide,
        material_glass: material,
        number_glass: number
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        props.history.replace('/');
      }).catch((error) => {
        setError(error)
      })
  }
  let ErrorMessage = null;
  if (error) {
    ErrorMessage = <h1 style={{ textAlign: 'center', color: 'red' }}>متاسفانه عملیات شما با شکست روبرو شد.لطفا مجددا تلاش کنید</h1>
  }

  return (
    <React.Fragment>
      <div className='order'>
      </div>
      <NewOrder
        lengthglass={lengthglass}
        wideglass={wideglass}
        materialglass={materialglass}
        numberglass={numberglass}
        lengthglassHandler={lengthglassHandler}
        wideglassHandler={wideglassHandler}
        materialglassHandler={materialglassHandler}
        numberglassHandler={numberglassHandler}
        clicked={addOrder}

      />

      <Orders
        ordersList={orders}
        deleted={deleteOrder}
        submited={submitOrder}
        erorr={ErrorMessage}
      />
      
    </React.Fragment>
  )

}
export default Order;