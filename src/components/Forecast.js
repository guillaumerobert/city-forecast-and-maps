import React, {Component} from 'react';

class Forecast extends Component{
    render(){
        return(
            <div className="container">
                <h1>Forecast is coming</h1>
                <form className="input-group">
                    <input />
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
                </form>
            </div>

        )
    };
}

export default Forecast;