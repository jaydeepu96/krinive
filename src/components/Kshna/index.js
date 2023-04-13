import React from 'react'
import kImg from "../../assets/k.png";
import S1Img from "../../assets/S1.png";
function Kshna () {
  return (
    <div
      style={{
         display: "block",
        // justifyContent: "space-around",
        // margin: "20px 0px",
      }}
    >
      
      <img
        src={kImg}
        alt="krishnaimages"
        style={{ width: "1329px",
          height: "100px",
          padding: "5px",
          marginTop: "180px"}}
      />
      <img src={S1Img}
        alt="krimages"
        style={{ width: "100px",
          height: "10px",
        
          marginTop: "5px"}} />
    </div>
  )
}

export default Kshna
