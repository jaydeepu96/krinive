import React from 'react'
import T7Img from "../../assets/T7.png";
import T8Img from "../../assets/T8.png";
import T9Img from "../../assets/T9.png";
import "../../App.css"
function Ksirt
() {
  return (
    <div className="container">
    <div className="CardWrapper">
      <div className="CardImgWrapper">
        <img src={T7Img} alt="product" />
      </div>
     
    </div>

    <div className="CardWrapper">
      <div className="CardImgWrapper">
        <img src={T8Img} alt="product" />
      </div>
     
    </div>

    <div className="CardWrapper">
      <div className="CardImgWrapper">
        <img src={T9Img} alt="product" />
      </div>
     
    </div>
  </div>
  )
}

export default Ksirt
