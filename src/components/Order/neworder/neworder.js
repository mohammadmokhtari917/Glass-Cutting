import React, { useState, useEffect } from 'react';
import './neworder.css';
import Button from '../../UI/button/button';

const NewOrder = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])
    const [errorMessage, setErrorMessage] = useState('');
    const { lengthglass, wideglass, materialglass, numberglass } = props
    const { lengthglassHandler, wideglassHandler, materialglassHandler, numberglassHandler } = props;
    const validate = () => {
        if (lengthglass === '') {
            setErrorMessage('طول را وارد کنید');
            return false;
        }
        else if (isNaN(lengthglass)) {
            setErrorMessage('طول شیشه باید عدد باشد');
            return false;
        }
        else if (wideglass === '') {
            setErrorMessage('عرض شیشه را وارد کنید');
            return false;
        }
        else if (isNaN(wideglass)) {
            setErrorMessage('عرض شیشه باید عدد باشد');
            return false;
        }
        else if (numberglass === '') {
            setErrorMessage('تعداد را وارد کنید');
            return false;
        }
        else if (isNaN(numberglass)) {
            setErrorMessage('تعداد باید عدد باشد');
            return false;
        }
        else if (materialglass === '') {
            setErrorMessage('نوع شیشه را انتخاب کنید');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    const clickHandler=()=>{
            setErrorMessage('');
            const validateResult =  validate();
            if(validateResult){
                props.clicked() 
            }
        }
        const options = [{label:'ساده',value:'Sadeh'},{label:'مشجر',value:'Moshajar'},{label:'رنگی',value:'Ranghe'},{label:'آینه',value:'Aine'}];
    return (
        <div className='NewPost'>
            <h1>ثبت سفارش</h1>
            <p style={{ color: 'red', fontSize: '56' }}>{errorMessage}</p>
            <label>طول</label>
            <input type="number" value={lengthglass} onChange={lengthglassHandler} />
            <label>عرض</label>
            <input type="number" value={wideglass} onChange={wideglassHandler} maxLength={3} />
            <label>متریال</label>
            <select  type="text" value={materialglass} onChange={materialglassHandler}>
            {options.map((option) => (
              <option value={option.label}>{option.label}</option>
            ))}
          </select>
            <label>تعداد</label>
            <input type="number" value={numberglass} onChange={numberglassHandler} />
            <Button clicked={clickHandler} btnType="danger">اضافه کردن</Button>
        </div>
    )
}
export default NewOrder;