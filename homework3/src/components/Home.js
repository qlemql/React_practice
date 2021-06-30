import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const Home = (props) => {
  const voca_lists = useSelector((state) => state.voca_list);
  console.log(voca_lists);

  return (
    <div>
      <Container>
        <h1>MY DICTIONARY</h1>
        {voca_lists.map((v) => {
          return (
            <CardBox key={v.id}>
              <div>
                <Word>단어</Word>
                <div>{v.text}</div>
              </div>
              <div>
                <Word>설명</Word>
                <div>{v.desc}</div>
              </div>
              <div>
                <Word>예시</Word>
                <ExampleContent>{v.example}</ExampleContent>
              </div>
            </CardBox>
          );
        })}

        <AddButton
          onClick={() => {
            props.history.push("/Create");
          }}
        >
          +
        </AddButton>
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

const CardBox = styled.div`
  width: 400px;
  height: 300px;
  background-color: #e2fff8;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Word = styled.div`
  border-bottom: 1px solid black;
  width: 35px;
`;

// const Desc = styled.div`
//   border-bottom: 1px solid black;
//   width: 35px;
// `;

// const Example = styled.div`
//   border-bottom: 1px solid black;
//   width: 35px;
// `;

const ExampleContent = styled.div`
  color: blue;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: purple;
  border: none;
  color: white;
  font-size: 36px;
  border-radius: 50%;
`;

export default withRouter(Home);
