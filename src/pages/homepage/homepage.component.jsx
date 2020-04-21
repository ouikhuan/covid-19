import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import LeftPanel from '../../components/left-panel/left-panel.component';
import MainArea from '../../components/main-area/main-area.component';
import RightPanel from '../../components/right-panel/right-panel.component';
import {updateCountriesData} from '../../redux/countries/countries.actions';
import './homepage.styles.scss';


class Homepage extends React.Component {
    componentDidMount(){
        this.fetchAllCountriesData();
    }
    fetchAllCountriesData(){
        const {updateCountriesData} = this.props;
        axios.get(`https://api.covid19api.com/summary`)
        .then(response => {
            const countriesData = response.data;
            updateCountriesData(countriesData);
        }).catch((error)=>console.log(error.message));
    }

    render(){
        return (
            <div className='homepage'>
                <LeftPanel />
                <MainArea />
                <RightPanel />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCountriesData: (countries)=> dispatch(updateCountriesData(countries))
});

export default connect(null,mapDispatchToProps)(Homepage);