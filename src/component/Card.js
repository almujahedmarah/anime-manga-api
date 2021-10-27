import React from "react";
import "../App.css";

export default function Card(props) {
  return (
    <div
    className="card"
  >
  <h3 className="title">{props.name}</h3>

  <img
  src={props.img}
  alt="img"
/>
  </div>

    
  );
}
