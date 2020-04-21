import React, { Component } from 'react';


class MainArea extends Component {
    constructor(props){
        super(props);
        this.state= {
            countries: [],
            isLoaded: false,
        }
    }

    // Getting the data from the Covid API and saving it into our app component
    async componentDidMount(){
        const url = 'https://api.covid19api.com/summary';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            countries: data,
            isLoaded: true
            })
        // console.log(data.Global);
    }

    render() {
        const {countries, isLoaded} = this.state;

        if (!isLoaded){
            return <div>Loading...</div>;
        }else{

            return (
                <div className='main-area'>
                    <div className="tc f1 b main_title ma1">Country Name</div>

                    {/* Input form */}
                    <div className="search_container tc center">
                        <div className=' pa2 ma2 center search_small_container'>
                            <input className="" type="text" placeholder="Enter Country"/>
                            <i className='ml2 fa fa-search'></i>
                        </div>
                    </div>

                    {/* Total statistic section */}
                    <div className="mv2 tc stat_main_container w-100 b">

                        <div className="grow ba bw2 br3 ma1 shadow-5">
                            <p className='f2 center subtitle'>
                                {'Contagious'}
                            </p>
                            <h2>{countries.Global.TotalConfirmed}</h2>
                        </div>

                        <div className="grow ba bw2 br3 ma1 shadow-5">
                            <p className='f2 center subtitle'>
                                {'Recovered'}
                            </p>
                            <h2>{countries.Global.TotalRecovered}</h2>
                        </div>

                        <div className="grow ba bw2 br3 ma1 shadow-5">
                            <p className='f2 center subtitle'>
                                {'Deaths'}
                            </p>
                            <h2>{countries.Global.TotalDeaths}</h2>
                        </div>

                    </div>

                </div>



            )
        }
    }
}



export default MainArea;