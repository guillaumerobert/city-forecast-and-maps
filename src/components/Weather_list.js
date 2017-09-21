import React, {Component} from 'react';
import WeatherChart from './WeatherChart';


class WeatherList extends Component{


    renderWeather(cityData){
        const cityName = cityData.data.city.name;
        const temperature = cityData.data.list.map(weather => weather.main.temp); // temperature comes in kelvin.
        const pressure = cityData.data.list.map(weather => weather.main.pressure);
        const humidity = cityData.data.list.map(weather => weather.main.humidity);
        return(
            <tr key={cityName}>
                <td>{cityName}</td>
                <WeatherChart data={temperature} color="red" unit="C°" celiusConv={true} />
                <WeatherChart data={pressure} color="green" unit="kPa" />
                <WeatherChart data={humidity} color="blue" unit="%" />
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