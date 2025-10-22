// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const serviceIcon = new L.Icon({
//   iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
//   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// export default function ServiceMap({ filteredLocations }) {
//   return (
//     <div className="w-2/3 h-[600px]">
//       <MapContainer center={[23.6850, 90.3563]} zoom={7} style={{ height: "100%", width: "100%" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {filteredLocations.map(loc => (
//           <Marker key={loc.id} position={loc.position} icon={serviceIcon}>
//             <Popup>
//               <strong>{loc.name}</strong><br />
//               {loc.address}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }
