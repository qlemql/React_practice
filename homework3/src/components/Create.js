import React from "react";
import styled from "styled-components";

const Create = (props) => {
  return (
    <div>
      <Container>
        <h1>단어 추가하기</h1>
        <Word>단어</Word>
        <input />
        <Desc>설명</Desc>
        <input />
        <Example>예시</Example>
        <input />
        <button>추가하기</button>
      </Container>
    </div>
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

// const CardBox = styled.div`
//   width: 400px;
//   height: 300px;
//   background-color: #e2fff8;
//   margin-bottom: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: flex-start;
// `;

const Word = styled.div`
  border-bottom: 1px solid black;
  width: 35px;
`;

const Desc = styled.div`
  border-bottom: 1px solid black;
  width: 35px;
`;

const Example = styled.div`
  border-bottom: 1px solid black;
  width: 35px;
`;

export default Create;
