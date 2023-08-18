import React from 'react';

function AlternateBox({ picSrc, heading, text, isImageOnLeft }) {
  return (
    <div className="alternate-box">
      {/* Conditionally render image and text based on isImageOnLeft prop */}
      {isImageOnLeft ? (
        <>
        <div class="wrapper">
          <div className="image-box">
            <img src={picSrc} alt="Alternate" />
          </div>
          
          <div className="text-box"><h3 className="heading-box">{heading}</h3>{text}</div>
          </div>
        </>
      ) : (
        <>
        <div class="wrapper">
          <div className="text-box"><h3 className="heading-box">{heading}</h3>{text}</div>
          <div className="image-box">
            <img src={picSrc} alt="Alternate" />
          </div>
          </div>
        </>
      )}
      
    </div>
  );
}

export default AlternateBox;


