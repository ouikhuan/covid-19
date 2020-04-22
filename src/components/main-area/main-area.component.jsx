import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Cards from './Cards';


class MainArea extends Component {
    constructor(props){
        super(props);
        //state: object that describes the application
        this.state= {
            countries: [],
            searchField: '',
            isLoaded: false,
            totalConfirmed: '',
            totalRecovered: '',
            totalDeaths: ''
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
        //console.log(data);
  
    }

    //Working with the SearchBox event
    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({ searchField: event.target.value })
        const filteredCountry = this.state.countries.Countries
            .filter(name => {
                return name.Country.toLowerCase().includes(this.state.searchField.toLowerCase());
            })
        console.log(filteredCountry);
        
    }

    //Working with the Card component
    updateCard = (filteredCountry) => {
        const totalConfirmed = filteredCountry;
        this.setState({
            totalConfirmed: totalConfirmed
        })
        console.log(totalConfirmed);
    }

    

    render() {
        const {countries, searchField,isLoaded} = this.state;
        updateCard(filteredCountry);
        if (!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <div className='main-area'>
                    <div className="tc f1 b main_title ma1">this.filteredCountry</div>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Cards updateCardTotalConfirmed={this.state.totalConfirmed}/>
                </div>
            )
        }
    }
}



export default MainArea;