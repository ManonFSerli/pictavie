import React from 'react';
import './App.css';
import logo from './image/logo-poitiers.png';
import carte from './image/carte_anomalies.png';
import quartiers from './image/quartiers.png';
import communes from './image/communes.png';
import communes2 from './image/communes2.png';
import temps from './image/temps.png';
import serli from './image/logo-serli.png';
import pictavie from './image/pictavie2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className="pictavie" src={pictavie}/>
          <img className="image" src={logo} alt="logo poitiers"/>
        {/* <div className="ancres">
          <a href="#introduction"> Introduction </a>
          <a href="#carte">Carte de Poitiers</a>
          <a href="#quartier">Quartiers</a>
          <a href="#services">Services</a>
          <a href="#evolution">Evolution</a>
          <a href="#conclusion">Conclusion</a>
        </div> */}
      </header>
    <div className="contenu">
      <div id="introduction" className="bandeau">
        <h2>Pictavie qu'est-ce que c'est ? </h2>
        <i>"Pictavie est le service qui a pour mission de recevoir et d’enregistrer les différents signalements des
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
        urbaine relève des centres de ressources (centres de ressources existants : Nord, Sud et Ouest)."</i>
      </div>
      <div id="carte" className="bandeau carte">
      <h2>Où se trouvent ces anomalies ?</h2>
      <p className="explication">(* La carte ci-dessous n'est plus dynamique, nous avons été confronté à quelques soucis et n'avons pas eu le temps d'intégrer l'outil Kibana à notre site)</p>
      <div className="contenu-bandeau">
        <img className="img-carte" src={carte} alt="carte des anomalies de grand poitiers"/>
        {/* <iframe src="https://dd1767341afc4528b238b5bf04b9ba56.eu-west-1.aws.found.io:9243/app/kibana#/visualize/edit/b67819a0-1778-11ea-a9b7-41cef0c775bf?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(mapCenter:!(46.59374437150817,0.3801830112934113),mapZoom:12),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(autoPrecision:!t,field:location,isFilteredByCollar:!t,mapBounds:(bottom_right:(lat:46.23495279600417,lon:1.4474487304687502),top_left:(lat:46.97463048970669,lon:-0.5877685546875002)),mapCenter:(lat:46.60632316159665,lon:0.42915344238281256),mapZoom:10,precision:6,useGeocentroid:!t),schema:segment,type:geohash_grid)),params:(addTooltip:!t,colorSchema:'Yellow+to+Red',dimensions:(geocentroid:(accessor:3,aggType:geo_centroid,format:(id:string),params:()),geohash:(accessor:1,aggType:geohash_grid,format:(id:string),params:(precision:5,useGeocentroid:!t)),metric:(accessor:2,aggType:count,format:(id:number),params:())),heatClusterSize:1.5,isDesaturated:!t,legendPosition:bottomright,mapCenter:!(0,0),mapType:'Scaled+Circle+Markers',mapZoom:2,wms:(enabled:!f,options:(format:image%2Fpng,transparent:!t),selectedTmsLayer:(attribution:'%3Cp%3E%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fwww.openstreetmap.org%2Fcopyright%22%3EOpenStreetMap+contributors%3C%2Fa%3E+%7C+%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fopenmaptiles.org%22%3EOpenMapTiles%3C%2Fa%3E+%7C+%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fwww.maptiler.com%22%3EMapTiler%3C%2Fa%3E+%7C+%3Ca+rel%3D%22noreferrer+noopener%22+href%3D%22https:%2F%2Fwww.elastic.co%2Felastic-maps-service%22%3EElastic+Maps+Service%3C%2Fa%3E%3C%2Fp%3E',id:road_map,maxZoom:20,minZoom:0,origin:elastic_maps_service))),title:'',type:tile_map))" height="600" width="800"></iframe> */}
        <div className="text-bandeau texte-droite">
          <p>
            Cette carte permet de visualiser les endroits où ont été faites les signalisations d'anomalies sur la voie
            publique. Il n'est pas renseigné l'état de la résolution de chacune d'elle. En effet, la gestion des
            signalements est faite sur papier.
          </p>
          <p>
            En fonction des données que vous désirez voir vous pouvez changer facilement la période qui vous
            intéresse. Pour information, les anomalies rescencées sont comprises entre le 01/01/2014 et le 31/12/2018.
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
      <div id="quartier" className="bandeau">
      <h2>Quels sont les quartiers les plus touchés à Poitiers ?</h2>
      <p className="explication">(* Le diagramme ci-dessous n'est plus dynamique, nous avons été confronté à quelques soucis et n'avons pas eu le temps d'intégrer l'outil Kibana à notre site)</p>
      <div className="contenu-bandeau">
        <p className="texte-gauche">Tout les quartiers sont touchés par des anomalies. Cela peut s'expliquer par le fait qu'il ait plus de passage 
          dans ces zones-ci. Il y aurait donc plus de dégradations dûes aux fluctuations de population mais aussi car plus de
          personne sont susceptibles de déclarer des anomalies.
          <br/><br/>
          Parmi les quartiers les plus touchés : 
          <ul>
            <li>Le centre-ville de Poitiers</li>
            <li>Montbernage</li>
            <li>Faubourg du Pont-Neuf</li>
          </ul>
          <br/>
          Ici, les communes de grand Poitiers ne sont pas représentées car la proportion d'anomalies est bien moins grande que dans les quartiers de Poitiers.
        </p>
        {/* <iframe src="https://dd1767341afc4528b238b5bf04b9ba56.eu-west-1.aws.found.io:9243/app/kibana#/visualize/edit/d23257d0-1801-11ea-a9b7-41cef0c775bf?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Nombre+de+signalisations'),schema:metric,type:count),(enabled:!t,id:'2',params:(customLabel:Quartiers,exclude:'',field:quartier.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:20),schema:segment,type:terms),(enabled:!t,id:'3',params:(customLabel:'',field:service.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:group,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(series:!((accessor:1,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:())),x:(accessor:0,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:()),y:!((accessor:2,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Nombre+de+signalisations'),drawLinesBetweenPoints:!t,lineWidth:2,mode:stacked,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2334130C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Nombre+de+signalisations'),type:value))),title:'Classement+quartiers+%26+services',type:histogram))" height="600" width="800"></iframe> */}
        <img className="img-carte" src={quartiers} alt="quartiers les plus touchés"/>
      </div>
      </div>
      <div id="services" className="bandeau camembert">
        <h2>Quels sont les services qui interviennent le plus dans chaque commune / quartier ?</h2>
        <p className="explication">(* Les diagrammes ci-dessous n'est plus dynamique, nous avons été confronté à quelques soucis et n'avons pas eu le temps d'intégrer l'outil Kibana à notre site)</p>
        <div className="contenu-camemberts"/*className="contenu-bandeau"*/>
          {/* <iframe src="https://dd1767341afc4528b238b5bf04b9ba56.eu-west-1.aws.found.io:9243/app/kibana#/visualize/edit/1fea9880-1806-11ea-a9b7-41cef0c775bf?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Nombre+de+signalement'),schema:metric,type:count),(enabled:!t,id:'2',params:(customLabel:Commune,field:commune.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,row:!t,size:4),schema:split,type:terms),(enabled:!t,id:'3',params:(customLabel:Service,field:service.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:8),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,dimensions:(buckets:!((accessor:2,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:())),metric:(accessor:3,aggType:count,format:(id:number),params:()),splitRow:!((accessor:0,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:()))),isDonut:!t,labels:(last_level:!t,show:!t,truncate:100,values:!t),legendPosition:right,type:pie),title:'Communes+%26+Signalisations',type:pie))" height="600" width="800"></iframe> */}
          <img className="img-carte" src={communes} alt="type de signalements"/>
          {/* <iframe src="https://dd1767341afc4528b238b5bf04b9ba56.eu-west-1.aws.found.io:9243/app/kibana#/visualize/edit/c7e3fbb0-180d-11ea-a9b7-41cef0c775bf?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'))&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f49cd190-1772-11ea-a9b7-41cef0c775bf,key:commune,negate:!t,params:(query:poitiers),type:phrase),query:(match:(commune:(query:poitiers,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f49cd190-1772-11ea-a9b7-41cef0c775bf,key:commune,negate:!t,params:(query:saint-benoit),type:phrase),query:(match:(commune:(query:saint-benoit,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f49cd190-1772-11ea-a9b7-41cef0c775bf,key:commune,negate:!t,params:(query:Buxerolles),type:phrase),query:(match:(commune:(query:Buxerolles,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f49cd190-1772-11ea-a9b7-41cef0c775bf,key:commune,negate:!t,params:(query:Chasseneuil-du-poitou),type:phrase),query:(match:(commune:(query:Chasseneuil-du-poitou,type:phrase))))),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Nombre+de+signalisations'),schema:metric,type:count),(enabled:!t,id:'2',params:(customLabel:Commune,field:commune.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,row:!t,size:4),schema:split,type:terms),(enabled:!t,id:'3',params:(customLabel:Service,field:service.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:8),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,dimensions:(buckets:!((accessor:2,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:())),metric:(accessor:3,aggType:count,format:(id:number),params:()),splitRow:!((accessor:0,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:()))),isDonut:!t,labels:(last_level:!t,show:!t,truncate:100,values:!t),legendPosition:right,type:pie),title:'Communes+%26+Signalisation+2',type:pie))" height="600" width="800"></iframe> */}
          <img className="img-carte" src={communes2} alt="type de signalements"/>
        </div>
      </div>
      <div id="evolution" className="bandeau">
        <h2>Evolution des anomalies selon le temps</h2>
        <p className="explication">(* La courbe ci-dessous n'est plus dynamique, nous avons été confronté à quelques soucis et n'avons pas eu le temps d'intégrer l'outil Kibana à notre site)</p>
        <div className="contenu-bandeau">
          {/* <iframe src="https://dd1767341afc4528b238b5bf04b9ba56.eu-west-1.aws.found.io:9243/app/kibana#/visualize/edit/69e06710-1817-11ea-a9b7-41cef0c775bf?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Nombre+d!'anomalies'),schema:metric,type:count),(enabled:!t,id:'2',params:(customLabel:'+',drop_partials:!f,extended_bounds:(),field:'@timestamp',interval:auto,min_doc_count:1,scaleMetricValues:!f,timeRange:(from:'2014-01-01T09:50:27.333Z',to:'2018-12-31T10:05:42.257Z'),useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:date_histogram,format:(id:date,params:(pattern:YYYY-MM-DD)),params:(bounds:(max:'2018-12-31T10:05:42.257Z',min:'2014-01-01T09:50:27.333Z'),date:!t,format:YYYY-MM-DD,interval:P30D)),y:!((accessor:1,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(),legendPosition:right,seriesParams:!((data:(id:'1',label:'Nombre+d!'anomalies'),drawLinesBetweenPoints:!t,interpolate:cardinal,lineWidth:2,mode:normal,show:!t,showCircles:!f,type:line,valueAxis:ValueAxis-1)),thresholdLine:(color:%23461A0A,show:!f,style:full,value:10,width:1),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Nombre+d!'anomalies'),type:value))),title:Anomalies%2Ftemps,type:line))" height="600" width="800"></iframe> */}
          <img className="img-carte" src={temps} alt="evolution des anomalies"/>
          <div>
            <p className="texte-gauche">Sur ce graphique on peut voir l'évolution du nombre d'anomalies selon le temps.</p>
            <p>Certains moments sont plus propices aux signalements d'anomalies notemmment les débuts d'années scolaire.</p>
          </div>
        </div>
      </div>
      <div id="conclusion" className="bandeau conclusion">
          <h2>Conclusion</h2>
          <p>Outils utilisés : </p>
          <ul>
            <li>Jeu de de données Pictavie sur <a href="https://data.grandpoitiers.fr/explore/dataset/espace-public-signalement-des-anomalies-pictavie-complet/table/">le site de Grand Poitiers</a></li>
            <li><a href="https://www.elastic.co/fr/products/kibana">Kibana</a> pour le rendu graphique des données</li>
            <li><a href="https://reactjs.org/a">ReactJS</a> pour le développement du site</li>
          </ul>
          <p>En remerciant Grand Poitiers pour nous avoir proposé ce Hackaviz 2019</p>

          <p>Réalisé par Marine DROIT et Manon FAURE étudiantes en Master 2 Informatique à l'Université de Poitiers et en alternance à Serli</p>
          <a href="https://www.serli.com/"><img className="logo-serli" src={serli} alt="Serli"/></a>
          
      </div>
    </div>
    </div>
  );
}

export default App;
