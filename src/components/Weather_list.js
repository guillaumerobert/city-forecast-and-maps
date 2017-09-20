import React, {Component} from 'react';


class WeatherList extends Component{

    renderWeather(cityData){
        const cityName = cityData.data.city.name;
        const temperature = cityData.data.city.name; // TODO : retrieve data in (very imbricated) json from API 
        const pressure = cityData.data.city.name;
        const humidity = cityData.data.city.name;
        return(
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>{temperature}</td>
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