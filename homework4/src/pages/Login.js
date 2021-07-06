import React from "react";
import { Grid, Text, Button, Input } from "../elements";

function Login() {
  return (
    <>
      <Grid padding="16px">
        <Grid padding="16px 0px">
          <Text size="36px" bold>
            로그인
          </Text>
        </Grid>
        <Grid padding="16px 0px">
          <Grid>
            <Input label="아이디" placeholder={"아이디를 입력해주세요"} />
          </Grid>
          <Grid>
            <Input label="비밀번호" placeholder={"비밀번호를 입력해주세요"} />
          </Grid>
        </Grid>
        <Button text="로그인하기" padding="16px"></Button>
      </Grid>
    </>
  );
}

export default Login;
