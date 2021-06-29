import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: [
      //   { vocaName: "penguin" },
      //   { vocaDesc: "Penguin is qute" },
      //   { vocaExam: "Penguin is lovely" },
      // ],
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
          </Switch>
        </Container>
      </>
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

export default withRouter(App);
