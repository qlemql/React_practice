import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { loadBucket, CreateBucket } from "./redux/modules/bucket";
import { firestore } from "./firebase";

const mapStateToProps = (state) => {
  return { bucket_list: state.bucket.list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucket());
    },
    create: (bucket) => {
      dispatch(CreateBucket(bucket));
    },
  };
};

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {};
    this.text = React.createRef();
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  componentDidMount() {
    const bucket = firestore.collection("bucket_list");

    bucket.get().then((docs) => {
      let bucket_data = [];
      docs.forEach((doc) => {
        console.log(doc);
        console.log(doc.data());
        console.log(doc.id);

        if (doc.exists) {
          bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
        }
      });
      console.log(bucket_data);
    });
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
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <BucketList
                  history={this.props.history}
                  list={this.props.bucket_list}
                />
              )}
            />
            <Route path="/detail/:index" component={Detail} />
            <Route
              render={(props) => <NotFound history={this.props.history} />}
            />
          </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
