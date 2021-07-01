import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const Home = (props) => {
  const voca_lists = useSelector((state) => state.voca_list);

  return (
    <div>
      <Container>
        <h2>MY DICTIONARY</h2>
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
  width: 100%;
  height: 100%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardBox = styled.div`
  width: 75%;
  height: 100%;
  background: linear-gradient(to right, #6190e8, #a7bfe8);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  padding: 10px;
  transition: all 0.3s;
  cursor: pointer;
  color: #cfdef3;
  &:hover {
    width: 80%;
    height: 110%;
  }
`;

const Word = styled.div`
  width: 35px;
  color: #eee;
  font-weight: bold;
`;

const ExampleContent = styled.div`
  color: #cfdef3;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #a4bde8;
  border: none;
  color: white;
  font-size: 36px;
  border-radius: 50%;
  transition: all 0.3s;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  &:hover {
    width: 55px;
    height: 55px;
  }
`;

export default withRouter(Home);
