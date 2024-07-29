import React from 'react';
import './Pin.scss';
import {Marker, Popup} from 'react-leaflet';
import {Link} from 'react-router-dom';
 
function Pin({element}) {
  return (
    <Marker position={[element.latitude, element.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={element.img} />
          <div className="textContainer">
            <Link to={`/${element.id}`}>{element.title}</Link>
            <span>{element.bedroom} bedroom</span>
            <b>$ {element.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin