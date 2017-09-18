import React, {Component} from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';
import googleCodeAddress from '../apis/googleGeoCode';

class MapShow extends Component{

    constructor(props){
        super(props);
        this.state = {position:[51.505,-0.09],city:"London"};
    }

    onInputChange(value){
        console.log(value);
        this.setState({city:value});
        this.geocodeNewAddress(value);
    }

    geocodeNewAddress(address){
        const encodedAddr = googleCodeAddress(address);
        console.log(encodedAddr);
    }

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