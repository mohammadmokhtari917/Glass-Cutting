import React,{useEffect} from 'react';
import './neworder.css';
import Button from '../../UI/button/button';

const NewOrder =(props)=>{
    useEffect(()=>{
        console.log(props)
    },[])
    const{lengthglass, wideglass, materialglass, numberglass}=props
    const {lengthglassHandler, wideglassHandler, materialglassHandler, numberglassHandler} = props;
    return(
        <div className='NewPost'>

                <h1>ثبت سفارش</h1>
                <label>طول</label>
                <input type="number" value={lengthglass} onChange={lengthglassHandler} />
                <label>عرض</label>
                <input type="number" value={wideglass} onChange={wideglassHandler} maxLength={3} />
                <label>متریال</label>
                <input type="text" value={materialglass} onChange={materialglassHandler} />
                <label>تعداد</label>
                <input type="number" value={numberglass} onChange={numberglassHandler} />
                <Button clicked={props.clicked} btnType="danger">اضافه کردن</Button>
            </div>
    )
}
export default NewOrder;