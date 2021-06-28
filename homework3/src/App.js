import React from "react";
import styled from "styled-components";

import { Route, Link } from "react-router-dom";
import Create from "./Create";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Container>
          <h1>MY DICTIONARY</h1>
          <Route path="/create" component={Create} />
          <CardBox>
            <Word>단어</Word>
            <div>Penguin</div>
            <Desc>설명</Desc>
            <div>this is penguin</div>
            <Example>예시</Example>
            <ExampleContent>저 펭귄은 귀엽다</ExampleContent>
          </CardBox>
          <CardBox>
            <Word>단어</Word>
            <div>Penguin</div>
            <Desc>설명</Desc>
            <div>this is penguin</div>
            <Example>예시</Example>
            <ExampleContent>저 펭귄은 귀엽다</ExampleContent>
          </CardBox>
        </Container>
        <Link to="/create">+</Link>
      </div>
    );
  }
}

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

const Desc = styled.div`
  border-bottom: 1px solid black;
  width: 35px;
`;

const Example = styled.div`
  border-bottom: 1px solid black;
  width: 35px;
`;

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

export default App;
