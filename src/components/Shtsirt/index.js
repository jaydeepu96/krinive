import React from 'react'
import T4Img from "../../assets/T4.png";
import T5Img from "../../assets/T5.png";
import T6Img from "../../assets/T6.png";
import "../../App.css";
function Shtsirt
() {
  return (
    <div className="container">
    <div className="CardWrapper">
      <div className="CardImgWrapper">
        <img src={T4Img} alt="product" />
      </div>
     
    </div>

    <div className="CardWrapper">
      <div className="CardImgWrapper">
        <img src={T5Img} alt="product" />
      </div>
     
    </div>

    <div className="CardWrapper">
      <div className="CardImgWrapper">
        <img src={T6Img} alt="product" />
      </div>
     
    </div>
  </div>
  )
}

export default Shtsirt
