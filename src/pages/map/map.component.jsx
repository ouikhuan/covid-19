import React from 'react';
import { Map, Marker, Popup, TileLayer,CircleMarker } from "react-leaflet";
import axios from 'axios';
import {getScaleAndColorByNumber} from '../../utils/map.utils';

import 'leaflet/dist/leaflet.css';
import './map.styles.scss';

class MapPage extends React.Component{

    constructor(){
        super();
        this.state = {
            mapSettings:{
                center: [0,0],
                zoom: 3,
            },
            activeCountry:null,
            mappingCountries:[]
        }
    }

    componentDidMount(){
        this.fetchMapData();
    }

    async fetchMapData(){
        try {
            const response = await axios.get('https://corona.lmao.ninja/v2/countries');
            const { data } = response;

            if(data.length){

                this.setState({
                    mappingCountries: data
                });
            }


        } catch(e) {
            console.log(`Failed to fetch mapData: ${e.message}`, e);
            return;
        }
    }

    setActiveCountry = (country) => {
        this.setState({
            activeCountry:country
        });
    }



    render(){
        return (
        <div className='map'>
            <Map center={this.state.mapSettings.center} zoom={this.state.mapSettings.zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {this.state.mappingCountries.map((country,index) => {

                    const {scale,color} = getScaleAndColorByNumber(country.cases);
                    return (
                        <Marker
                          key={index}
                          position={{lat:country.countryInfo.lat, lng: country.countryInfo.long}}
                          onClick={() => {
                            this.setActiveCountry(country);
                          }}
                        >
                        <CircleMarker
                        center={{lat:country.countryInfo.lat, lng: country.countryInfo.long}}
                        fillColor={color}
                        opacity='0'
                        fillOpacity='0.6'
                        radius={scale} />
                        </Marker>
                    )
                })}

                {this.state.activeCountry && (
                    <Popup
                      position={{
                            lat:this.state.activeCountry.countryInfo.lat,
                            lng: this.state.activeCountry.countryInfo.long
                        }}
                      onClose={() => {
                        this.setActiveCountry(null);
                      }}
                    >
                      <div>
                        <h2>{this.state.activeCountry.country}<img className='flag' src={this.state.activeCountry.countryInfo.flag} alt='' /></h2>
                        <h4>Total cases: {this.state.activeCountry.cases}</h4>
                        <h4>Total deaths: {this.state.activeCountry.deaths}</h4>
                        <h4>Total recovered: {this.state.activeCountry.recovered}</h4>
                      </div>
                    </Popup>
                  )}
            </Map>
        </div>)
    }
}
export default MapPage;