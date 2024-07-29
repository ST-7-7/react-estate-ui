import React from 'react';
import {Link} from 'react-router-dom';
import './Card.scss';

function Card({element}) {
  return (
    <div className='card'>
      <Link to={`/${element.id}`} className='imageContainer'>
        <img src={element.img} />
      </Link>

      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${element.id}`}>{element.title}</Link>
        </h2>
        <p className='address'>
          <img src='/pin.png' />
          <span>{element.address}</span>
        </p>
        <p className='price'>
          $ {element.price}
        </p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src='/bed.png' />
              <span>{element.bedroom} bedroom</span>
            </div>
            <div className='feature'>
              <img src='/bath.png' />
              <span>{element.bathroom} bathroom</span>
            </div>
          </div>
          <div className='icons'>
            <div className="icon">
              <img src='/save.png' />
            </div>
            <div className="icon">
              <img src='/chat.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;