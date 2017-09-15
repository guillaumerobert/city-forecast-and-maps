import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Forecast from './components/Forecast';
import MapShow from './components/Map';


export default (
    <Route path="/" component={App}> // Racine de l'application : le render de App est appelé. Toujours laisser un composant "racine", et plutot definir un IndexRouter
        <Route path="map" component={MapShow}/>
        <Route path="forecast" component={Forecast} /> // Nested routes.
    </Route>
);
