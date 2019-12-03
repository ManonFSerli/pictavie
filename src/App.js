import React from 'react';
//import logo from './logo.svg';
import './App.css';
import L from 'leaflet';
import { grandPoitiersGeoJson } from './GrandPoitiers.js';
require('leaflet/dist/leaflet.css');
require('leaflet/dist/images/marker-icon.png');




class App extends React.Component {

    _map;

    mountMap(elem) {
        this._map = L.map(elem).setView([38.57, -94.71], 4);
        L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
            minZoom: 1,
            maxZoom: 19
        }).addTo(this._map);
        L.geoJSON(grandPoitiersGeoJson).addTo(this._map);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Pictavie</h1>
                </header>
                <div>Description</div>
                <div ref={(elem) => this.mountMap(elem)} className="App-map"></div>
            </div>
        );
    }
}

export default App;
