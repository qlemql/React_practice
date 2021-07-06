import React from "react";
import { Grid, Text, Image } from "../elements";

function CommentList(props) {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <>
      <Grid is_flex>
        <Grid is_flex width="auto">
          <Image shape="circle" />
          <Text bold>{user_name}</Text>
        </Grid>
        <Grid is_flex margin="0px 4px">
          <Text margin="0px">{contents}</Text>
          <Text margin="0px">{insert_dt}</Text>
        </Grid>
      </Grid>
    </>
  );
}

CommentList.defaultProps = {
  user_profile: "",
  user_name: "hyun",
  user_id: "",
  post_id: 1,
  contents: "귀여운 고기!",
  insert_dt: "2021-01-01 19:00:00",
};

export default CommentList;
