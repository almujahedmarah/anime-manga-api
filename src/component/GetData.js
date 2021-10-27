import React from "react";
import "../App.css";

export default function GetData(props) {
  console.log("iam in getdata???" + props.name);
  return <div>GetData {props.name}</div>;
}
