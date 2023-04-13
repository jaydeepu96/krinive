import React from "react";
import BannerImg from "../../assets/BannerImg.png";

function Banner() {
  return (
    <div
      style={{
        width: "80vw",
        height: "800px",
        margin: "12px auto",
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        
      }}
    ></div>
  );
}

export default Banner;
