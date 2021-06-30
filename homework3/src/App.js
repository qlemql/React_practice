import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import { firestore } from "./firebase";
import { connect } from "react-redux";
import { loadVocaFB } from "./components/addVoca";

const mapStateToProps = (state) => ({
  voca_list: state.voca_list,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadVocaFB());
  },
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.load();
    // const addVoca = firestore.collection("vocaburlary2");
    // // firestore에 있는 데이터 조회
    // addVoca
    //   .doc("voca_list")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc);
    //       console.log(doc.data());
    //       console.log(doc.id);
    //     }
    //     console.log(doc.exists);
    //   });
    // // store에 있는 id값을 모를때 조회법
    // addVoca.get().then((docs) => {
    //   let voca_data = [];
    //   docs.forEach((doc) => {
    //     if (doc.exists) {
    //       voca_data = [...voca_data, { id: doc.id, ...doc.data() }];
    //     }
    //   });
    //   console.log(voca_data);
    // });
    // // 데이터 store에 저장하기
    // addVoca.add({ text: "pengwing", completed: false }).then((docRef) => {
    //   console.log(docRef);
    //   console.log(docRef.id);
    // });
    // // store에 있는 데이터 수정하기
    // addVoca.doc("voca_list").update({ text: "penguins" });
    // // store에 있는 데이터 삭제하기
    // addVoca
    //   .doc("voca_list2")
    //   .delete()
    //   .then((docRef) => {
    //     console.log("삭제완료");
    //   });
    // // store에 있는 collection 이름 변경
    // addVoca.doc("voca_list").set({ text: "penguin!!", completed: false });
  }

  render() {
    return (
      <>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
