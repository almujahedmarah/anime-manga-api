import "./App.css";

import Card from "./component/Card";
import GetData from "./component/GetData";
function hundleAnimeBtn() {
  return <GetData name="Anime" />;
}
function hundleMangaBtn() {
  return <GetData name="Manga" />;
}
function App() {
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
        <Card
          name="anime"
          img="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-office-checklist-icon-business-checklist-survey-test-icon-png-image_2047566.jpg"
        />
        <Card
          name="anime"
          img="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-office-checklist-icon-business-checklist-survey-test-icon-png-image_2047566.jpg"
        />
        <Card
          name="anime"
          img="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-office-checklist-icon-business-checklist-survey-test-icon-png-image_2047566.jpg"
        />
        <Card
          name="anime"
          img="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-office-checklist-icon-business-checklist-survey-test-icon-png-image_2047566.jpg"
        />
      </div>
    </>
  );
}

export default App;
