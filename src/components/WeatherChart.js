import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

class WeatherChart extends Component {

    getAverageDiv(){
        if(this.props.celiusConv){ // If temperature comes in kelvin, convert it to celsius.
            return <div>{_.round((_.sum(this.props.data)/this.props.data.length)-273)} {this.props.unit} </div>
        }else{
            return <div>{_.round(_.sum(this.props.data)/this.props.data.length)} {this.props.unit} </div>
        }
    }

    render(){
        return(
            <td>
                <Sparklines height="120" width="180" data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                {this.getAverageDiv()}
            </td>
        );
    }
}

export default WeatherChart;