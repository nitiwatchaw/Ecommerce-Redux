import React, { useEffect, useState } from 'react'
import './ItemView.scss'
import Axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { useGetItemQuery } from '../../../services/storeShop'
import Loader from '../../loader/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, getTotals } from '../../../feature/cartSlice'
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

const ItemView = () => {
    const { data, error, isLoading } = useGetItemQuery(1)
    const { id } = useParams();


    const [item, setItem] = useState([])
    const [rate, setRate] = useState([])

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const addItem = (item) => {
        dispatch(addToCart(item))
    }

    const getData = () => {
        Axios.get("https://fakestoreapi.com/products/" + id)
            .then((res) => {
                setItem((res.data))
            })
    }
    const getData2 = () => {
        Axios.get("https://fakestoreapi.com/products/" + id)
            .then((res) => {
                setRate((res.data.rating))
            })
    }

    useEffect(() => {
        getData();
        getData2();
        dispatch(getTotals())
    }, [cart, dispatch])




    return (
        <div>
            {error ? (
                <>Oh no, there was an errFor</>
            ) : isLoading ? (
                <Loader />
            ) : data ? (
                <div className='view-section'>
                    <div className='container-itemview' >
                        <img src={item.image} alt="" />
                        <div className='description-wrap'>
                            <p className='title'>{item.title}</p>
                            <div className="wrap-text">
                                <p className='description'>{item.description}</p>
                                <p className='price'>£ {item.price}</p>
                            </div>
                            <div className="wrap-text-2">
                                <p className='rate'><i><AiFillStar /></i>  Rate: {rate.rate}  </p>
                                <p className='amount'>Amount ( {rate.count} )</p>
                            </div>

                        </div>
                        <div className="wrap-button">
                            <NavLink to='/cartView'>
                                <RiShoppingCartFill /> Go to Cart
                            </NavLink>
                            <button className='buttonAdd' onClick={() => { addItem(item) }}>Add to Cart</button>
                        </div>
                    </div>
                    <NavLink to="/"> <button >Back</button></NavLink>
                </div>
            ) : null}



        </div>
    )
}

export default ItemView