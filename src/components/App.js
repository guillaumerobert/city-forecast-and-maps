import React , {Component} from 'react';
import Header from './Header';
import MenuBar from './MenuBar';
import '../App.css';

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <div>
                    <MenuBar/>
                </div>
                <div className="appcore">
                    {this.props.children} {/* To render nested components in routes */}
                </div>
            </div>
        )
    };
}

export default App;
