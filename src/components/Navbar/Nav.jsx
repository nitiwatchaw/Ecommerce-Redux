import React, { useEffect , useRef } from 'react'
import './Nav.scss'
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Nav = ({ select, setSelect }) => {

  const state = useSelector((state) => state.cart)

  const handleClose = () => {
    setSelect(true)
  }

  const ref = useRef();
  useEffect(() => {
    if (setSelect === true) {
      ref.current.classList.toggle('close')
    }
  })

  useEffect(() => {
    const clickOuteSide = (e) => {
      if (!ref.current.contains(e.target)) {
        setSelect(true)
        return;
      }
    }

    document.addEventListener('mousedown', clickOuteSide)
  }, [ref])




  return (
    <>

      <div className={`nav-cart ${select ? 'close' : 'null'} `} ref={ref}>
        <NavLink to='/home' className="home"> <button > <i><AiFillHome /></i> <p>Home</p></button></NavLink>
        <NavLink to='/' className='product'> <button > <i><AiFillAppstore /></i> <p>Product</p></button></NavLink>
        <NavLink to='/cartall' className='cartApi'> <button > <i><BsFillCartCheckFill /></i> <p>Cart API</p></button></NavLink>
        <NavLink to='/cartView' className='cart'><button > <i><RiShoppingCartFill /></i> <p>Cart ({state.cartTotalQuantity})</p></button></NavLink>
        <button onClick={handleClose} className="close-btn" >x</button>
      </div>

    </>
  )
}

export default Nav