import React from "react";
import E1Img from "../../assets/E1.png";
function Offer() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        width: "100%",
        height: "400px",
        backgroundColor: "#FFF1C1",
        borderRadius: "25px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" ,justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="circle">
            <p>under<br/> now  299</p>
          </div>
          <button className="btn">Shope now</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="circle">    <p>under<br/> now 299</p></div>
          <button className="btn">Shope now</button>
        </div>{" "}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="circle">    <p>under<br/> now 299</p></div>
          <button className="btn">Shope now</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
