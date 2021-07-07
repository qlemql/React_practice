import React from "react";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "../shared/firebase";
import { history } from "../redux/config";

function Header(props) {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              사이트이름
            </Text>
          </Grid>
          <Grid is_flex>
            <Button text="글쓰기"></Button>
            <Button
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
              text="로그아웃"
            ></Button>
          </Grid>
        </Grid>
      </>
    );
  }
  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            사이트이름
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            _onClick={() => {
              history.push("/login");
            }}
            text="로그인"
          ></Button>
          <Button
            _onClick={() => {
              history.push("/signup");
            }}
            text="회원가입"
          ></Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
