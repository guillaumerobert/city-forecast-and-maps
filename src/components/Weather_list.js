import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';


class WeatherList extends Component{


    renderWeather(cityData){
        const cityName = cityData.data.city.name;
        const temperature = cityData.data.list.map(weather => weather.main.temp); // temperature comes in kelvin.
        const pressure = cityData.data.list.map(weather => weather.main.pressure);
        const humidity = cityData.data.list.map(weather => weather.main.humidity);
        return(
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>
                    <Sparklines height="120" width="180" data={temperature}>
                        <SparklinesLine color="red" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{_.round((_.sum(temperature)/temperature.length)-273)} C°</div>
                </td>
                <td>
                    <Sparklines height="120" width="180" data={pressure}>
                        <SparklinesLine color="green" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{_.round(_.sum(pressure)/pressure.length)} kPa</div>
                </td>
                <td>
                    <Sparklines height="120" width="180" data={humidity}>
                        <SparklinesLine color="blue" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{_.round(_.sum(humidity)/humidity.length)} %</div>
                </td>
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