import React, {Component} from 'react';


class WeatherList extends Component{

    renderWeather(cityData){
        const cityName = cityData.data.city.name;
        const temperature = cityData.data.list[0].main.temp; // temperature comes in kelvin.
        const pressure = cityData.data.list[0].main.pressure;
        const humidity = cityData.data.list[0].main.humidity;
        return(
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>{ Number((temperature - 273).toFixed(1))}</td>
                <td>{pressure}</td>
                <td>{humidity}</td>
            </tr>
        );
    }


    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C°)</th>
                    <th>Pressure (kPa)</th>
                    <th>Humidity (%)</th>
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