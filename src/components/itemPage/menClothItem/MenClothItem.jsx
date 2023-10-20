import React, { useState } from 'react'
import './MenClothItem.scss'
import Loader from '../../loader/Loader'
import Header from '../../../Header/Header'
import Search from '../../search/Search'
import Menu from '../../menu/Menu'
import { NavLink } from 'react-router-dom'
import { useGetMenClothQuery } from '../../../services/storeShop'

const MenClothItem = () => {
    const { data, error, isLoading } = useGetMenClothQuery()

    const [search, setSearch] = useState("");

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

                                <NavLink key={i} to={`/products/${val.id}`}>
                                    <div className='item'   >
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
                                </NavLink>
                            )
                        })}
                    </div>


                </>
            ) : null}

        </div>
    </>
    )
}

export default MenClothItem