import React from 'react';
import {useState} from 'react';
import './Slider.scss';

function Slider({imageList}) {
  
  const [imageIndex, setImageIndex] = useState(null);
  
  const changeSlide = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(imageList.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === imageList.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  }
  
  return (
    <div className='slider'>
      {imageIndex !== null && (
      <div className="fullSlider">
        <div className="arrow" onClick={()=> changeSlide('left')}>
          <img src='/arrow.png' />
        </div>

        <div className="imgContainer">
          <img src={imageList[imageIndex]}/>
        </div>

        <div className="arrow" onClick={()=>changeSlide('right')}>
          <img src='/arrow.png' className='right' />
        </div>
        <div className="close" onClick={()=>setImageIndex(null)}>
          X
        </div>
      </div>
    )}


      <div className="bigImage">
        <img src= {imageList[0]} onClick={() => setImageIndex(0)} />
      </div>

      {/* slice(1) 的意思是从数组的第二个元素开始提取丢弃数组的第一个元素 */}
      <div className="smallImage">
        {imageList.slice(1).map((image, index) =>(
          <img 
          src={image} 
          key={index}
          onClick={()=> setImageIndex(index+1)}
          />
          ))}
      </div>

    </div>
  )
}

export default Slider