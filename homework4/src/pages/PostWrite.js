import React from "react";
import { Grid, Text, Input, Image, Button } from "../elements";
import Upload from "../components/Upload";

function PostWrite(props) {
  return (
    <>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>
      <Grid padding="16px">
        <Text margin="0px" size="24px" bold>
          미리보기
        </Text>
        <Image
          shape="rectangle"
          src={"http://via.placeholder.com/400x300"}
        ></Image>
      </Grid>
      <Grid padding="16px">
        <Input label="게시글 내용" placeholder="게시글 작성" multiLine />
      </Grid>
      <Grid padding="16px">
        <Button text="게시글 작성"></Button>
      </Grid>
    </>
  );
}

export default PostWrite;
