import React from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Detail from "./Detail";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
    this.text = React.createRef();
  }

  addBucketList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;

    this.setState({ list: [...list, new_item] });
  };

  componentDidMount() {
    console.log(this.text);
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <Route
            path="/"
            exact
            render={(props) => (
              <BucketList history={this.props.history} list={this.state.list} />
            )}
          />
          <Route path="/detail" component={Detail} />
        </Container>
        <Add>
          <input type="text" ref={this.text}></input>
          <button onClick={this.addBucketList}>추가하기</button>
        </Add>
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
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Add = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 20px auto;
`;

export default withRouter(App);
