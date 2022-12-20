import React from 'react';

import './Homepage.css';

const HomePage = (props) => {

  return (
    <React.Fragment>
      <div className='homepage'>
        <h2>سلام</h2><br/>
        <p>به وبسایت شیشه بری ما خوش آمدید</p><br/>
        <p>لطفا برای ثبت در خواست های خود به قسمت <a href='/order'>ثبت سفارش</a> بروید</p><br/>
        <p>یا با شماره  09306061158 با ما در تماس باشید</p><br/>
      </div>
    </React.Fragment>
  )

}
export default HomePage;