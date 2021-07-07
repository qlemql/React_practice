import React from "react";
import { Grid, Text, Button, Input } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

function SignUp() {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (pwd.length < 6) {
      window.alert(
        "패스워드는 6자리 이상이어야 하며 영문과 숫자를 반드시 포함해야합니다."
      );
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지않습니다!");
      return;
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
    
  };
  return (
    <>
      <Grid padding="16px">
        <Text size="36px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            _onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="이메일을 입력해주세요"
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="닉네임을 입력해주세요"
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요"
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </Grid>

        <Button _onClick={signup} text="회원가입하기"></Button>
      </Grid>
    </>
  );
}

export default SignUp;
