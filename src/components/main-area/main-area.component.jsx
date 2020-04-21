import React, { Component } from 'react';
import SearchBox from './SearchBox';



class MainArea extends Component {
    constructor(props){
        super(props);
        //state: object that describes the application
        this.state= {
            countries: [],
            searchField: '',
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
        console.log(data);
  
    }

    //Working with the SearchBox event
    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({ searchField: event.target.value })

        // this.state.countries.Countries[0]
        //const filteredCountry = this.state.countries.Countries;
        // console.log(filteredCountry);
        const filteredCountry = this.state.countries.Countries
            .filter(name => {
                return name.Country.toLowerCase().includes(this.state.searchField.toLowerCase());
            })
        console.log(filteredCountry);
        
        
    }


    render() {
        const {countries, searchField,isLoaded} = this.state;

        if (!isLoaded){
            return <div>Loading...</div>;
        }else{

            return (
                <div className='main-area'>
                    <div className="tc f1 b main_title ma1">Country Name</div>

                    {/* Input form */}
                    <SearchBox searchChange={this.onSearchChange}/>

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