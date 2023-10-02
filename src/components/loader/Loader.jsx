import React from 'react'
import './Loader.scss'
import BarLoader from "react-spinners/BarLoader";
const Loader = () => {
    return (
        <div className='load-section'>
            <BarLoader color={"#5c5d5d"} size={150}  className='loading'/>
        </div>
    )
}
import './Loader.scss'
export default Loader