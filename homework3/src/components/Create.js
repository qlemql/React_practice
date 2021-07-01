import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVocaFB } from "./addVoca";

const Create = (props) => {
  // input값 받아오기
  const vocaNameInput = React.useRef(null);
  const vocaDescInput = React.useRef(null);
  const vocaExamInput = React.useRef(null);
  // dispatch 사용 = action함수를 호출해서 사용한다.
  const dispatch = useDispatch();

  const addVocaList = () => {
    const voca = {
      text: vocaNameInput.current.value,
      desc: vocaDescInput.current.value,
      example: vocaExamInput.current.value,
    };
    dispatch(addVocaFB(voca));
  };

  return (
    <>
      <Container>
        <h1>단어 추가하기</h1>
        <Box>
          <span>단어</span>&nbsp;&nbsp;
          <input type="text" ref={vocaNameInput} />
        </Box>
        <Box>
          <span>설명</span>&nbsp;&nbsp;
          <input type="text" ref={vocaDescInput} />
        </Box>
        <Box>
          <span>예시</span>&nbsp;&nbsp;
          <input type="text" ref={vocaExamInput} />
        </Box>

        <Link to="/">
          <Button onClick={addVocaList}>추가하기</Button>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h1 {
    color: #1fa2ff;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, #6190e8, #a7bfe8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #eee;
  padding: 10px;
  border-radius: 15px;
  transition: all 0.3s;
  input {
    padding: 10px;
    border: none;
    outline: none;
  }
  &:hover {
    width: 110%;
    height: 110px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 15px;
  border: none;
  color: #6190e8;
  font-size: 24px;
  transition: all 0.3s;
  &:hover {
    width: 210px;
    height: 60px;
  }
`;

export default Create;
