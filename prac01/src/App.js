import React from "react";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MyStyled>hello React!</MyStyled>
    </div>
  );
}

const MyStyled = styled.div`
  width: 50vh;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover {
    background-color: #ddd;
    color: red;
  }
  background-color: ${(props) => (props.bgColor ? "red" : "purple")};
`;

export default App;
// test
