import React, {Component} from 'react';
import WeatherList from './Weather_list';
import axios from 'axios';

class Forecast extends Component{

    constructor(props){
        super(props);
        this.state = { city: '', weatherData :[]};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({city : event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        let self = this;

        const city = this.state.city;

        // Notice : This design is probably not the best way to keep the data. Here we maintain the weather state of the component.
        // A better approach for production app could be a Redux based architecture.

        const API_KEY = "6f070e42054c188643b839497d443b00"; // From OpenWeatherMap.org , totally free, please register and use your own key !
        const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast?";

        const fullUrl = `${BASE_URL}q=${city}&mode=json&appid=${API_KEY}`;

        axios.get(fullUrl).then(function(response){
                self.setState({weatherData : self.state.weatherData.concat(response)});
        }).catch(function(error){
            console.log(error);
        });

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