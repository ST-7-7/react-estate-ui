import React from 'react';
import './Map.scss';
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from '../../components/pin/Pin';


function Map({items}) {
  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={10.5} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {items.map(item => (
        <Pin element={item} key={item.id} />
      ))}

    </MapContainer>
  )
}

export default Map;