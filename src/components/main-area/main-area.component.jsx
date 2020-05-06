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
            globalDataBase:[],
            isLoaded2: false,
            globalLoading: false
        }
    }


    // Getting the data from the Covid API and saving it into our app component
    async componentDidMount(){

        this.gettingGlobalData();
        // console.log('GLOBAL DATA FILTERED',filteredGlobal)

        
        const url = 'https://api.covid19api.com/summary';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            countries: data,
            isLoaded: true
            })
        //console.log("Summary data", data);

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
        if(filteredCountry.length){
            this.updateCard(filteredCountry[0]);
            const finalCountryChoosen = filteredCountry[0].Country;

            //Getting the data of the country choosen
            if(finalCountryChoosen){
                this.gettingCountrySearched(finalCountryChoosen)
            }
        }else{
            this.gettingGlobalData();
        }
    }

    //Getting global data summary
    gettingGlobalData(){
        
        const url = "https://api.smartable.ai/coronavirus/stats/global";
        fetch(url, {
        method: "GET",
        headers: {
            'Subscription-Key': `${process.env.REACT_APP_SMARTABLE_KEY}`
        }
        
        }).then(response => response.json())
        //.then(data => this.data.text())
        //.then(data => this.updateCardGlobal(data))
        .then(data => data.stats)  
        .then(data => {
            //const data_summary = {data.TotalConfirmedCases, }
            this.updateCardGlobal(data)
            
            console.log("GLOBAL DATA",data)

            /* Getting the daily global values of confirmed cases and their dates */
            let globalDataBD = [];
            let globalDataBDdates = [];

            for (let i = 0; i<data.history.length;i++){
                globalDataBD = globalDataBD.concat(data.history[i].confirmed)                       /* Global Confirmed Cases */
                globalDataBDdates = globalDataBDdates.concat(data.history[i].date.substring(5,10))  /* Global Confirmed Cases Dates*/
            }

            this.setState({
                globalDataBase: globalDataBD
            })
            console.log("GLOBAL DATA HISTORY",data.history)
            console.log("GLOBAL DATA BD ohhhhh",this.globalDataBase)
            console.log("GLOBAL DATA BD",globalDataBD)
            console.log("GLOBAL DATA BD date",globalDataBDdates)
        })
        //console.log("GLOBAL DATA",data.stats)
        
        
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
        const {totalConfirmedCases,totalDeaths,totalRecoveredCases} = filteredGlobal;
        this.setState({
            // globalDataBase: history,
            totalConfirmed: totalConfirmedCases,
            totalRecovered: totalRecoveredCases,
            totalDeaths: totalDeaths
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
        const {isLoaded} = this.state;
        console.log("globalDataBase!!!",this.globalDataBase)
        
        //
        //const {TotalConfirmedCases, TotalRecoveredCases, totalDeaths} = filteredGlobal;
        //
        // const filteredGlobal = this.gettingGlobalData();
        // console.log('GLOBAL DATA FILTERED',filteredGlobal)
        //
        //this.updateCardGlobal(filteredGlobal);
        //this.gettingGlobalData()


        
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
                        <TimeSeries mainDataBase={this.state.mainDataBase}
                                    globalDataBase={this.state.globalDataBase}/>
                    </>
                    :(<div>loading...</div>)

                }
            </div>
        )
    }
}



export default MainArea;