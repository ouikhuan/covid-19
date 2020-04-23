import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';


class TimeSeries extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainDataBase: [],
            chartData: {
                labels:[],
                datasets:[
                    {
                        label: 'Confirmed',
                        data:[],
                        backgroundColor:[
                            '#f4a548'
                        ]
                    }
                ]
            },
            isLoaded: false
            
        }
    }

    // Getting the data from the Covid API and saving it into our app component
    //https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live
    async componentDidMount(){
        const url = 'https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live';
        const response = await fetch(url);
        const data = await response.json();
        // console.log("Datos Confirmados", data[0].Cases)
        this.setState({
            mainDataBase: data,
            isLoaded: true
            })
        // console.log("Esto el es dataBase",this.state.mainDataBase);
        const finalLabels = this.feedDataDateGraph();
        const finalData = this.feedDataCasesGraph();
        //console.log(finalLabels);

        this.setState({
            labels: finalLabels,
            data: finalData
        })
    }

    //matching the URL country with the one searched
    /*********************************************/
    

    //Fetching the Date of each day
    feedDataDateGraph = () => {

        // fetching Date
        const dateDay = this.state.mainDataBase.map((element)=>{
            //console.log('Each Date',element.Date);
            return element.Date.substring(6,10);
        })

        //console.log('this is total dates',dateDay)


    }

    //Fetching the Total cases confirmed per day
    feedDataCasesGraph = () => {

        // fetching Cases per day
        const caseDay = this.state.mainDataBase.map((element)=>{
            //console.log('Each Date',element.Date);
            return element.Cases;
        })
        
        //console.log('this is total cases per day',caseDay)

    }


    render(){
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true
                      }}
                    />
            </div>
        )
    }
}

export default TimeSeries;





// https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live