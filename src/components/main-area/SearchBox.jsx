import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className="search_container tc center">
            <div className=' pa2 ma2 center search_small_container'>
                <input className="" type="text" placeholder="Enter Country" onChange={searchChange}/>
                <i className='ml2 fa fa-search'></i>
            </div>

        

        </div>
    );
}

export default SearchBox;