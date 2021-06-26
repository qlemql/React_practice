import React from "react";
import Test from "./FriendShip";
// import './style.css';
// import './scss_ex.scss';
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["김태현"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
    console.log(this.text.current);
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Container>
          <Test name={this.state.name} />
        </Container>
        <div>
          <input type="text" ref={this.text} />
        </div>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  color: red;
`;

export default App;
// test
