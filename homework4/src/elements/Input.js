import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";

function Input(props) {
  const { label, placeholder, _onChange, type, multiLine, value } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <InputArea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></InputArea>
      </Grid>
    );
  }
  return (
    <>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <InputBox
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        ></InputBox>
      </Grid>
    </>
  );
}

Input.defaultProps = {
  multiLine: false,
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
};

const InputArea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const InputBox = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
