import React, { useState } from 'react'
import './Header.scss'
import Nav from '../components/Navbar/Nav';
import { BiChevronRight } from "react-icons/bi";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Header = () => {

    const [select, setSelect] = useState(false)


    const handleOpen = () => {
        setSelect(false)
    }


    return (
        <>
            <nav>
                <h2>Fake Store API <HiMiniShoppingBag style={{ marginLeft: "20px" }} /> </h2>
                <a onClick={handleOpen}><BiChevronRight /></a>
            </nav>


            
                <Nav className="main"select={select} setSelect={setSelect} />
           
        </>
    )
}

export default Header