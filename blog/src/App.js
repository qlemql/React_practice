import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["React", "Javascript", "Etc"]);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button
        onClick={() => {
          글제목변경(["Angular", "Javascript", "Etc"]);
        }}
      >
        버튼
      </button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h3>
        <p>10월 5일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>10월 5일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>10월 5일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
