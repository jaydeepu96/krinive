import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Offer from "./components/offer";
import Midelbaner from "./components/midelbaner";
import Ramtsirt from "./components/Ramtsirt";
import Subhading from "./components/Subhading";
import Sivhading from "./components/Sivhading";
import Shtsirt from "./components/Shtsirt";
import Kshna from "./components/Kshna";
import Ksirt from "./components/Ksirt";
function App() {
  return (
    <div className="App">
      <Banner />
      <Collection />
      <Offer />
      <Midelbaner />
      <Ramtsirt />
      <Subhading />
      <Sivhading />
      <Shtsirt />
      <Kshna />
       <Ksirt/> 
    </div>
  );
}

export default App;
