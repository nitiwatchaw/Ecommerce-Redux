import React from 'react'
import './CartAll.scss'
import Header from '../../../Header/Header'
import Loader from '../../loader/Loader'
import { useGetAllCartQuery } from '../../../services/storeShop'


const CartAll = () => {

    const { data, error, isLoading } = useGetAllCartQuery();
    return (

        <div>
            <Header />
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Loader />
            ) : data ? (
                <>
                    <div className='main'>


                        <div className="cart-container">
                            {data.map((val, i) => {
                                return (
                                    <div className='cart-item-container' key={i}  >
                                        <div className="cart-id-wrap">
                                            <p>Cart ID: {val.id}</p>
                                        </div>
                                        <div className="detail-wrap">
                                            <div className="userId-wrap">
                                                <p>User ID</p>
                                                <p> {val.userId}</p>
                                            </div>
                                            <div className="date-wrap">
                                                <p>Date</p>
                                                <p>{val.date}</p>
                                            </div>
                                            <div className="wrap-product-quantity">
                                                <div className="product-wrap">
                                                    <p>Products</p>
                                                    {val.products.map((val, i) => {
                                                        return (
                                                            <div key={i}  >
                                                                <p>ID:{val.productId}</p>
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                                <div className="quantity-wrap">
                                                    <p>Quantity</p>
                                                    {val.products.map((val, i) => {
                                                        return (
                                                            <div key={i}  >
                                                                <p>Qty: {val.quantity}</p>
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </>
            ) : "nothing"}


        </div>

    )
}

export default CartAll