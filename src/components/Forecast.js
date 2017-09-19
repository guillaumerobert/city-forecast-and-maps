import React, {Component} from 'react';

class Forecast extends Component{

    constructor(props){
        super(props);
        this.state = { city: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({city : event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        /** TODO
         * Fetch Data
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
            </div>

        )
    };
}

export default Forecast;