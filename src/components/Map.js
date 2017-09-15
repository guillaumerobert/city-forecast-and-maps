import React, {Component} from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapShow extends Component{

    constructor(props){
        super(props);
        this.state = {position:[51.505,-0.09]};
    }

    render(){
        return(
        <div className="leafletmap">
            <h3>My Map Of London :</h3>
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
            </Map>
        </div>
        )
    };
}

export default MapShow;