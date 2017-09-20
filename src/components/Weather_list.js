import React, {Component} from 'react';


class WeatherList extends Component{

    renderWeather(cityData){ // TODO : Add a row with charts for any data given from api
        return(
            <tr>
                <td>City</td>
                <td>Temp</td>
                <td>Pres</td>
                <td>Humi</td>
            </tr>
        );
    }


    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

export default WeatherList;