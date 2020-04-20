const addSymbols = value => {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(value) / Math.log(1000)), 0);
    if(order > suffixes.length - 1)
        order = suffixes.length - 1;
    var suffix = suffixes[order];
    return (value / Math.pow(1000, order)) + suffix;
}

export const options = {
    legend: {
        display: false
    },
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Total confirmed cases by country'
    },
    scales: {
        xAxes: [{
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return addSymbols(value);
                }
            }
        }]
    }

}
