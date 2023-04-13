import React from "react";
import T3Img from "../../assets/T3.png";
import T2Img from "../../assets/T2.png";
import "../../App.css";

function card() {
  return (
    <div className="container">
      <div className="CardWrapper">
        <div className="CardImgWrapper">
          <img src={T3Img} alt="product" />
        </div>
       
      </div>

      <div className="CardWrapper">
        <div className="CardImgWrapper">
          <img src={T2Img} alt="product" />
        </div>
       
      </div>

      <div className="CardWrapper">
        <div className="CardImgWrapper">
          <img src={T3Img} alt="product" />
        </div>
       
      </div>
    </div>
  );
}

export default card;
