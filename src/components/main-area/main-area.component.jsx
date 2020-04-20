import React from 'react';

const MainArea = ()=>(
    <div className='main-area ba1 b--solid b--dark-gray'>
        <div className="tc b main_title ma1">Title</div>

        {/* Input form */}
        <div className="search_container tc center">
            <div className=' pa2 ma2 center search_small_container'>
                <input className="" type="text" placeholder="Enter Country"/>
                <i className='ml2 fa fa-search'></i>
            </div>
        </div>
        
    </div>
)

export default MainArea;