import "./styles.css"
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {

  const markers = [
    {
      geocode: [-22.98606, -43.18918],
      popUp: "Forte de Copacabana"
    },
    {
      geocode: [-22.542127, -43.101028],
      popUp: "Museu Histórico Nacional"
    },
    {
      geocode: [-22.9582, -43.2116],
      popUp: "Parque Lage"
    },
    {
      geocode: [-22.9673, -43.1790],
      popUp: "Copacabana Palace"
    },
    {
      geocode: [-22.9054706, -43.2263060687371],
      popUp: "Quinta da Boa Vista"
    },
    {
      geocode: [-22.8980, -43.1853],
      popUp: "Pedra do Sal"
    },
    {
      geocode: [-22.984216021674793, -43.20474543015302],
      popUp: "Edifício Estrela"
    },
    {
      geocode: [-22.964621816399756, -43.17811746485032],
      popUp: "Edifício Alagoas"
    },
    {
      geocode: [-22.98111206899615, -43.20446804872199],
      popUp: "Fonseca e Silva"
    },
    {
      geocode: [-22.94318027899566, -43.18666209839573],
      popUp: "Condomínio Les Palais Botafogo"
    },
    {
      geocode: [-22.948466935789078, -43.163785508613735],
      popUp: "Edifício Urca"
    },
    {
      geocode: [-22.9006409968203, -43.17613565685323],
      popUp: "Casa França-Brasil"
    },
    {
      geocode: [-22.910748657537425, -43.17602780204663],
      popUp: "Edifício Natal"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./imagens/placeholder.png"),
    iconSize: [30,30]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (

    <MapContainer center={[-22.9694, -43.1868]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

    </MapContainer>

  );
}

export default App;
