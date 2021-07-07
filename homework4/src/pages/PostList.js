import React from "react";
import Post from "../components/Post";
import Grid from "../elements/Grid";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

function PostList(props) {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);
  return (
    <>
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
    </>
  );
}

export default PostList;
