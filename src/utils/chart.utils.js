import 'chartjs-plugin-datalabels';

const addSymbols = value => {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(value) / Math.log(1000)), 0);
    if(order > suffixes.length - 1)
        order = suffixes.length - 1;
    var suffix = suffixes[order];
    return Math.round((value / Math.pow(1000, order))) + suffix;
}

export const options = {
    plugins: {
        datalabels: {
          align: function(context) {
            const index = context.dataIndex;
            const value = context.dataset.data[index];
            const invert = Math.abs(value) <= 100000;
            return invert ? 'end' : 'start'
          },
          color: '#fff',
          anchor: 'end',
          font: {
            size: 12,
            weight: 600
          },
          formatter: function(value) {

            return addSymbols(value);
          }
        }
    },
    legend: {
        position:'bottom',
        labels: {
            fontColor: '#ffffff'
         }
    },
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Total confirmed cases by country',
        fontColor:'#fff',
        fontSize:18
    },
    scales: {

        xAxes: [{
            ticks: {
                fontColor:'#ffffff',
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return addSymbols(value);
                }
            },
            gridLines:{
                display:false,
            }
        }],
        yAxes: [{
            ticks: {
                fontColor:'#ffffff',
            },
            gridLines:{
                display:false,
            }
        }]
    }

}
