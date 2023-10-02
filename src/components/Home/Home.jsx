import React from 'react'
import './Home.scss'
import img from '../../asset/shop.png'
const Home = () => {
    return (
        <div>
            <div className='bg'>
            </div>

            <div className="container-home main">
                <div className="wrap-container">
                    <div className="wrap-text">
                        <h1>MY FAKE STORE <br /> FROM API</h1>
                        <p >This is the simple shop about e-commerce application ,I'm use the source API from fakestoreapi.com</p>
                    </div>
                    <img src={img} alt='img-home' />
                </div>
            </div>
        </div>
    )
}

export default Home