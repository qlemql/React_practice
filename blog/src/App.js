import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["React", "Javascript", "Etc"]);
  let [like, setLike] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "Angular";
    글제목변경(newArray);
  }

  function 정렬하기() {
    let 새로운정렬 = ["Javascript", "React", "Etc"];
    글제목변경(새로운정렬);
  }

  let [modal, modal변경] = useState(false);

  function 모달() {
    modal변경(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={정렬하기}>정렬</button>
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
        <h3 onClick={모달}> {글제목[2]} </h3>
        <p>10월 5일 발행</p>
        <hr />
      </div>

      <button onClick={모달}>모달 버튼</button>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
