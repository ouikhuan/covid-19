export const convertToChartData = (countries)=>{
    return sortCountriesByTotalConfirmed(countries.map(
        country=> ({
            countryName:country.Country,
            totalConfirmed:country.TotalConfirmed,
            totalDeaths:country.TotalDeaths,
        }))).slice(0,10);
}

export const sortCountriesByTotalConfirmed = (countries)=> {
    return countries.sort( (a,b) => b.totalConfirmed - a.totalConfirmed);
}
