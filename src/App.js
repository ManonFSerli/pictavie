import React from 'react';
import './App.css';
import logo from './logo-poitiers.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pictavie</h1>
        <img className="image" src={logo} alt="logo poitiers"/>
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
      <div className="bandeau carte">
      <h2>Répartitions des anomalies dans Grand Poitiers</h2>
      <div className="contenu-bandeau">
        <iframe src="https://dd1767341afc4528b238b5bf04b9ba56.eu-west-1.aws.found.io:9243/app/kibana#/visualize/edit/b67819a0-1778-11ea-a9b7-41cef0c775bf?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(mapCenter:!(46.59374437150817,0.3801830112934113),mapZoom:12),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(autoPrecision:!t,field:location,isFilteredByCollar:!t,mapBounds:(bottom_right:(lat:46.23495279600417,lon:1.4474487304687502),top_left:(lat:46.97463048970669,lon:-0.5877685546875002)),mapCenter:(lat:46.60632316159665,lon:0.42915344238281256),mapZoom:10,precision:6,useGeocentroid:!t),schema:segment,type:geohash_grid)),params:(addTooltip:!t,colorSchema:'Yellow+to+Red',dimensions:(geocentroid:(accessor:3,aggType:geo_centroid,format:(id:string),params:()),geohash:(accessor:1,aggType:geohash_grid,format:(id:string),params:(precision:5,useGeocentroid:!t)),metric:(accessor:2,aggType:count,format:(id:number),params:())),heatClusterSize:1.5,isDesaturated:!t,legendPosition:bottomright,mapCenter:!(0,0),mapType:'Scaled+Circle+Markers',mapZoom:2,wms:(enabled:!f,options:(format:image%2Fpng,transparent:!t),selectedTmsLayer:(attribution:'%3Cp%3E%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fwww.openstreetmap.org%2Fcopyright%22%3EOpenStreetMap+contributors%3C%2Fa%3E+%7C+%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fopenmaptiles.org%22%3EOpenMapTiles%3C%2Fa%3E+%7C+%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fwww.maptiler.com%22%3EMapTiler%3C%2Fa%3E+%7C+%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fwww.elastic.co%2Felastic-maps-service%22%3EElastic+Maps+Service%3C%2Fa%3E%3C%2Fp%3E',id:road_map,maxZoom:20,minZoom:0,origin:elastic_maps_service))),title:'',type:tile_map))" height="600" width="800"></iframe>
        <div className="text-bandeau">
          <p>
            Cette carte permet de visualiser les endroits où ont été faites les signalisations d'anomalies sur la voie
            publique. Il n'est pas renseigné l'état de la résolution de chacune d'elle. En effet, la gestion des
            signalements est faite sur papier.
          </p>
          <p>
            En fonction des données que vous désirez voir vous pouvez changer facilement la période qui vous
            intéresse. Pour information, les anomalies rescencée sont comprises entre le 01/01/2014 et le 31/12/2018.
            Vous pouvez donc choisir une période entre ces deux dates là.
          </p>
          <p>
            Vous pouvez observer l'évolution des signalements d'anomalies en fonction de l'année du mois ou même du
            jour qui vous intéresse. Pour cela il vous suffit juste de cliquer sur le calendrier et de séléctionner
            les dates qui vous conviennent.

          </p>
        </div>
        </div>
      </div>
      <div className="bandeau">Diagramme bâton</div>
      <div className="bandeau camembert">Camembert</div>
      <div className="bandeau">Conclusion</div>
    </div>
    </div>
  );
}

export default App;
