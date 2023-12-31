import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './CartView.scss'
import { HiArrowLongLeft } from "react-icons/hi2";
import Header from '../../../Header/Header';
import { NavLink } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart, clearCard, getTotals, checkOut } from '../../../feature/cartSlice';
import { addPrintItem, clearCardPrint, removePrintFromCart, decreasePrintCartItem } from '../../../feature/printSlice';
import Lottie from 'lottie-react';
import EmptyCart from '../../../asset/animation_ln8d6250.json'
import Popup from '../../Popup/Popup';


const CartView = () => {


    const cart = useSelector((state) => state.cart)
    const [popUp, setPopup] = useState(false)

    const handlePopup = () => {
        setPopup(true)

    }


    const dispatch = useDispatch()

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
        dispatch(removePrintFromCart(cartItem))
    }
    const handleDecreaseItem = (cartItem) => {
        dispatch(decreaseCart(cartItem))
        dispatch(decreasePrintCartItem(cartItem))
    }
    const handleIncreaseItem = (cartItem) => {
        dispatch(addToCart(cartItem))
        dispatch(addPrintItem(cartItem))
    }

    const deleteAllItem = () => {
        dispatch(clearCard())
        dispatch(clearCardPrint())
    }

    const handleCheckOut = () => {
        dispatch(checkOut())
    }

    useEffect(() => {
        dispatch(getTotals())

    }, [cart, dispatch])



    const fomaSubtotaltNum = (Math.round(cart.cartTotalAmount * 100) / 100).toFixed(2);

    return (<>
        <Header />
        <div className='main'>

            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <div className="wrap-title">
                        <Lottie animationData={EmptyCart} />
                        <p>You cart is empty</p>
                        <NavLink to='/products'>
                            <button>Go to Store</button>
                        </NavLink>

                    </div>
                </div>
            ) : (
                <>
                    <Popup open={popUp} setPopup={setPopup} handleCheckOut={handleCheckOut} > </Popup >

                    <div className='wrap-item-cart'>
                        <table className='table-cart'>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Product ID</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                    <th>Total</th>
                                    <th >Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.cartItems?.map((cartItem, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                <div className="wrap">
                                                    <img src={cartItem.image} alt={cartItem.title} />
                                                    <div className="text-wrap">
                                                        <p>{cartItem.title}</p>
                                                        <p>{cartItem.category}</p>
                                                    </div>
                                                    <p className='for-mobile'>ID: {cartItem.id}</p>
                                                    <div className="wrap-button-mobile">
                                                        <div className="btn-quantity">
                                                            <button onClick={() => handleDecreaseItem(cartItem)}>-</button>
                                                            <button>{cartItem.cartQuantity}</button>
                                                            <button onClick={() => handleIncreaseItem(cartItem)}>+</button>
                                                        </div>
                                                        <button className='remove-for-mobile' onClick={() => handleRemoveFromCart(cartItem)}>x</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='price'>
                                                £{cartItem.price}
                                            </td>
                                            <td className='product-id'>{cartItem.id}</td>
                                            <td>
                                                <div className="wrap-button">
                                                    <div className="btn-quantity">
                                                        <button onClick={() => handleDecreaseItem(cartItem)}>-</button>
                                                        <button>{cartItem.cartQuantity}</button>
                                                        <button onClick={() => handleIncreaseItem(cartItem)}>+</button>
                                                    </div>
                                                    <button className='remove-for-mobile' onClick={() => handleRemoveFromCart(cartItem)}>x</button>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="remove">
                                                    <button onClick={() => handleRemoveFromCart(cartItem)}>x</button>
                                                </div>
                                            </td>

                                            <td className='price-total'>
                                                <p className='price'>£ {(Math.round((cartItem.price * cartItem.cartQuantity) * 100) / 100).toFixed(2)}</p>

                                                <div className="price-mobile-wrap">
                                                    <p> {`Price: £${cartItem.price}`}</p>
                                                    <p>{`Total: £${(Math.round((cartItem.price * cartItem.cartQuantity) * 100) / 100).toFixed(2)}`}</p>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="wrap-button">
                                                    <div className="btn-quantity">
                                                        <button onClick={() => handleDecreaseItem(cartItem)}>-</button>
                                                        <button>{cartItem.cartQuantity}</button>
                                                        <button onClick={() => handleIncreaseItem(cartItem)}>+</button>
                                                    </div>
                                                    <button className='remove-for-mobile' onClick={() => handleRemoveFromCart(cartItem)}>x</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="summary">
                            <button onClick={() => deleteAllItem()}>Clear Cart</button>
                            <div className="wrap-option">
                                <div className="wrap-text">
                                    <h3>Subtotal</h3>
                                    <h3>{`£ ${fomaSubtotaltNum} `}</h3>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>

                                <button onClick={() => handlePopup()}>Check out</button>

                                <NavLink to='/products'>
                                    <HiArrowLongLeft className='icon' />  <p> Continue Shopping</p>
                                </NavLink>

                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    </>
    )
}

export default CartView