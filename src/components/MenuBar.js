import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuBar extends Component {

    showSettings(event){
        event.preventDefault();
    }

    render(){
        return (
            <div className="menu">
                <div className="btn-group-vertical">
                    <Link to="map" className="btn btn-primary">
                        Navigate
                    </Link>
                    <Link to="forecast" className="btn btn-primary">
                        Forecast
                    </Link>
                    <Link to="more" className="btn btn-primary">
                        More...
                    </Link>
                </div>
            </div>
        )
    };
}

export default MenuBar;
