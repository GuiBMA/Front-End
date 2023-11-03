import "./styles.css"
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {

  const markers = [
    {
      geocode: [-22.99894750964253, -43.360862100471394],
      popUp: "New York City Center"
    },
    {
      geocode: [-22.89444635003229, -43.17955828893982],
      popUp: "Museu do Amanhã"
    },
    {
      geocode: [-22.965678337073676, -43.38467104175987],
      popUp: "Cidade Jardim"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./componentes/placeholder.png"),
    iconSize: [35,35]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (

    <MapContainer center={[-22.973941372428353, -43.33370171126849]} zoom={13}>
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
