import React from 'react';
// import {ReactComponent as SearchIcon} from ' ../img/search.svg';
import {ReactComponent as Search} from '../img/search.svg';
import './Searchbox.css';

const Searchbox = () => {
    return (
        <div className='search_box'>
                 <div className="pt-2 relative mx-auto text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search"/>
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <Search/>
                    </button>
                </div>
        </div>
    )
}

export default Searchbox