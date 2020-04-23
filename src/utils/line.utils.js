import 'chartjs-plugin-datalabels';

export const options = {
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
    }
    
}


