import React, { useEffect, useState } from 'react'
import './Checkout.scss'
import { NavLink } from 'react-router-dom'
import { clearCardPrint } from '../../feature/printSlice'
import thank from '../../asset/check.png'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { getTotals } from '../../feature/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
const Checkout = () => {


    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const dispatchClear = useDispatch()


    useEffect(() => {
        dispatch(getTotals())
  

    }, [cart, dispatch])



    return (
        <div className='main'>
            <div className="container-checkout">
                <img src={thank} alt="thank" />
                <div className="wrap-text">
                    <h1>Thanks for reaching out!</h1>
                    <p>This is a fake store that I'm create for practice the redux libraby</p>
                </div>
                <div className="wrap-btn">
                    <NavLink to='/'>
                        <button className='home-btn' onClick={() => { dispatchClear(clearCardPrint()) }}>
                            <HiOutlineArrowNarrowLeft />    <p>Go to Home</p>
                        </button>

                    </NavLink>
                    <NavLink to='/print'>
                        <button className='print-btn'>Print</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Checkout