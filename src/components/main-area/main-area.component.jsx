import React, { Component } from 'react';
import Title from '../title/Title';
import SearchBox from '../searchbox/SearchBox';
import Cards from '../cards/Cards';
import TimeSeries from './TimeSeries';

class MainArea extends Component {
    constructor(props){
        super(props);
        //state: object that describes the application
        this.state= {
            countries: [],
            searchField: '',
            isLoaded: false,
            countryName: '',
            totalConfirmed: '',
            totalRecovered: '',
            totalDeaths: '',
            mainDataBase:[],
            isLoaded2: false
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
        console.log("Summary data", data);

    }

    //Working with the SearchBox event
    onSearchChange = (event) => {
        //console.log("Event Target",event.target.value);
        this.setState({ searchField: event.target.value })
        //console.log("searchField state",this.state.searchField);
        const filteredGlobal = this.state.countries.Global
        
        this.updateCardGlobal(filteredGlobal);
        
        console.log("Global!",filteredGlobal)

        const filteredCountry = this.state.countries.Countries
            .filter(name => {
                return name.Country.toLowerCase() === event.target.value.toLowerCase();
            })
        if(!filteredCountry.length){
            this.updateCardGlobal(filteredGlobal);
        }else{
        //console.log("filteredCountry!",filteredCountry)
        
            this.updateCard(filteredCountry[0]);
            const finalCountryChoosen = filteredCountry[0].Country;

            //Getting the data of the country choosen
            if(finalCountryChoosen){
                this.gettingCountrySearched(finalCountryChoosen)
            }
        }
    }



    async gettingCountrySearched(finalCountryChoosen){
        const url = `https://api.covid19api.com/total/dayone/country/${finalCountryChoosen}/status/confirmed`;

        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos Confirmados", data)
        this.setState({
            mainDataBase: data,
            isLoaded2: true
        })
        console.log("MAIN DATA BASE",this.state.mainDataBase)
    }


    clearSearchField = () => {this.setState({searchField:''})}


    // Working with the Card component for Global data
    updateCardGlobal = (filteredGlobal) => {
        console.log('run here Global',filteredGlobal);
        const {Global = 'Global', TotalConfirmed,TotalDeaths,TotalRecovered} = filteredGlobal;
        this.setState({
            countryName: Global,
            totalConfirmed: TotalConfirmed,
            totalRecovered: TotalRecovered,
            totalDeaths: TotalDeaths
        })
    }
    //Working with the Card component for countries data

    updateCard = (filteredCountry) => {
        console.log('run here Country',filteredCountry);
        const {Country, TotalConfirmed,TotalDeaths,TotalRecovered} = filteredCountry;
        this.setState({
            countryName: Country,
            totalConfirmed: TotalConfirmed,
            totalRecovered: TotalRecovered,
            totalDeaths: TotalDeaths

        })
    }



    render() {
        const {countries, searchField,isLoaded} = this.state;


        return (
            <div className='main-area column'>
                {
                    isLoaded?
                    <>
                        <Title updateTitle={this.state.countryName}/>
                        <SearchBox searchChange={this.onSearchChange}
                            clearField={this.clearSearchField} searchValue={this.state.searchField} />
                        <Cards updateCardTotalConfirmed={this.state.totalConfirmed}
                            updateCardTotalRecovered={this.state.totalRecovered}
                            updateCardTotalDeaths={this.state.totalDeaths}/>
                        <TimeSeries mainDataBase={this.state.mainDataBase}/>
                    </>
                    :(<div>loading...</div>)

                }
            </div>
        )
    }
}



export default MainArea;