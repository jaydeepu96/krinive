import React from "react";
import mencollection from "../../assets/mencollection.png";
import womencollection from "../../assets/womencollection.png";

function Collection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0px",
      }}
    >
      <img
        src={mencollection}
        alt="men Coolection"
        style={{ width: "500px", height: "500px" }}
      />
      <img
        src={womencollection}
        alt="women Coolection"
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
}

export default Collection;
