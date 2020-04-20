import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateTopCountriesBarData} from '../../redux/top-countries/top-countries.actions';
import {HorizontalBar} from 'react-chartjs-2';
import {options} from '../../utils/chart.utils';


class LeftPanel extends React.Component{

    componentDidMount(){
        this.fetchAllCountriesData();
    }

    fetchAllCountriesData(){
        const {updateTopCountriesBarData} = this.props;
        axios.get(`https://api.covid19api.com/summary`)
        .then(response => {
            const countries = response.data.Countries;
            updateTopCountriesBarData(countries);
        }).catch((error)=>console.log(error.message));
    }

    render(){
        const {countries} = this.props;
        const dataSet = {
            labels: countries.map(country=>country.countryName),
            datasets:[
                {
                    data: countries.map(country=>country.totalConfirmed) ,
                }
            ]
        };

        return (
            <div className='left-panel ba1 b--solid b--dark-gray'>
                <HorizontalBar data={dataSet} options={options}/>
            </div>
        );
    }
}

const mapStateToProps = ({topCountries:{ countries }})=> ({
    countries
});
const mapDispatchToProps = dispatch => ({
    updateTopCountriesBarData: (countries)=> dispatch(updateTopCountriesBarData(countries))
});

export default connect(mapStateToProps,mapDispatchToProps)( LeftPanel);
