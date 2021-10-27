import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  let [resType, setResType] = useState("anime");
  let [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get("https://kitsu.io/api/edge//trending/" + resType)
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [resType]);

  function hundleAnimeBtn() {
    setResType("anime");
    console.log(resType);
    console.log(items);
  }
  function hundleMangaBtn() {
    setResType("manga");
    console.log(resType);
    console.log(items);
  }
  return (
    <>
      <div className="btnMain">
        <button className="btn" onClick={hundleAnimeBtn}>
          Anime
        </button>
        <button className="btn" onClick={hundleMangaBtn}>
          Manga
        </button>
      </div>
      <div className="cardMain">
        {items.map((item) => {
          if (item.attributes.titles.en == null) {
            return null;
          } else
            return (
              <div className="card">
                <h3>{item.attributes.titles.en}</h3>
                <img
                  className="img-fluid"
                  src={item.attributes.posterImage.large}
                  alt="img"
                ></img>
              </div>
            );
        })}
      </div>
    </>
  );
}
export default App;
