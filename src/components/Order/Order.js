import React,{useState} from 'react';

import './Order.css';

import NewOrder from './neworder/neworder';

const Order = (props) => {

  const[lengthglass,setlengthglass]= useState('');
  const[wideglass,setwideglass] = useState('');
  const[materialglass,setmaterialglass] = useState('');
  const [numberglass,setnumberglass] = useState('');
  const[error,setError] = useState(false);
  const lengthglassHandler=(event)=>{
    setlengthglass(event.target.value)
  }
  const wideglassHandler=(event)=>{
    setwideglass(event.target.value)
  }
  const materialglassHandler=(event)=>{
    setmaterialglass(event.target.value)
  }
  const numberglassHandler=(event)=>{
    setnumberglass(event.target.value);
  }

  let ErrorMessage=null;
  if(error){
    ErrorMessage = <h1 style={{textAlign:'center',color:'red'}}>متاسفانه عملیات شما با شکست روبرو شد.لطفا مجددا تلاش کنید</h1>
  }

  const addOrder=()=>{
    fetch('http://192.168.119.2/order/insertOrder.php',{
      method:'POST',
      headers:{
          'Accept' : 'applicaion/json',
          'Content-Type':'application/json',
      },
      body:JSON.stringify({
        length_glass:lengthglass,
        wide_glass:wideglass,
        material_glass:materialglass,
        numberglass:numberglass
      })
  }).then((response)=>response.json())
      .then((responseJson)=>{
       
          props.history.replace('/');
      }).catch((error)=>{
        setError(error)
      })
  }

  return (
    <React.Fragment>
      <div className='order'>
        <h2>سفارش</h2>
      </div>

      {ErrorMessage}
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
    </React.Fragment>
  )

}
export default Order;