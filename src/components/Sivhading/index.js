import React from 'react'
import svImg from "../../assets/sv.png"
function Sivhading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0px",
      }}
    >
      
      <img
        src={svImg}
        alt="sivcollection"
        style={{width: "1325px",
          height: "100px",
          marginTop: "5px",
          padding: "10px"
      } }
      />
    </div>
  )
}

export default Sivhading