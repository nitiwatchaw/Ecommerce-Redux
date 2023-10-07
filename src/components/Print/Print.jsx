import React from 'react'
import { useSelector } from 'react-redux'
import './Print.scss'

const Print = () => {


    const printCart = useSelector((state) => state.cart)

    return (
        <div className='main wrap-item-cart'>
            {printCart.cartItems.map((cartItem, i) => {
                return (
                    <div key={i}>
                        <p>{cartItem.title}</p>
                        <p>{cartItem.cartQuantity}</p>
                    </div>
                )
            })}


        </div>
    )
}

export default Print