import React from "react";
import { Grid, Text, Button, Input } from "../elements";

function SignUp() {
  return (
    <>
      <Grid padding="16px">
        <Text size="36px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input label="아이디" placeholder="아이디를 입력해주세요" />
        </Grid>

        <Grid padding="16px 0px">
          <Input label="닉네임" placeholder="닉네임을 입력해주세요" />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            multiLine
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </Grid>

        <Button text="회원가입하기"></Button>
      </Grid>
    </>
  );
}

export default SignUp;
