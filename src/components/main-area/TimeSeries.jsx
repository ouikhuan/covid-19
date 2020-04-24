import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';


//<TimeSeries updateTitle={this.state.countryName}/>

class TimeSeries extends Component{
    constructor(props){
        super(props);
        this.state = {
            // mainDataBase: [],
            chartData: {
                labels:[],
                datasets:[
                    {
                        data:[],
                        borderColor:[
                            '#f4a548'
                        ],
                        fill: false,
                        borderWidth:2
                    }
                ]
            },
            isLoaded: false,
            countryName: ''
            
        }
        // console.log("PAIS RECIBIDO", this.props.updateTitle)
    }

    // Getting the country searched
    gettingCountrySearched = () => {
        console.log("DB",this.props.mainDataBase)
        //return 'peru'
        
        // console.log("Nombre del PAIS",this.props.updateTitle)
        // this.setState({
        //     countryName: this.props.updateTitle
        // },
        // ()=>{
            
        // })
    }   
        
    // }
    //matching the URL country with the one searched
    //adding the country to the final link to fetch
    /*********************************************/
    // Getting the data from the Covid API and saving it into our app component
    //https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live


    
    

    //Fetching the Date of each day
    feedDataDateGraph = () => {
        if(this.props.mainDataBase.length){
            const dateBay = this.props.mainDataBase.map((element)=>{
                return element.Date.substring(6,10);
            })
        }
        // fetching Date
        

        console.log('this is total dates',this.dateDay)
    }

    //Fetching the Total cases confirmed per day
    feedDataCasesGraph = () => {

        // fetching Cases per day
        return this.props.mainDataBase.map((element)=>{
            //console.log('Each Case',element.Cases);
            return element.Cases;
        })
        //console.log('this is total cases per day',caseDay)
    }

    //Updating the state
    updateState = () => {
        // console.log("Esto el es dataBase",this.state.mainDataBase);
        const finalLabels = this.feedDataDateGraph();
        const finalData = this.feedDataCasesGraph();
        //console.log(finalLabels);

        this.setState({
            chartData:{
                labels: finalLabels,
                datasets:[{
                    data: finalData
                }]
            }
        })
        console.log(finalLabels);
        console.log("FINAL DATA",finalData);
        console.log("LABELS",this.state.chartData.labels);
        console.log("DATA",this.state.chartData.datasets);
    }



    render(){
        if(this.props.mainDataBase.length){
        console.log("DB1",this.props.mainDataBase)
        }
        this.feedDataDateGraph()
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        title:{
                            display:true,
                            text: 'Total Cases Confirmed',
                            fontSize: 25,
                            fontColor: '#ffffff'
                        },
                        legend:{
                            display:false
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor:'#ffffff'
                                },
                                gridLines:{
                                    display:false
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor:'#ffffff'
                                }
                            }]
                        },
                        plugins: {
                            datalabels: {
                                display: false,
                            },
                        }
                      }}
                    />
            </div>
        )
    }
}

export default TimeSeries;





// https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live