import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/config";

import PostList from "../pages/PostList";
import Header from "../components/Header";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Permit from "./Permit";

import { Grid, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "../shared/firebase";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Grid>
          <Header></Header>
          <ConnectedRouter history={history}>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/" exact component={PostList} />
            <Route path="/write" exact component={PostWrite} />
            <Route path="/write/:id" exact component={PostWrite} />
            <Route path="/detail" exact component={PostDetail} />
          </ConnectedRouter>
        </Grid>
        <Permit>
          <Button
            is_float
            text="+"
            _onClick={() => {
              history.push("/write");
            }}
          ></Button>
        </Permit>
      </BrowserRouter>
    </>
  );
}

export default App;
