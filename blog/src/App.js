import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["React", "Javascript", "Etc"]);
  let [like, setLike] = useState(0);

  let [modal, modal변경] = useState(false);

  let [입력값, 입력값변경] = useState("");

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "Angular";
    글제목변경(newArray);
  }

  function 정렬하기() {
    let 새로운정렬 = ["Javascript", "React", "Etc"];
    글제목변경(새로운정렬);
  }

  function 모달() {
    modal변경(!modal);
  }

  function 입력값저장(e) {
    입력값변경(e.target.value);
  }

  function 글내용(e) {
    입력값변경(e.target.value);
  }

  function 글저장() {
    let newArrays = [...글제목];
    newArrays.unshift(입력값);
    글제목변경(newArrays);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={정렬하기}>정렬</button>
      {글제목.map((글, i) => {
        return (
          <div className="list" key={i}>
            <h3>
              {글}
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
        );
      })}

      <div className="publish">
        <input onChange={글내용} />
        <button onClick={글저장}>저장</button>
      </div>

      <input onChange={입력값저장} />

      <button onClick={모달}>모달 버튼</button>

      {modal === true ? <Modal 글제목={글제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
