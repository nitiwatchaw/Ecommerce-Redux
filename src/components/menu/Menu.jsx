import React, { useRef, useEffect, useState } from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

const Menu = () => {

    const activeClassName = "nav-active"
    const [select, setSelect] = useState(false)
    const nav = useRef();

    function handleOpen() {
        setSelect(true)
    }

    useEffect(() => {
        const clickOuteSide = (e) => {
            if (nav.current && !nav.current.contains(e.target)) {
                setSelect(false)
                return;
            }
        }
        document.addEventListener('mousedown', clickOuteSide)

    }, [nav])




    return (
        <div className='wrap-menu-icon'>
            <ul ref={nav} className={select ? "open-nav" : 'null'}       >
                <NavLink to="/products" className={({ isActive }) => isActive ? activeClassName : 'null'}><li>all</li></NavLink>
                <NavLink to="/jewery" className={({ isActive }) => isActive ? activeClassName : 'null'}><li>jewelery</li></NavLink>
                <NavLink to="/electric" className={({ isActive }) => isActive ? activeClassName : 'null'}><li>electronics</li></NavLink>
                <NavLink to="/menItem" className={({ isActive }) => isActive ? activeClassName : 'null'}><li>men's clothing</li></NavLink>
                <NavLink to="/womenItem" className={({ isActive }) => isActive ? activeClassName : 'null'}><li>women's clothing</li></NavLink>
            </ul>
            <div className={`icon-menu`} onClick={handleOpen}> <i><MdOutlineMenu /></i></div>
        </div>
    )
}

export default Menu