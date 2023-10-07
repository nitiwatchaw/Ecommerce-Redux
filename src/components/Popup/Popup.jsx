import React from 'react'
import { NavLink } from 'react-router-dom';
import './Popup.scss'
const Popup = ({ open, setPopup, handleCheckOut }) => {

    if (!open) {
        document.body.classList.remove('active-modal')
        return null;
    } else {
        document.body.classList.add('active-modal')
    }

    const checkOut = () => {
        handleCheckOut()
        setPopup(false)
    }


    return (
        <div className='popup'  >
            <div className={`content `} >
                <div className="wrap-content"  >
                    <h1>Confirm Checkout</h1>
                    <p>Do you sure want to check out?</p>
                    <div className="wrap-btn">
                        <button onClick={() => setPopup(false)}>Cancle</button>
                        <NavLink to='/checkout'>
                            <button onClick={checkOut}>Confirm</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Popup