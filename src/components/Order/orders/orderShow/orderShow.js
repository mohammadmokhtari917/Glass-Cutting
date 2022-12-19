import React from 'react';
import './order.css';
import Button from '../../../UI/button/button';
const Student = (props) => {
    return (
        <div className="students">
            <label>شماره :{props.id}</label>
            <label>طول :{props.length}</label>
            <label>عرض :{props.wide}</label>
            <label>متریال :{props.material}</label>
            <label>تعداد : {props.number}</label>

            <label>
                <Button
                    btnType="danger"
                    clicked={props.deleted}
                >
                    حذف
                </Button>
            </label>

        </div>
    )
}
export default Student;