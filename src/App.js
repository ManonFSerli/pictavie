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
        this._map = L.map(elem).setView([46.55, 0.36], 10);
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
                <div className="contenu">
                    <div className="bandeau">
                        <h2>Pictavie qu'est-ce que c'est ? </h2>
                        Pictavie est le service qui a pour mission de recevoir et d’enregistrer les différents signalements des
                        usagers sur l’espace public de la Ville de POITIERS depuis janvier 2010. Autrement dit, si un usager
                        constate une fuite d’eau dans la rue, un trou dans la chaussée, une panne d’éclairage etc, il peut
                        déclarer cet incident auprès de Pictavie soit par le n°vert, soit par le site internet poitiers.fr, soit par
                        mail.
                        Les agents de Pictavie enregistrent les demandes dans un logiciel ; la plainte est transmise à la
                        direction métier concernée. Les réclamations sont enregistrées en fonction de la direction qui les
                        traitera ; c’est pourquoi, certaines anomalies peuvent se ressembler (par exemple, tags et
                        vandalisme ou alors corbeille et poubelle) mais comme elles seront traitées par des directions
                        différentes, elles sont dénommées différemment.
                        Depuis 2019, l’enregistrement des anomalies sur l’espace public des communes de la communauté
                        urbaine relève des centres de ressources (centres de ressources existants : Nord, Sud et Ouest).
                    </div>
                    <div ref={(elem) => this.mountMap(elem)} className="App-map"></div>
                    <div>Diagramme bâton</div>
                    <div>Camembert</div>
                    <div>Conclusion</div>
                </div>
            </div>
        );
    }
}

export default App;
