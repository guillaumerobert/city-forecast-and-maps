import React, {Component} from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';
import axios from 'axios';

class MapShow extends Component{

    constructor(props){
        super(props);
        this.state = {position:[51.505,-0.09],city:"London"};
        this.geocodeNewAddress = this.geocodeNewAddress.bind(this);
    }

    onInputChange(value){
        this.setState({city:value});
        this.geocodeNewAddress(value);
    }


    /**
     * Dynamically geocode adress given in search bar (City Name).
     * Using Google Maps Geocode Api.
     * @param address
     * @returns {*|Promise.<T>}
     */
    geocodeNewAddress(address){

        let self = this;
        const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?";
        const API_KEY = "AIzaSyARu2bUls2TDAg6uzg85ra9SEhrX61Mr7c"; // Please use your own Key !
        const fullUrl = `${BASE_URL}address=${address}&key=${API_KEY}`;

        return  axios.get(fullUrl).then(function(response){
            const coords = response.data.results[0].geometry.location
            self.setState({position:[coords.lat,coords.lng]});
        }).catch(function(error){
            console.log(error);
        });
    };

    render(){
        return(
        <div className="leafletmap">
            <h3>My Map Of {this.state.city} </h3>
            <Map center={this.state.position} zoom={13}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={this.state.position}>
                    <Popup>
                        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                    </Popup>
                </Marker>
                <Control position="topleft" >
                    <div className="search-bar">
                        <input
                            value={this.state.city}
                            onChange={event => this.onInputChange(event.target.value)}
                        />
                    </div>
                </Control>
            </Map>
        </div>
        )
    };
}

export default MapShow;