import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreateVoca } from "./addVoca";

const Create = (props) => {
  const vocaNameInput = React.useRef(null);
  const vocaDescInput = React.useRef(null);
  const vocaExamInput = React.useRef(null);
  const dispatch = useDispatch();

  const addVocaList = () => {
    const voca = {
      id: "",
      word: vocaNameInput.current.value,
      desc: vocaDescInput.current.value,
      example: vocaExamInput.current.value,
    };
    dispatch(CreateVoca(voca));
  };

  return (
    <>
      <Container>
        <h1>단어 추가하기</h1>
        <div>
          <span>단어</span>
          <input type="text" ref={vocaNameInput} />
        </div>
        <div>
          <span>설명</span>
          <input type="text" ref={vocaDescInput} />
        </div>
        <div>
          <span>예시</span>
          <input type="text" ref={vocaExamInput} />
        </div>

        <Link to="/">
          <button onClick={addVocaList}>추가하기</button>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #eee;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export default Create;
