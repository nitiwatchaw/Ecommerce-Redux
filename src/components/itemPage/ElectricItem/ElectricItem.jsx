import React, { useState } from 'react'
import Loader from '../../loader/Loader'
import Search from '../../search/Search'
import Header from '../../../Header/Header'
import Menu from '../../menu/Menu'
import "./ElectricItem"

import { useGetElectronicQuery } from '../../../services/storeShop'
const ElectricItem = ({ itemView }) => {

    const [search, setSearch] = useState("");
    const { data, error, isLoading } = useGetElectronicQuery();


    return (<>
        <Header />
        <div className='main'>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Loader />
            ) : data ? (
                <>
                    <div className="wrap-menu">
                        <Search search={search} setSearch={setSearch} />
                        <Menu />
                    </div>

                    <div className='container-item'>
                        {data.filter(val => val.title.toLowerCase().includes(search)).map((val, i) => {
                            return (
                                <div className='item' key={i} onClick={() => itemView(val.id)} >
                                    <div className='img-wrap'>
                                        <img src={val.image} alt="" />
                                    </div>
                                    <p className='title'>{val.title}</p>
                                    <div className='text-wrap'>

                                        <p className='price'>Price</p>

                                        <p className='amount'>£ {val.price}</p>
                                    </div>
                                    <p className='ID'>{val.id}</p>
                                    <p className='cate'>{val.category}</p>
                                </div>

                            )
                        })}
                    </div>


                </>
            ) : null}

        </div>
    </>
    )
}

export default ElectricItem