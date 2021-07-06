import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PostList from "../pages/PostList";
import Header from "../components/Header";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";

import Grid from "../elements/Grid";

function App() {
  return (
    <>
      <BrowserRouter>
        <Grid>
          <Header></Header>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={PostList} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/detail" exact component={PostDetail} />
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
