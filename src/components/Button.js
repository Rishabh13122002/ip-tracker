import React from "react";
import L from "leaflet";

const Button = ({ address }) => {
  const map = new L.Map("map", {
    center: [address.location.lat, address.location.lng],
    zoom: 13,
  });
  return (
    <button
    onClick={() => map.setMapTypeId("satellite")}
    style={{ margin: 10 }}
  >
    Satellite Mode
  </button>
  )
}


export default Button;
