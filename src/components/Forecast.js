import React, {Component} from 'react';
import WeatherList from './Weather_list';

class Forecast extends Component{

    constructor(props){
        super(props);
        this.state = { city: '', weatherData :['Test']};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({city : event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        const API_KEY = "6f070e42054c188643b839497d443b00"; // From OpenWeatherMap.org , totally free, please register and use your own key !
        const BASE_URL = "api.openweathermap.org/data/2.5/forecast?q=,us&mode=json";

        /** TODO
         * Fetch Data and set this.state.weatherData
         */

    }


    render(){
        return(
            <div className="container">
                <h1>Forecast is coming</h1>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                    placeholder="Choose a city to show its forecast"
                    className="form-control"
                    value={this.state.city}
                    onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
                </form>
                <WeatherList weather={this.state.weatherData}/>
            </div>

        )
    };
}

export default Forecast;