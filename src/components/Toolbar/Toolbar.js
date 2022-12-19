import React, { useState, useContext } from 'react';
import './Toolbar.css';
import MenuItems from './MenuItems/MenuItems';
import Modal from '../UI/modal/Modal';
import SignIn from './signIn/signIn';
import { AuthContext } from '../context/Auth/authContext';
import Button from '../UI/button/button';

const Toolbar = (props) => {

    const [showModal, setShowModal] = useState(false);
    const authContext = useContext(AuthContext);
    const logout = (props) => {
        authContext.dispatch({ type: 'logout' });
        props.history.replace('/');
    }
    const modalHandler = () => {
        setShowModal(true)
    }
    const modalClosed = () => {
        setShowModal(false)
    }
    let auth = false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if(userInfo){
        auth=true
    }

    return (
        <header className="Toolbar">
            <span className="showNav">
                <nav>
                    <MenuItems />
                </nav>
            </span>
            <span className="showNav">
                {auth ?
                    <Button btnType="danger" clicked={logout}>خروج</Button> :
                    <Button btnType="danger" clicked={modalHandler}>ورود و ثبت نام</Button>}
            </span>
            <Modal show={showModal} modalClosed={modalClosed}>
                <SignIn />
            </Modal>
        </header>
    )
}
export default Toolbar;