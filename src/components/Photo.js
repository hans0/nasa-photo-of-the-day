import React from "react";
import './Photo.css';

function Photo(props) {
  const {image, imageData} = props



  return (
    <div className="container">
      <div className="photo-side">
        <img src={image} alt={imageData.explanation} />
        <p>Photo for {imageData.date}</p>
        <p>Copyright {imageData.copyright}</p>
      </div>
      <div className="explanation">
        {imageData.explanation}
      </div>
    </div>
  )
}

export default Photo;