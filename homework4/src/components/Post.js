import React from "react";
import { Grid, Text, Image } from "../elements";

function Post(props) {
  return (
    <>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid margin="0px auto">
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글{props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </>
  );
}

Post.defaultProps = {
  user_info: {
    user_name: "hyun",
    user_profile: require("../images/gogi.jpg").default,
  },
  image_url: require("../images/gogi.jpg").default,
  contents: "고기야!",
  comment_cnt: 10,
  insert_dt: "2021-07-06 20:55",
};

export default Post;
