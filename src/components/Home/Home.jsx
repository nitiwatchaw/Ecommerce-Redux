import React from 'react'
import './Home.scss'
import Header from '../../Header/Header'
import { NavLink } from 'react-router-dom'
import img from '../../asset/shop.png'
const Home = () => {
    return (
        <div>
            <Header />
            <div className='bg'>
            </div>

           
                <div className="wrap-container">
                    <div className="wrap-text">
                        <h1>MY FAKE STORE <br /> FROM API</h1>
                        <p >This is the simple shop about e-commerce application ,I'm use the source API from fakestoreapi.com</p>
                        <NavLink to='/products' > <button>Go to Product</button></NavLink>
                    </div>
                    <img src={img} alt='img-home' />
                </div>
           
        </div>
    )
}

export default Home