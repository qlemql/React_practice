import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "hyun",
    user_profile: "",
  },
  image_url: "../images.jpg",
  contents: "penguin",
  comment_cnt: 10,
  insert_dt: "2021-07-02 10:00:00",
};

export default Post;
