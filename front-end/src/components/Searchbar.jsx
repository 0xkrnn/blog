import React, { useContext } from 'react';
import { postContext } from '../contexts/Post';

function Searchbar() {

    const { search, setSearch } = useContext(postContext)

    return (
        <div className='search__bar'>
            <input
                type="text"
                className='search__input'
                value={search}
                placeholder='search'
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default Searchbar;