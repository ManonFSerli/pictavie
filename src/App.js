import React from 'react';
import './App.css';
//import { LineChart, Line, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid } from 'recharts';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
//const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

function App() {
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
      <div>Carte</div>
      <div className="bandeau">Diagramme bâton
        <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>Camembert</div>
      <div>Conclusion</div>
    </div>
    </div>
  );
}

export default App;
