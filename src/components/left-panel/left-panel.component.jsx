import React from 'react';
import {connect} from 'react-redux';
import {HorizontalBar} from 'react-chartjs-2';
import {options} from '../../utils/chart.utils';


const LeftPanel = ({countries}) => {
    const dataSet = {
        labels: countries.map(country=>country.countryCode),
        datasets:[
            {
                label: "Total confirmed",
                data: countries.map(country=>country.totalConfirmed) ,
                backgroundColor: "#f4a548",
            },
            {
                label: "Total deaths",
                data: countries.map(country=>country.totalDeaths) ,
                backgroundColor: "#f6d198",

            }
        ]
    };

    return (
        <div className='left-panel'>
            <HorizontalBar data={dataSet} options={options}/>
        </div>
    );

}

const mapStateToProps = ({countries:{ countries}})=> ({
    countries,
});


export default connect(mapStateToProps)( LeftPanel);
