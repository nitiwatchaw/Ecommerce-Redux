import React, { useState } from 'react'
import './Search.scss'
const Search = (props) => {

    const { search, setSearch } = props


    return (
        <div>
            <input type="search" placeholder='search here' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Search