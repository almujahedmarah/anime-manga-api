import React, { useState } from "react";
import "../App.css";
import Axios from "axios";

export default function GetData(props) {
  const [type, setType] = useState();
  function getData() {
    Axios.get("https://kitsu.io/api/edge//trending/" + props.name)
      .then((response) => {
        setType(response);
      })
      .catch((error) => console.log(error));
  }
  console.log("iam in getdata???" + props.name);
  return <div>GetData {props.name}</div>;
}
