import React from 'react';

const Cards = ({updateCardTotalConfirmed, updateCardTotalRecovered, updateCardTotalDeaths}) => {
    return(

        <div className="mv2 tc stat_main_container w-100 b">

            <div className="grow ba bw2 br3 ma1 shadow-5">
                <p className='f2 center subtitle'>
                    {'Contagious'}
                </p>
                <h2>{updateCardTotalConfirmed}</h2>
            </div>

            <div className="grow ba bw2 br3 ma1 shadow-5">
                <p className='f2 center subtitle'>
                    {'Recovered'}
                </p>
                <h2>{updateCardTotalRecovered}</h2>
            </div>

            <div className="grow ba bw2 br3 ma1 shadow-5">
                <p className='f2 center subtitle'>
                    {'Deaths'}
                </p>
                <h2>{updateCardTotalDeaths}</h2>
            </div>
        </div>
    );
}

export default Cards;