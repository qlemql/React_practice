import React from "react";
import { Grid } from "../elements";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

function PostDetail() {
  return (
    <>
      <Grid>
        <Post></Post>
        <CommentWrite />
        <CommentList />
      </Grid>
    </>
  );
}

export default PostDetail;
